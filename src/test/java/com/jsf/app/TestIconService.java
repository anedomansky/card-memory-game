package com.jsf.app;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class TestIconService {
    @Test
    public void testGetShuffledIconsSmall() {
        IconService service = new IconService();
        assertEquals(12, service.getShuffledIcons(6).size());
    }

    @Test
    public void testGetShuffledIconsMedium() {
        IconService service = new IconService();
        assertEquals(24, service.getShuffledIcons(12).size());
    }

    @Test
    public void testGetShuffledIconsBig() {
        IconService service = new IconService();
        assertEquals(40, service.getShuffledIcons(20).size());
    }

    @Test
    public void testGetShuffledIconsZero() {
        IconService service = new IconService();
        assertEquals(0, service.getShuffledIcons(0).size());
    }

    @Test
    public void testGetShuffledIconsNegative() {
        IconService service = new IconService();
        assertEquals(0, service.getShuffledIcons(-10).size());
    }
}
