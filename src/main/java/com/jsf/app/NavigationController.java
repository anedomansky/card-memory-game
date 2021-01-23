package com.jsf.app;

import java.io.Serializable;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.ManagedProperty;

@ManagedBean(name="navigation", eager=true)
public class NavigationController implements Serializable {
    private static final long serialVersionUID = 1L;
    
    @ManagedProperty(value="#{param.pageType}")
    private String pageType;

    public String moveToGame() {
        return "game";
    }

    public String showPage() {
        if (this.pageType == null) {
            return "home";
        }
        if (this.pageType == "small") {
            return "game";
        }
        if (this.pageType == "medium") {
            return "game";
        }
        else {
            return "game";
        }
    }

    public String getPageType() {
        return this.pageType;
    }

    public void setPageType(String pageType) {
        this.pageType = pageType;
    }

    public String processPageGame() {
        return "page";
    }
}
