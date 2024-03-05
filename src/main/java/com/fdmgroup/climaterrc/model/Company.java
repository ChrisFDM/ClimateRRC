package com.fdmgroup.climaterrc.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import org.springframework.stereotype.Component;


@Table(name="Companies")
public class Company {

    @Column(name="name")
    private String Name;
    @Column(name="time_net_zero")
    private int TimeToNetZero;
    @Column(name="co2_emissions")
    private double Co2Emissions;
    @Column(name="employee_number")
    private int EmployeeNumber;
    @Column(name="totaled_score")
    private double TotaledScore;


    public Company(String name, int timeToNetZero, double co2Emissions, int employeeNumber, double totaledScore) {
        this.Name = name;
        this.TimeToNetZero = timeToNetZero;
        this.Co2Emissions = co2Emissions;
        this.EmployeeNumber = employeeNumber;
        this.TotaledScore = totaledScore;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public int getTimeToNetZero() {
        return TimeToNetZero;
    }

    public void setTimeToNetZero(int timeToNetZero) {
        TimeToNetZero = timeToNetZero;
    }

    public double getCo2Emissions() {
        return Co2Emissions;
    }

    public void setCo2Emissions(double co2Emissions) {
        Co2Emissions = co2Emissions;
    }

    public int getEmployeeNumber() {
        return EmployeeNumber;
    }

    public void setEmployeeNumber(int employeeNumber) {
        EmployeeNumber = employeeNumber;
    }

    public double getTotaledScore() {
        return TotaledScore;
    }

    public void setTotaledScore(double totaledScore) {
        TotaledScore = totaledScore;
    }

    @Override
    public String toString() {
        return "Company{" +
                "Name='" + Name + '\'' +
                ", TimeToNetZero=" + TimeToNetZero +
                ", Co2Emissions=" + Co2Emissions +
                ", EmployeeNumber=" + EmployeeNumber +
                ", TotaledScore=" + TotaledScore +
                '}';
    }
}
