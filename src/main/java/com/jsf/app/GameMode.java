package com.jsf.app;

import com.jsf.app.enums.Mode;

public class GameMode {
    private Mode mode;

    private Integer x;

    private Integer y;

    public GameMode(Mode mode, Integer x, Integer y) {
        this.mode = mode;
        this.x = x;
        this.y = y;
    }

    public String getMode() {
        return this.mode.toString();
    }

    public Integer getX() {
        return this.x;
    }

    public Integer getY() {
        return this.y;
    }
}
