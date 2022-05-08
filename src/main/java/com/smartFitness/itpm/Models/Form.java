package com.smartFitness.itpm.Models;


import javax.persistence.*;

@Entity
@Table(name = "form")
public class Form {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Integer id;


    @Column(name = "fullName", nullable = false)
    private String fullName;

    @Column(name = "address", nullable = false)
    private String address;

    @Column(name = "phoneNumber", nullable = false)
    private String phoneNumber;

    @Column(name = "gender", nullable = false)
    private String gender;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "weight", nullable = false)
    private Integer weight;

    @Column(name = "height", nullable = false)
    private Integer height;

    @Column(name = "question", nullable = false)
    private String question;

    @Column(name = "isActive")
    private boolean isActive;

    public Integer getId() {
        return id;
    }


    public String getFullName() {
        return fullName;
    }

    public String getAddress() {
        return address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public String getGender() {
        return gender;
    }

    public String getEmail() {
        return email;
    }

    public Integer getWeight() {
        return weight;
    }

    public Integer getHeight() {
        return height;
    }

    public String getQuestion() {
        return question;
    }



    public boolean isActive() {
        return isActive;
    }

    public void setId(Integer id) {
        this.id = id;
    }



    public void setFullName(String fullName) {
        this.fullName = fullName;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    public void setGender(String gender) {
        this.gender = gender;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public void setWeight(Integer weight) {
        this.weight = weight;
    }
    public void setHeight(Integer height) {
        this.height = height;
    }
    public void setQuestion(String question) {
        this.question = question;
    }




    public void setActive(boolean active) {
        isActive = active;
    }
}