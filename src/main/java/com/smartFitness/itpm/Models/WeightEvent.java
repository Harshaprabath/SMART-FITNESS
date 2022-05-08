package com.smartFitness.itpm.Models;

import javax.persistence.*;

@Entity
@Table(name = "weight_event")
public class WeightEvent {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "entranceFee", nullable = false)
    private Integer entranceFee;

    @Column(name = "entrants", nullable = false)
    private Integer entrants;

    @Column(name = "isActive", nullable = false)
    private boolean isActive;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getEntranceFee() {
        return entranceFee;
    }

    public void setEntranceFee(Integer entranceFee) {
        this.entranceFee = entranceFee;
    }

    public Integer getEntrants() {
        return entrants;
    }

    public void setEntrants(Integer entrants) {
        this.entrants = entrants;
    }

    public boolean getIsActive() {
        return isActive;
    }

    public void setIsActive(boolean isActive) {
        this.isActive = isActive;
    }
}
