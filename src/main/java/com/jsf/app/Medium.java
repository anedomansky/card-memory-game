package com.jsf.app;

import java.util.List;

import javax.faces.bean.ManagedBean;

@ManagedBean(name = "medium", eager = false)
public class Medium {
    private List<Icon> icons;

    public Medium() {
        this.icons = new IconService().getShuffledIcons(12);
    }

    public List<Icon> getIcons() {
        return this.icons;
    }
}
