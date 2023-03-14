package com.iconloop.score;

import score.Address;
import score.DictDB;
import score.Context;
import score.annotation.External;
import score.annotation.Payable;

public class Will {
    private String email;
    private Address owner;
    private DictDB<Address, DigitalAsset> inherits = Context.newDictDB("inherits", DigitalAsset.class);

    public Will(String email, Address owner) {
        this.email = email;
        this.owner = owner;
    }

    @External()
    public void updateEmail(String email) {
        this.email = email;
    }

    @Payable()
    public void setInherit(Address inherit, String name, String value) {
        Context.require(Context.getCaller().equals(this.owner));
        DigitalAsset digitalAsset = new DigitalAsset(name, value);
        inherits.set(inherit, digitalAsset);
    }

    @External(readonly=true)
    public DigitalAsset getInherit(Address inherit) {
        return inherits.get(inherit);
    }

    // add function to sendInherits their heritage
    @External()
    public Address sendHeritage(){
        return owner;
    }
}
