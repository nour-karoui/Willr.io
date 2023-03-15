package com.iconloop.score;

import static org.junit.Assert.*;

import org.junit.Test;

public class DigitalAssetTest {

    @Test
    public void testGetTokenAddress() {
        DigitalAsset asset = new DigitalAsset("0x123", 100);
        assertEquals("0x123", asset.getTokenAddress());
    }

    @Test
    public void testGetTokenIdOrAmount() {
        DigitalAsset asset = new DigitalAsset("0x123", 100);
        assertEquals(100, asset.getTokenIdOrAmount());
    }

    @Test
    public void testConstructor() {
        DigitalAsset asset = new DigitalAsset("0x123", 100);
        assertNotNull(asset);
    }
}
