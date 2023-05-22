package com.patidar.fitnessgoaltracker.repository;

import com.patidar.fitnessgoaltracker.entity.FitnessGoal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FitnessGoalRepository extends JpaRepository<FitnessGoal, Long> {
}
