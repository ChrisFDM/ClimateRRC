package com.fdmgroup.climaterrc.model;

import jakarta.persistence.*;
import org.springframework.stereotype.Component;

@Entity
@Component
@Table(name="Company")
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "companygen")
    @SequenceGenerator(name = "companygen", sequenceName = "company_seq", allocationSize = 1)
    @Column(name="companyId")
    private int companyId;

    @Column(name="name")
    private String name;
    @Column(name="timeToNetZero")
    private int timeToNetZero;
    @Column(name="co2Emissions")
    private double co2Emissions;
    @Column(name="employeeNumber")
    private int employeeNumber;
    @Column(name="totaledScore")
    private double totaledScore;


    public Company() {
    }

    public Company(int companyId, String name, int timeToNetZero, double co2Emissions, int employeeNumber, double totaledScore) {
        this.companyId = companyId;
        this.name = name;
        this.timeToNetZero = timeToNetZero;
        this.co2Emissions = co2Emissions;
        this.employeeNumber = employeeNumber;
        this.totaledScore = totaledScore;
    }

    public int getCompanyId() {
        return companyId;
    }

    public void setCompanyId(int companyId) {
        this.companyId = companyId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getTimeToNetZero() {
        return timeToNetZero;
    }

    public void setTimeToNetZero(int timeToNetZero) {
        this.timeToNetZero = timeToNetZero;
    }

    public double getCo2Emissions() {
        return co2Emissions;
    }

    public void setCo2Emissions(double co2Emissions) {
        this.co2Emissions = co2Emissions;
    }

    public int getEmployeeNumber() {
        return employeeNumber;
    }

    public void setEmployeeNumber(int employeeNumber) {
        this.employeeNumber = employeeNumber;
    }

    public double getTotaledScore() {
        return totaledScore;
    }

    public void setTotaledScore(double totaledScore) {
        this.totaledScore = totaledScore;
    }

    @Override
    public String toString() {
        return "Company{" +
                "companyId=" + companyId +
                ", name='" + name + '\'' +
                ", timeToNetZero=" + timeToNetZero +
                ", co2Emissions=" + co2Emissions +
                ", employeeNumber=" + employeeNumber +
                ", totaledScore=" + totaledScore +
                '}';
    }
}
