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
        this.icons.add(new Icon("images/diamond.svg", "Diamond"));
        this.icons.add(new Icon("images/dice-one.svg", "Dice"));
        this.icons.add(new Icon("images/flag.svg", "Flag"));
        this.icons.add(new Icon("images/globe.svg", "Globe"));
        this.icons.add(new Icon("images/heart.svg", "Heart"));
        this.icons.add(new Icon("images/house.svg", "House"));
        this.icons.add(new Icon("images/letter.svg", "Letter"));
        this.icons.add(new Icon("images/lock.svg", "Padlock"));
        this.icons.add(new Icon("images/moon.svg", "Moon"));
        this.icons.add(new Icon("images/puzzle-piece.svg", "Puzzle piece"));
        this.icons.add(new Icon("images/religious-cross.svg", "Religious cross"));
        this.icons.add(new Icon("images/saw.svg", "Saw"));
        this.icons.add(new Icon("images/skull.svg", "Skull"));
        this.icons.add(new Icon("images/star.svg", "Star"));
        this.icons.add(new Icon("images/stick-figure.svg", "Stick figure"));
        this.icons.add(new Icon("images/sun.svg", "Sun"));
        this.icons.add(new Icon("images/three.svg", "Roman three"));
        this.icons.add(new Icon("images/triangle.svg", "Triangle"));
        this.icons.add(new Icon("images/umbrella.svg", "Umbrella"));
        this.icons.add(new Icon("images/cross.svg", "Times"));
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
