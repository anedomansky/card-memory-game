package com.jsf.app;

public class GameMode {
    private String mode;

    private Integer x;

    private Integer y;

    public GameMode(String mode, Integer x, Integer y) {
        this.mode = mode;
        this.x = x;
        this.y = y;
    }

    public String getMode() {
        return this.mode;
    }

    public Integer getX() {
        return this.x;
    }

    public Integer getY() {
        return this.y;
    }
}
