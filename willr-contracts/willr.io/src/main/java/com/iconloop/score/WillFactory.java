package com.iconloop.score;

import score.Address;
import score.Context;
import score.DictDB;
import score.annotation.External;

public class WillFactory {
    private DictDB<String, Address> wills = Context.newDictDB("wills", Address.class);

    @External
    public Address createNewWill(String email, byte[] jarBytes) {
        Will will = new Will(email, Context.getOrigin());
        Address willAddress = Context.deploy(jarBytes, will);
        wills.set(email, willAddress);
        return willAddress;
    }
    

    @External(readonly=true)
    public Address getWill(String email) {
        return wills.get(email);
    }

    // // backend system to retrieve email addresses and send reminder emails
    // public void sendReminderEmails() {
    //     // retrieve all email addresses from the mapping
    //     for (String email : wills.keySet()) {
        //
    //         // send reminder email to the owner
    //         sendEmail(email, "Reminder: Please update your Will details");
    //     }
    // }

    // // dummy function to simulate sending an email
    // private void sendEmail(String toEmail, String message) {
    //     System.out.println("Sending email to " + toEmail + ": " + message);
    // }

}


