import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth.guard';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [Validators.required]);
  loggedIn : boolean;
  constructor(private userService: UserService, private router: Router, private authGuard: AuthGuard) {}


  login() {
    this.authGuard.isActive = false;
    const email =  this.emailControl.value;
    const password =  this.passwordControl.value;
  
    this.userService.getUserByEmail(email).subscribe(
      (user) => {
        if (user.password == password) {
          console.log('User:', user);
          this.authGuard.isActive = true;
          this.router.navigate(['/profile']); // Navigate to the '/profile' route
        } else {
          console.log('Invalid password');
          this.loggedIn = false;
        }
      },
      (error) => {
        console.error('Error:', error);
        this.loggedIn = false;
      }
    );

    this.authGuard.isActive = true;
    this.router.navigate(['/profile']); // Navig
  }
  
}