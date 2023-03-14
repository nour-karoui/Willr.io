package com.iconloop.score;

import com.iconloop.score.Will;
import score.Context;
import score.annotation.External;
import score.annotation.Payable;
import score.Address;
import score.DictDB;
import score.VarDB;

public class WillFactory {
    private final VarDB<Integer> willCount = Context.newVarDB("willCount", Integer.class);
    private final DictDB<Address, Will> wills = Context.newDictDB("wills", Will.class);

    public WillFactory() {}

    @External
    public void addWill(String email) {
        Context.require(wills.get(Context.getCaller()) == null);
        Will will = new Will(email, Context.getCaller());
        wills.set(Context.getCaller(), will);
        willCount.set(willCount.get() + 1);
    }

    // @External(readonly=true)
    // public Object getWill(Address address) {
    //     return wills.get(address);
    // }
}
