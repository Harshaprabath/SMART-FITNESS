package com.smartFitness.itpm.Models;

import javax.persistence.*;

@Entity
@Table(name = "weight")
public class WeightGain {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Integer id;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "planType", nullable = false)
    private int planType;

    @Column(name = "price", nullable = false)
    private int price;

    @Column(name = "isActive", nullable = false)
    private Boolean isActive;


    public Integer getId() { return id; }

    public String getTitle() { return title; }

    public String getDescription() { return description; }

    public int getPlanType() { return planType; }

    public int getPrice() { return price; }

    public boolean getIsActive() { return isActive; }

    public void setId(Integer id) { this.id = id; }

    public void setTitle(String title) { this.title = title; }

    public void setDescription(String description) { this.description = description; }

    public void setPlanType(int planType) { this.planType = planType; }

    public void setPrice(int price) { this.price = price; }

    public void setIsActive(boolean isActive) { this.isActive = isActive; }

}