package com.patidar.fitnessgoaltracker.service;

import com.patidar.fitnessgoaltracker.entity.FitnessGoal;
import com.patidar.fitnessgoaltracker.repository.FitnessGoalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FitnessGoalService {

    private final FitnessGoalRepository fitnessGoalRepository;

    @Autowired
    public FitnessGoalService(FitnessGoalRepository fitnessGoalRepository) {
        this.fitnessGoalRepository = fitnessGoalRepository;
    }

    public List<FitnessGoal> getAllFitnessGoals() {
        return fitnessGoalRepository.findAll();
    }

    public FitnessGoal getFitnessGoalById(Long id) {
        return fitnessGoalRepository.findById(id).orElse(null);
    }

    public FitnessGoal createFitnessGoal(FitnessGoal goal) {
        return fitnessGoalRepository.save(goal);
    }

    public FitnessGoal updateFitnessGoal(Long id, FitnessGoal goal) {
        FitnessGoal existingGoal = fitnessGoalRepository.findById(id).orElse(null);
        if (existingGoal != null) {
            existingGoal.setType(goal.getType());
            existingGoal.setDuration(goal.getDuration());
            existingGoal.setTargetMetrics(goal.getTargetMetrics());
            return fitnessGoalRepository.save(existingGoal);
        }
        return null;
    }

    public boolean deleteFitnessGoal(Long id) {
        if (fitnessGoalRepository.existsById(id)) {
            fitnessGoalRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
