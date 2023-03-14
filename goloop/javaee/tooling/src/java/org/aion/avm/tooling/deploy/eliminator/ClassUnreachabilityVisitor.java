package org.aion.avm.tooling.deploy.eliminator;

import org.objectweb.asm.ClassVisitor;
import org.objectweb.asm.ClassWriter;
import org.objectweb.asm.MethodVisitor;
import org.objectweb.asm.Opcodes;

import java.util.Map;

public class ClassUnreachabilityVisitor extends ClassVisitor {

    private final Map<String, MethodInfo> methodInfoMap;

    public ClassUnreachabilityVisitor(ClassWriter cw, Map<String, MethodInfo> methodInfoMap) {
        super(Opcodes.ASM7, cw);
        this.methodInfoMap = methodInfoMap;
    }

    @Override
    public MethodVisitor visitMethod(int access, String name, String descriptor, String signature,
                                     String[] exceptions) {
        MethodInfo methodInfo = methodInfoMap.get(name + descriptor);
        if (null == methodInfo) {
            throw new RuntimeException("No method info found for this method");
        } else {
            if (methodInfo.isReachable) {
                return super.visitMethod(access, name, descriptor, signature, exceptions);
            } else {
                return null;
            }
        }
    }
}
