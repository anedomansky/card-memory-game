package com.jsf.app;

import java.util.List;

import javax.faces.bean.ManagedBean;

@ManagedBean(name = "big", eager = false)
public class Big {
    private List<Icon> icons;

    public Big() {
        this.icons = new IconService().getShuffledIcons(20);
    }

    public List<Icon> getIcons() {
        return this.icons;
    }
}
