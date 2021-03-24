package com.jsf.app;

import javax.faces.bean.ManagedBean;

import com.jsf.app.enums.Mode;

import java.util.ArrayList;
import java.util.List;

@ManagedBean(name="home", eager=true)
public class Home {
	private List<GameMode> gameModes;
	
	public Home() {
		this.gameModes = new ArrayList<GameMode>();
		this.gameModes.add(new GameMode(Mode.SMALL, 12));
		this.gameModes.add(new GameMode(Mode.MEDIUM, 24));
		this.gameModes.add(new GameMode(Mode.BIG, 40));
	}
	
	public List<GameMode> getGameModes() {
		return this.gameModes;
	}
}
