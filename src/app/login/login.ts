import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  email: string = '';
  password: string = '';
  keepLoggedIn: boolean = false;
  showPassword: boolean = false;

  constructor(private router: Router) {}

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  onLogin() {
    // Temporary dummy login logic
    console.log('Login clicked');
    console.log(this.email, this.password);

    if (this.email && this.password) {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Please enter email and password');
    }
}
}