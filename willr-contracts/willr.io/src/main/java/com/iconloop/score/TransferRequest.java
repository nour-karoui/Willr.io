package com.iconloop.score;

import score.Address;

public class TransferRequest {

    private final Address sender;
    private final Address recipient;
    private final String tokenAddress;
    private final String tokenIdOrAmount;

    public TransferRequest(Address sender, Address recipient, String tokenAddress, String tokenIdOrAmount) {
        this.sender = sender;
        this.recipient = recipient;
        this.tokenAddress = tokenAddress;
        this.tokenIdOrAmount = tokenIdOrAmount;
    }

    public Address getSender() {
        return sender;
    }

    public Address getRecipient() {
        return recipient;
    }

    public String getTokenAddress() {
        return tokenAddress;
    }

    public String getTokenIdOrAmount() {
        return tokenIdOrAmount;
    }
}
