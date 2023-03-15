import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

import com.iconloop.score.Address;

public class WillTest {
    private Will will;
    private Address owner;
    private Address beneficiary;

    @Before
    public void setUp() {
        owner = new Address("hx1234...");
        beneficiary = new Address("hx5678...");
        will = new Will("owner@example.com", owner);
    }

    @Test
    public void testUpdateEmail() {
        will.updateEmail("newowner@example.com");
        assertEquals("newowner@example.com", will.email);
    }

    @Test
    public void testSetInherit() {
        DigitalAsset[] assets = new DigitalAsset[] {
            new DigitalAsset("token1", "id1", 100),
            new DigitalAsset("token2", "id2", 200)
        };
        will.setInherit(beneficiary, assets);
        assertArrayEquals(assets, will.getInherit(beneficiary));
    }

    @Test
    public void testSendInherits() {
        DigitalAsset[] assets = new DigitalAsset[] {
            new DigitalAsset("token1", "id1", 100),
            new DigitalAsset("token2", "id2", 200)
        };
        will.setInherit(beneficiary, assets);
        will.sendInherits();
        assertNull(will.getInherit(beneficiary));
    }
}
