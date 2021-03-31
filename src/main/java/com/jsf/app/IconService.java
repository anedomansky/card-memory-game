package com.jsf.app;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Random;
import java.util.Set;

public class IconService {
    List<Icon> icons;

    public IconService() {
        this.icons = new ArrayList<Icon>();
        this.icons.add(new Icon("images/diamond.png", "Diamond"));
        this.icons.add(new Icon("images/dice-one.png", "Dice"));
        this.icons.add(new Icon("images/flag.png", "Flag"));
        this.icons.add(new Icon("images/globe.png", "Globe"));
        this.icons.add(new Icon("images/heart.png", "Heart"));
        this.icons.add(new Icon("images/house.png", "House"));
        this.icons.add(new Icon("images/letter.png", "Letter"));
        this.icons.add(new Icon("images/lock.png", "Padlock"));
        this.icons.add(new Icon("images/moon.png", "Moon"));
        this.icons.add(new Icon("images/puzzle-piece.png", "Puzzle piece"));
        this.icons.add(new Icon("images/religious-cross.png", "Religious cross"));
        this.icons.add(new Icon("images/saw.png", "Saw"));
        this.icons.add(new Icon("images/skull.png", "Skull"));
        this.icons.add(new Icon("images/star.png", "Star"));
        this.icons.add(new Icon("images/stick-figure.png", "Stick figure"));
        this.icons.add(new Icon("images/sun.png", "Sun"));
        this.icons.add(new Icon("images/three.png", "Roman three"));
        this.icons.add(new Icon("images/triangle.png", "Triangle"));
        this.icons.add(new Icon("images/umbrella.png", "Umbrella"));
        this.icons.add(new Icon("images/cross.png", "Times"));
    }

    public List<Icon> getShuffledIcons(Integer amount) {
        List<Icon> selectedIcons = new ArrayList<Icon>();
        List<Icon> firstPartOfShuffledIcons = new ArrayList<Icon>();
        List<Icon> secondPartOfShuffledIcons = new ArrayList<Icon>();
        List<Icon> shuffledIcons = new ArrayList<Icon>();
        Random rng = new Random();

        if (amount < 20) {
            int i = 0;
    
            while(i < amount) {
                int index = rng.nextInt(this.icons.size()); // returns Integer between 0 - (length of list - 1)
                Icon icon = this.icons.get(index);
                if (!selectedIcons.contains(icon)) {
                    selectedIcons.add(icon);
                    i++;
                }
            }
        } else {
            selectedIcons = List.copyOf(this.icons);
        }

        Set<Icon> setOfIcons = new HashSet<Icon>(selectedIcons.size());

        setOfIcons.addAll(selectedIcons);

        firstPartOfShuffledIcons.addAll(setOfIcons);
        secondPartOfShuffledIcons.addAll(setOfIcons);

        Collections.shuffle(firstPartOfShuffledIcons);
        Collections.shuffle(secondPartOfShuffledIcons);

        shuffledIcons.addAll(firstPartOfShuffledIcons);
        shuffledIcons.addAll(secondPartOfShuffledIcons);

        return shuffledIcons;
    }
}
