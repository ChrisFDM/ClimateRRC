package com.fdmgroup.climaterrc.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Component;

@Entity
@Component
@Table(name="Users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "usergen")
    @SequenceGenerator(name = "usergen", sequenceName = "user_seq", allocationSize = 1)
    @Column(name="user_id")
    private int customerid;


    @Column(name="user_name")
    private String Name;
    @Column(name="password")
    private String Password;
    @Column(name="email")
    private String Email;

    public User() {
    }

    public User(int customerid, String name, String password, String email) {
        this.customerid = customerid;
        this.Name = name;
        this.Password = password;
        this.Email = email;
    }

    public int getCustomerid() {
        return customerid;
    }

    public void setCustomerid(int customerid) {
        this.customerid = customerid;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String password) {
        Password = password;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    @Override
    public String toString() {
        return "User{" +
                "customerid=" + customerid +
                ", Name='" + Name + '\'' +
                ", Password='" + Password + '\'' +
                ", Email='" + Email + '\'' +
                '}';
    }
}
