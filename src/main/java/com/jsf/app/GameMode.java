package com.jsf.app;

import com.jsf.app.enums.Mode;

public class GameMode {
    private Mode mode;

    private Integer amount;

    public GameMode(Mode mode, Integer amount) {
        this.mode = mode;
        this.amount = amount;
    }

    public String getMode() {
        return this.mode.toString();
    }

    public Integer getAmount() {
        return this.amount;
    }
}
