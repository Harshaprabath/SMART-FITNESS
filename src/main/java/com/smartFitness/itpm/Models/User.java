package com.smartFitness.itpm.Models;

import javax.persistence.*;
import java.sql.Blob;
import java.sql.Date;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;


@Entity(name = "user")
@Table(name = "user")
public class User  {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name ="id")
    private Integer id;

    @Column(name ="firstName",nullable = false)
    private String firstName;

    @Column(name ="lastName",nullable = false)
    private String lastName;

    @Column(name ="birthday",nullable = false)
    private Date birthday;

    @Column(name ="userType",nullable = false)
    private Integer userType;

    @Column(name ="proPic")
    private Blob proPic;

    @Column(name ="email",nullable = false, unique = true, length = 45)
    private String email;

    @Column(name ="mobil",nullable = false, unique = true, length = 45)
    private String mobil;

    @Column(name ="password",nullable = false, length = 64)
    private String password;

    @Column(name ="isActive")
    private boolean isActive;

    public Integer getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public Date getBirthday() {
        return birthday;
    }

    public int getUserType() {
        return userType;
    }

    public Blob getProPic() {
        return proPic;
    }

    public String getEmail() {
        return email;
    }

    public String getMobil() {
        return mobil;
    }

    public String getPassword() {
        return password;
    }

    public boolean getIsActive() {
        return isActive;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public void setUserType(int userType) {
        this.userType = userType;
    }

    public void setProPic(Blob proPic) {
        this.proPic = proPic;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setMobil(String mobil) {
        this.mobil = mobil;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setIsActive(boolean IsActive) {
        this.isActive = IsActive;
    }

}
