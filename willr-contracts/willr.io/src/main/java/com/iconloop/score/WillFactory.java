package com.iconloop.score;

import score.Address;
import score.ArrayDB;
import score.Context;
import score.DictDB;
import score.annotation.External;
import score.annotation.EventLog;

/*
 * This smart contract factory deploys new instances of the Will contract and provides a
 * mapping of email addresses to their respective Will contracts.
 */
public class WillFactory {

    // Array of email will.
    public ArrayDB<String> emailList = Context.newArrayDB("emailList", String.class);
    // Mapping of wills information.
    private DictDB<String, Address> wills = Context.newDictDB("wills", Address.class);

    /**
     * Creates a new Will contract instance and deploys it to the ICON network.
     * 
     * @param email    the email address of the owner of the Will
     * @param jarBytes the compiled bytecode of the Will contract
     * @return the Address of the deployed Will contract
     */
    @External
    public Address createNewWill(String email, byte[] jarBytes) {
        Will will = new Will(email, Context.getOrigin());
        Address willAddress = Context.deploy(jarBytes, will);
        emailList.add(email);
        wills.set(email, willAddress);

        // Log Will manufactured event
        WillContractDeployed(Context.getOrigin(), willAddress);

        return willAddress;
    }

    /**
     * Returns the Address of a previously deployed Will contract by email.
     * 
     * @param email the email address associated with the desired Will
     * @return the Address of the Will contract
     */
    @External(readonly = true)
    public Address getWill(String email) {
        return wills.get(email);
    }

    /**
     * Backend system to retrieve email addresses and send reminder emails to owners
     * of Will contracts to update their Will details.
     */
    public void sendReminderEmails() {
        // Retrieve all email addresses from the mapping
        for (int i = 0; i < emailList.size(); i++) {
            String email = emailList.get(i);
            // Send Checker email to the owner
            sendEmail(email, "Reminder: Please update your Will details");
            // Log Sent event
            EmailSent(email);
        }
    }

    /**
     * Dummy function to simulate sending an email.
     * 
     * @param toEmail the email address of the recipient
     * @param message the message to be sent in the email
     */
    private void sendEmail(String toEmail, String message) {
        System.out.println("Sending email to " + toEmail + ": " + message);
    }

    // Event logs

    @EventLog(indexed = 2)
    public void WillContractDeployed(Address owner, Address willAddress) {
    }

    @EventLog(indexed = 1)
    public void EmailSent(String email) {
    }

}
