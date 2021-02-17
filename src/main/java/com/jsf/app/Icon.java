package com.jsf.app;

public class Icon {
    private String path;

    private String altText;

    public Icon(String path, String altText) {
        this.path = path;
        this.altText = altText;
    }

    public String getPath() {
        return this.path;
    }

    public String getAltText() {
        return this.altText;
    }
}
