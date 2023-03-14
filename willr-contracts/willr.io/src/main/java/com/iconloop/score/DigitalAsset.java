package com.iconloop.score;

public class DigitalAsset {
    private String tokenAddress;
    private int tokenIdOrAmount;

    public DigitalAsset(String tokenAddress, int tokenIdOrAmount) {
        this.tokenAddress = tokenAddress;
        this.tokenIdOrAmount = tokenIdOrAmount;
    }

    public String getTokenAddress() {
        return this.tokenAddress;
    }

    public int getTokenIDorAmount() {
        return this.tokenIdOrAmount;
    }
}
