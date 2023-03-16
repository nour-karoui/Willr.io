package com.iconloop.score;

import score.Address;
import score.ArrayDB;
import score.Context;
import score.DictDB;
import score.annotation.External;
import score.annotation.EventLog;
import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

/*
 * This smart contract factory deploys new instances of the Will contract and provides a
 * mapping of email addresses to their respective Will contracts.
 */

public class WillFactory {

    // Declare an array of email addresses
    public ArrayDB<String> emailList = Context.newArrayDB("emailList", String.class);
    
    // Declare a dictionary mapping of Will contracts to their associated email address
    private DictDB<String, Address> wills = Context.newDictDB("wills", Address.class);

    /**
     * Creates a new Will contract instance and deploys it to the ICON network.
     * 
     * @param email    the email address of the owner of the Will
     * @param jarBytes the compiled bytecode of the Will contract
     * @return the Address of the deployed Will contract
     */
    @External
    public Address createNewWill(String email) {
        // Instantiate a new Will contract and pass in the email address and origin
        Will will = new Will(email, Context.getOrigin());
        try {
            // Read in the compiled bytecode of the Will contract
            byte[] jarBytes = convert();
            // If the bytecode has a length greater than zero
            if (jarBytes.length > 0) {
                // Deploy the contract to the ICON network and get the contract's address
                Address willAddress = Context.deploy(jarBytes, will);
                // Add the email address to the email list array
                emailList.add(email);
                // Associate the email address with the contract's address in the wills dictionary
                wills.set(email, willAddress);

                // Log Will manufactured event
                WillContractDeployed(Context.getOrigin(), willAddress);

                return willAddress;
            } else {
                // Return null if the bytecode length is zero
                return null;
            }

        } catch (Exception e) {
            // If an exception is thrown, print the stack trace and return null
            e.printStackTrace();
            return null;
        }
    }

    /**
     * Returns the Address of a previously deployed Will contract by email.
     * 
     * @param email the email address associated with the desired Will
     * @return the Address of the Will contract
     */
    @External(readonly = true)
    public Address getWill(String email) {
        // Return the Will contract address associated with the given email address from the wills dictionary
        return wills.get(email);
    }

    /**
     * Reads in the bytecode of the Will contract from a file path and returns it as a byte array.
     * 
     * @return the bytecode of the Will contract as a byte array
     */
    public static byte[] convert() {
        // Set the file path of the compiled Will contract bytecode
        String filePath = "/home/bruno/repos/Willr.io/willr-contracts/willr.io/src/will-contract-0.1.0-optimized.jar";
        try {
            // Read in the bytecode as a byte array using the file path
            Path path = Paths.get(filePath);
            byte[] byteArray = Files.readAllBytes(path);
            // Return the byte array of the bytecode
            return byteArray;
        } catch (IOException e) {
            // If an exception is thrown, print the stack trace and return null
            e.printStackTrace();
            return null;
        }
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
