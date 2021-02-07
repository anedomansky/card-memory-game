package com.jsf.app;

import javax.faces.bean.ManagedBean;

import java.util.ArrayList;
import java.util.List;

@ManagedBean(name="home", eager=true)
public class Home {
	private List<GameMode> gameModes;
	
	public Home() {
		this.gameModes = new ArrayList<GameMode>();
		this.gameModes.add(new GameMode("Small", 4, 3));
		this.gameModes.add(new GameMode("Medium", 5, 5));
		this.gameModes.add(new GameMode("Big", 8, 5));
	}
	
	public List<GameMode> getGameModes() {
		return this.gameModes;
	}
}
