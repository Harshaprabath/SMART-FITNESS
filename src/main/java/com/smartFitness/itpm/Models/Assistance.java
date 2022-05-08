package com.smartFitness.itpm.Models;
import javax.persistence.*;
import java.sql.Blob;


@Entity
@Table(name = "assistance")
public class Assistance {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Integer id;

    @Column(name ="assistanceImage")
    private Blob assistanceImage;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "isActive")
    private boolean isActive;

    public Integer getId() {
        return id;
    }

    public Blob getAssistanceImage() {
        return assistanceImage;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setAssistanceImage(Blob assistanceImage) {
        this.assistanceImage = assistanceImage;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setActive(boolean active) {
        isActive = active;
    }
}