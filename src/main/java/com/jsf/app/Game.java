package com.jsf.app;

import javax.faces.bean.ManagedBean;

@ManagedBean(name = "game", eager = false)
public class Game {
    private String message;

    public Game() {
        this.message = "Enjoy the game!";
    }

    public String getMessage() {
        return this.message;
    }
}
