import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

import { User } from '../model/user.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [Validators.required]);
  loggedIn : boolean;
  constructor(private userService: UserService, private router: Router) {}


  login() {
    const email =  this.emailControl.value;
    const password =  this.passwordControl.value;


    this.userService.getUserByEmail(email).subscribe(
      (user) => {
        if(user.password == password )
        console.log('User:', user);
        this.loggedIn = true;
        this.router.navigate(['/profile']); // Replace '/dashboard' with your desired route

      },
      (error) => {
        console.error('Error:', error);
        this.loggedIn = false;
      }
    );
  }
}