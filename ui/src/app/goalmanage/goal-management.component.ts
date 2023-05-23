import { Component } from '@angular/core';
import { Goal } from '../model/goal.model';

@Component({
  selector: 'app-goal-management',
  templateUrl: './goal-management.component.html',
  styleUrls: ['./goal-management.component.scss']
})
export class GoalManagementComponent {
  goals: Goal[] = [];
  selectedGoal: Goal | null = null;

  addGoal(): void {
    const newGoal: Goal = {
      type: '',
      duration: '',
      targetMetrics: ''
    };
    this.goals.push(newGoal);
   
    // Clear the selected goal and reset the form fields
  this.selectedGoal = null;
  this.clearFormFields();
    
  }

  editGoal(goal: Goal): void {
    this.selectedGoal = goal;
  }

  updateGoal(): void {
    // Perform any necessary validation or logic before updating the goal
    // Example: send the updated goal to the server
    console.log('Updated goal:', this.selectedGoal);
  }
  removeGoal(goal: Goal){

  }

  clearFormFields(): void {
    // Reset the form fields to empty values
    this.selectedGoal = {
      type: '',
      duration: '',
      targetMetrics: ''
    }
}
}
