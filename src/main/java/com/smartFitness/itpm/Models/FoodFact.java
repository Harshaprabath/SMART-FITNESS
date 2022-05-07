package com.smartFitness.itpm.Models;

import javax.persistence.*;

@Entity
@Table(name = "foodfact")

public class FoodFact {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name ="id")
    private Integer id;

    @Column(name ="foodName",nullable = false)
    private String foodName;

    @Column(name ="description",nullable = false)
    private String description;

    @Column(name ="isActive")
    private boolean isActive;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFoodName() {
        return foodName;
    }

    public void setFoodName(String foodName) {
        this.foodName = foodName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }
}
