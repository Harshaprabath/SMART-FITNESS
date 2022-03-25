package com.smartFitness.itpm.Models;


import javax.persistence.*;

@Entity
@Table(name = "recipe")
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name ="id")
    private Integer id;

    @Column(name ="description",nullable = false)
    private String description;

    @Column(name ="recipeType",nullable = false)
    private int recipeType;

    @Column(name ="isActive")
    private boolean isActive;


    public Integer getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public int getRecipeType() {
        return recipeType;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setRecipeType(int recipeType) {
        this.recipeType = recipeType;
    }

    public void setActive(boolean active) {
        isActive = active;
    }
}
