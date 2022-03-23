package com.smartFitness.itpm.Models;


import javax.persistence.*;

@Entity
@Table(name = "plan")
public class Plan {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name ="id")
    private Integer id;

    @Column(name ="duration",nullable = false)
    private String duration;

    @Column(name ="description",nullable = false)
    private String description;

    @Column(name ="planType",nullable = false)
    private int planType;

    @Column(name ="isActive")
    private boolean isActive;


    public Integer getId() {
        return id;
    }

    public String getDuration() {
        return duration;
    }

    public String getDescription() {
        return description;
    }

    public int getPlanType() {
        return planType;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setPlanType(int planType) {
        this.planType = planType;
    }

    public void setActive(boolean active) {
        isActive = active;
    }
}
