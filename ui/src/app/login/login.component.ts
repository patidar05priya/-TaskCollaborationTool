import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [Validators.required]);

  login() {
    // Perform the login logic here
    // You can use the values of 'emailControl' and 'passwordControl' for authentication
    // You can call an API or perform any other necessary operations
  }
}
