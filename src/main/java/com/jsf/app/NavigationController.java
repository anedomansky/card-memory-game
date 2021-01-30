package com.jsf.app;

import java.io.Serializable;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.ManagedProperty;

@ManagedBean(name="navigation", eager=true)
public class NavigationController implements Serializable {
    private static final long serialVersionUID = 1L;
    
    @ManagedProperty(value="#{param.pageType}")
    private String pageType;

    public String showPage() {
        if (this.pageType == null) {
            return "home";
        }
        return this.pageType.toLowerCase();
    }

    public String getPageType() {
        return this.pageType;
    }

    public void setPageType(String pageType) {
        this.pageType = pageType;
    }
}
