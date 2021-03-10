package com.jsf.app.enums;

public enum Mode {
    SMALL("SMALL"),
    MEDIUM("MEDIUM"),
    BIG("BIG");

    private String mode;

    Mode(String mode) {
        this.mode = mode;
    }

    @Override
    public String toString() {
        return this.mode;
    }
}
