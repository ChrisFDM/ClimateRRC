package com.fdmgroup.climaterrc.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="companies")
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="company_id")
    private long id;
    @Column(name="name")
    private String name;
    @Column(name="time_To_Net_Zero")
    private int timeToNetZero;
    @Column(name="co2Emissions")
    private double co2Emissions;
    @Column(name="employeeNumber")
    private int employeeNumber;
    @Column(name="totaledScore")
    private double totaledScore;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
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
        final StringBuffer sb = new StringBuffer("Company{");
        sb.append("id=").append(id);
        sb.append(", name='").append(name).append('\'');
        sb.append(", timeToNetZero='").append(timeToNetZero).append('\'');
        sb.append(", co2Emissions='").append(co2Emissions).append('\'');
        sb.append(", employeeNumber='").append(employeeNumber).append('\'');
        sb.append(", totaledScore='").append(totaledScore).append('\'');
        sb.append('}');
        return sb.toString();
    }
}
