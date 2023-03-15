package com.iconloop.score;

/*
 * This class represents a digital asset, which includes a token address
 * and token ID or amount.
 */
public class DigitalAsset {

    private String tokenAddress; // Address of the digital asset token.
    private int tokenIdOrAmount; // ID or amount of the digital asset token.

    /**
     * Constructor for creating a digital asset object with the specified
     * token address and token ID or amount.
     * 
     * @param tokenAddress the address of the digital asset token.
     * @param tokenIdOrAmount the ID or amount of the digital asset token.
     */
    public DigitalAsset(String tokenAddress, int tokenIdOrAmount) {
        this.tokenAddress = tokenAddress;
        this.tokenIdOrAmount = tokenIdOrAmount;
    }

    /**
     * Getter method for obtaining the token address of the digital asset.
     * 
     * @return the address of the digital asset token.
     */
    public String getTokenAddress() {
        return this.tokenAddress;
    }

    /**
     * Getter method for obtaining the token ID or amount of the digital asset.
     * 
     * @return the ID or amount of the digital asset token.
     */
    public int getTokenIdOrAmount() {
        return this.tokenIdOrAmount;
    }
}
