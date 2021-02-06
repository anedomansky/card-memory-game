package com.jsf.app;

import javax.faces.bean.ManagedBean;

import java.util.ArrayList;
import java.util.List;

@ManagedBean(name="home", eager=true)
public class Home {
	private List<String> gameModes;
	
	public Home() {
		this.gameModes = new ArrayList<String>();
		this.gameModes.add("Small");
		this.gameModes.add("Medium");
		this.gameModes.add("Big");
	}
	
	public List<String> getGameModes() {
		return this.gameModes;
	}
}
