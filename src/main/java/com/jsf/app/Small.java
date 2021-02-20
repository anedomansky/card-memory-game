package com.jsf.app;

import java.util.List;

import javax.faces.bean.ManagedBean;

@ManagedBean(name = "small", eager = false)
public class Small {
    private List<Icon> icons;

    public Small() {
        this.icons = new IconService().getShuffledIcons(6);
    }

    public List<Icon> getIcons() {
        return this.icons;
    }
}
