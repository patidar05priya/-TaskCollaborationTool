package com.patidar.fitnessgoaltracker.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class FitnessGoal {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String type;
    private String duration;
    private String targetMetrics;

    // Constructors, getters, and setters

    public FitnessGoal() {
    }

    public FitnessGoal(String type, String duration, String targetMetrics) {
        this.type = type;
        this.duration = duration;
        this.targetMetrics = targetMetrics;
    }

    // Getters and setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getTargetMetrics() {
        return targetMetrics;
    }

    public void setTargetMetrics(String targetMetrics) {
        this.targetMetrics = targetMetrics;
    }
}
