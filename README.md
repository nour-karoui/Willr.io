## Willr.io

`sendInherits` from `Will.java` and `sendReminderEmails` from `WillFactory.java` TODO

> Task :willr.io:compileJava FAILED
/home/bruno/repos/Willr.io/willr-contracts/willr.io/src/main/java/com/iconloop/score/WillFactory.java:54: error: cannot find symbol
        for (String email : wills.keys()) {
                                 ^
  symbol:   method keys()
  location: variable wills of type DictDB<String,Address>
/home/bruno/repos/Willr.io/willr-contracts/willr.io/src/main/java/com/iconloop/score/Will.java:96: error: cannot find symbol
        for (Address inherit : inherits.keys()) {
                                       ^
  symbol:   method keys()
  location: variable inherits of type DictDB<Address,DigitalAsset[]>
2 errors