import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user.model';

import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  sucessfullMessage: boolean
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [Validators.required]);
  confirmPasswordControl = new FormControl('', [Validators.required]);
  firstNameControl = new FormControl('', [Validators.required]);
  lastNameControl = new FormControl('', [Validators.required]);


  constructor(private userService: UserService) {}

  registerForm() {
    if (this.passwordControl.value !== this.confirmPasswordControl.value) {
      // Password and confirm password do not match
      return;
    }

  
    const user: User = {
      firstName: this.firstNameControl.value,
      lastName: this.lastNameControl.value,
      email: this.emailControl.value,
      password: this.passwordControl.value
    };

    this.userService.createUser(user).subscribe(
      (response) => {
        // Registration successful
        console.log('User registered:', response);
        this.sucessfullMessage = true;
        // Perform any additional actions or show success message
      },
      (error) => {
        // Registration failed
        console.error('Registration failed:', error);
        // Handle the error and display an appropriate message
      }
    );
  }
}
