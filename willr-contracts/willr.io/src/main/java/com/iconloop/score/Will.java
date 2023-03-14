package com.iconloop.score;

import score.Address;
import score.DictDB;
import score.Context;
import score.annotation.External;
import score.annotation.Payable;

public class Will {
    private String email;
    private Address owner;
    private DictDB<Address, DigitalAsset[]> inherits = Context.newDictDB("inherits", DigitalAsset[].class);

    public Will(String email, Address sender) {
        this.email = email;
        this.owner = sender;
    }

    @External()
    public void updateEmail(String email) {
        Context.require(Context.getCaller().equals(this.owner));
        this.email = email;
    }

    @Payable
    public void setInherit(Address inherit, DigitalAsset[] assets) {
        Context.require(Context.getCaller().equals(this.owner));
        for (DigitalAsset asset : assets) {
            Context.call(this.owner, "transfer", Context.getAddress(), asset.getTokenAddress(), asset.getTokenIDorAmount());
        }
        inherits.set(inherit, assets);
    }

    @External(readonly=true)
    public DigitalAsset[] getInherit(Address inherit) {
        return inherits.get(inherit);
    }

    @External()
    public void sendInherits() {
        Context.require(Context.getCaller().equals(this.owner));
        // for (Address inherit : inherits.keySet()) {
        //     DigitalAsset[] assets = inherits.get(inherit);
        //     for (DigitalAsset asset : assets) {
        //         Context.call(inherit, "transfer", asset.getTokenAddress(), asset.getTokenId(), asset.getTokenAmount());
        //     }
        // }
    }
}