package org.aion.avm.tooling.deploy.renamer;

import org.aion.avm.tooling.deploy.eliminator.ClassInfo;
import org.objectweb.asm.tree.ClassNode;
import org.objectweb.asm.tree.MethodNode;

import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

public class MethodRenamer {
    private static final boolean printEnabled = false;

    // this set contains the method names that should not be changed
    private static final Set<String> restrictions = Set.of(new String[]{
            "hashCode", "equals", "<init>", "<clinit>", "toString",
            "readObject", "writeObject"
    });
    private static Set<String> jclMethods;

    public static Map<String, String> renameMethods(Map<String, ClassNode> classMap, Map<String, ClassInfo> classInfoMap,
                                                    String mainClass, String[] externalMethods) {
        // populate a list of all the method names in non-final jcl classes that are used in the jar
        jclMethods = getUsedJclMethodList(classInfoMap);

        Map<String, String> newMethodMappingsForRemapper = new HashMap<>();
        Map<String, String> newMethodNames = new HashMap<>();
        NameGenerator generator = new NameGenerator();

        List<String> externalMethodList = Arrays.asList(externalMethods);

        for (Map.Entry<String, ClassNode> e : classMap.entrySet()) {
            String className = e.getKey();
            List<MethodNode> methodNodes = e.getValue().methods;
            ClassInfo currentClassInfo = classInfoMap.get(className);

            for (MethodNode m : methodNodes) {
                if (externalMethodList.contains(m.name + m.desc)) {
                    continue;
                }
                // handle enums
                if ((e.getValue().superName.equals("java/lang/Enum")) && (m.name.equals("values") || m.name.equals("valueOf"))) {
                    printInfo(e.getKey(), m.name, newMethodMappingsForRemapper.get(makeMethodFullName(className, m)));
                } else if (canBeRenamed(m) && !newMethodMappingsForRemapper.containsKey(makeMethodFullName(className, m))) {
                    // Rename a method only if it does not have the same name as a jcl method, and it has not been renamed before
                    String newName;
                    if (!newMethodNames.containsKey(m.name)) {
                        newName = generator.getNextMethodOrFieldName(jclMethods);
                        newMethodNames.put(m.name, newName);
                    } else {
                        newName = newMethodNames.get(m.name);
                    }

                    newMethodMappingsForRemapper.put(makeMethodFullName(className, m), newName);
                    printInfo(e.getKey(), m.name, newName);

                    // mark all the children methods to be renamed.
                    // we do not need to check if the method is defined in the child class
                    for (ClassInfo c : currentClassInfo.getChildren()) {
                        newMethodMappingsForRemapper.put(makeMethodFullName(c.getClassName(), m), newName);
                        printInfo(c.getClassName(), m.name, newName);
                    }
                } else {
                    printInfo(e.getKey(), m.name, newMethodMappingsForRemapper.get(makeMethodFullName(className, m)));
                }
            }
        }
        return newMethodMappingsForRemapper;
    }

    private static boolean canBeRenamed(MethodNode node) {
        return !restrictions.contains(node.name) && !jclMethods.contains(node.name);
    }

    private static Set<String> getUsedJclMethodList(Map<String, ClassInfo> classInfoMap) {
        Set<String> jclMethods = new HashSet<>();
        for (ClassInfo classInfo : classInfoMap.values()) {
            if (classInfo.isSystemClass()) {
                continue;
            }
            List<String> parents = classInfo.getParents().stream().map(ClassInfo::getClassName).collect(Collectors.toList());
            for (String p : parents) {
                if (classInfoMap.containsKey(p)) {
                    ClassInfo cip = classInfoMap.get(p);
                    if (cip.isSystemClass()) {
                        jclMethods.addAll(cip.getMethodMap().keySet().stream()
                                .map(m -> m.substring(0, m.indexOf("("))).collect(Collectors.toSet()));
                    }
                }
            }
        }
        return jclMethods;
    }

    private static String makeMethodFullName(String owner, MethodNode m) {
        // key in SimpleRemapper is (owner + '.' + name + descriptor)
        return owner + '.' + m.name + m.desc;
    }

    private static void printInfo(String className, String oldMethodName, String newMethodName) {
        if (printEnabled) {
            System.out.println("<method> Class " + className + ": " + oldMethodName + " -> " + newMethodName);
        }
    }
}
