package com.jsf.app;

import java.util.ArrayList;
import java.util.List;

import javax.faces.bean.ManagedBean;

import com.jsf.app.enums.Mode;

@ManagedBean(name = "game", eager = false)
public class Game {
    private List<Icon> icons;

    public Game() {
        this.icons = new ArrayList<Icon>();
    }

    public List<Icon> getIcons(Mode type) {
        Integer amount;
        switch (type) {
        case SMALL:
            amount = 6;
            break;
        case MEDIUM:
            amount = 12;
            break;
        case BIG:
            amount = 20;
            break;
        default:
            amount = 0;
            break;
        }
        this.icons = new IconService().getShuffledIcons(amount);
        return this.icons;
    }
}
