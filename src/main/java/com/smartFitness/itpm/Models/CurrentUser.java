package com.smartFitness.itpm.Models;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.sql.Blob;
import java.sql.Date;

public class CurrentUser {

    public static Integer id;
    public static  String firstName;
    public static  String lastName;
    public static  Date birthday;
    public static  Integer userType;
    public static  Blob proPic;
    public static  String email;
    public static  String mobil;
    public static  String password;
    public static  boolean isActive;

    public void setCurrentUser(User user){
        this.id = user.getId();
        this.firstName = user.getFirstName();
        this.lastName = user.getLastName();
        this.birthday = user.getBirthday();
        this.userType = user.getUserType();
        this.proPic = user.getProPic();
        this.email = user.getEmail();
        this.mobil = user.getMobil();
        this.password = user.getPassword();
        this.isActive = user.getIsActive();
    }

    public User getCurrentUser(){

        User currentUser = new User();

        currentUser.setId(this.id);
        currentUser.setFirstName(this.firstName);
        currentUser.setLastName(this.lastName);
        currentUser.setBirthday(this.birthday);
        currentUser.setUserType(this.userType);
        currentUser.setProPic(this.proPic);
        currentUser.setEmail(this.email);
        currentUser.setMobil(this.mobil);
        currentUser.setPassword(this.password);
        currentUser.setIsActive(this.isActive);

        return currentUser;
    }
}
