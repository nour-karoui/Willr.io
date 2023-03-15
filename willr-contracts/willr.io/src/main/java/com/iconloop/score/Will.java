package com.iconloop.score;

import score.Address;
import score.DictDB;
import score.Context;
import score.annotation.External;
import score.annotation.Payable;
import score.annotation.EventLog;

/*
 * This smart contract represents a will, which can hold digital assets and assign them
 * to specified beneficiaries.
 */
public class Will {

    // Email address of the owner of the will.
    private String email;
    // Address of the owner of the will.
    private Address owner;
    // Dictionary of inheritance information.
    private DictDB<Address, DigitalAsset[]> inherits = Context.newDictDB("inherits", DigitalAsset[].class);

    /**
     * Constructor for creating a new will object with the specified email address
     * and owner address.
     *
     * @param email:  The email address of the owner of the will.
     * @param sender: The address of the owner of the will.
     */
    public Will(String email, Address sender) {
        this.email = email;
        this.owner = sender;
    }

    /**
     * External method for updating the email address of the owner of the will.
     *
     * @param email: The new email address of the owner.
     */
    @External()
    public void updateEmail(String email) {
        // Ensure that only the owner can update the email address.
        Context.require(Context.getCaller().equals(this.owner));
        this.email = email;
        // Log the email update event.
        EmailUpdated(this.owner, email);
    }

    /**
     * Payable method for setting inheritance information for a beneficiary.
     *
     * @param inherit: The address of the beneficiary.
     * @param assets:  An array of DigitalAsset objects representing the digital
     *                 assets to be inherited.
     */
    @Payable
    public void setInherit(Address inherit, DigitalAsset[] assets) {
        // Ensure that only the owner can set the inheritance information.
        Context.require(Context.getCaller().equals(this.owner));
        for (DigitalAsset asset : assets) {
            // Transfer the specified digital assets to the owner of the will.
            Context.call(
                    this.owner,
                    "transfer",
                    Context.getAddress(),
                    asset.getTokenAddress(),
                    asset.getTokenIdOrAmount());
        }
        // Set the inheritance information for the beneficiary.
        inherits.set(inherit, assets);
        // Log the set inherit event.
        InheritSet(this.owner, inherit, assets);
    }

    /**
     * External method for obtaining the inheritance information for a beneficiary.
     *
     * @param inherit: The address of the beneficiary.
     * @return: An array of DigitalAsset objects representing the digital assets
     *          inherited by the beneficiary.
     */
    @External(readonly = true)
    public DigitalAsset[] getInherit(Address inherit) {
        return inherits.get(inherit);
    }

    /**
     * External method for sending the digital assets to the beneficiaries.
     */
    @External()
    public void sendInherits() {
        // Ensure that only the owner can send the digital assets to the beneficiaries.
        Context.require(Context.getCaller().equals(this.owner));
        // Iterate over the inheritance information and transfer the digital assets to
        // the specified beneficiaries.
        // for (Address inherit : inherits.keys()) {
        //     DigitalAsset[] assets = inherits.get(inherit);
        //     for (DigitalAsset asset : assets) {
        //         Context.call(
        //                 inherit,
        //                 "transfer",
        //                 Context.getAddress(),
        //                 asset.getTokenAddress(),
        //                 asset.getTokenIdOrAmount());
        //     }
        //     // Log the sent inherit event.
        //     InheritSent(this.owner, inherit, assets);
        // }
    }

    // Event logs

    @EventLog(indexed = 1)
    public void EmailUpdated(Address owner, String email) {
    }

    @EventLog(indexed = 2)
    public void InheritSet(Address owner, Address inherit, DigitalAsset[] assets) {
    }

    @EventLog(indexed = 2)
    public void InheritSent(Address owner, Address inherit, DigitalAsset[] assets) {
    }

}
