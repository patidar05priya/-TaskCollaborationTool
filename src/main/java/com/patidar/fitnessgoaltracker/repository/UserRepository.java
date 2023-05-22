package com.patidar.fitnessgoaltracker.repository;

import com.patidar.fitnessgoaltracker.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}