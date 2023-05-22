package com.patidar.fitnessgoaltracker.controller;

import com.patidar.fitnessgoaltracker.entity.FitnessGoal;
import com.patidar.fitnessgoaltracker.service.FitnessGoalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/fitness-goals")
public class FitnessGoalController {

    private final FitnessGoalService fitnessGoalService;

    @Autowired
    public FitnessGoalController(FitnessGoalService fitnessGoalService) {
        this.fitnessGoalService = fitnessGoalService;
    }

    @GetMapping
    public ResponseEntity<List<FitnessGoal>> getAllFitnessGoals() {
        List<FitnessGoal> goals = fitnessGoalService.getAllFitnessGoals();
        return ResponseEntity.ok(goals);
    }

    @GetMapping("/{id}")
    public ResponseEntity<FitnessGoal> getFitnessGoalById(@PathVariable Long id) {
        FitnessGoal goal = fitnessGoalService.getFitnessGoalById(id);
        if (goal != null) {
            return ResponseEntity.ok(goal);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<FitnessGoal> createFitnessGoal(@RequestBody FitnessGoal goal) {
        FitnessGoal createdGoal = fitnessGoalService.createFitnessGoal(goal);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdGoal);
    }

    @PutMapping("/{id}")
    public ResponseEntity<FitnessGoal> updateFitnessGoal(@PathVariable Long id, @RequestBody FitnessGoal goal) {
        FitnessGoal updatedGoal = fitnessGoalService.updateFitnessGoal(id, goal);
        if (updatedGoal != null) {
            return ResponseEntity.ok(updatedGoal);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFitnessGoal(@PathVariable Long id) {
        boolean deleted = fitnessGoalService.deleteFitnessGoal(id);
        if (deleted) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
