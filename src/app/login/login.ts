import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginAPI } from '../services/login-api';

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

  constructor(private router: Router,private loginAPI: LoginAPI) {}

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  onLogin() {
    this.loginAPI.login({ login: this.email, password: this.password }).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        // Save token or navigate here
        // Navigate to a protected route
        this.router.navigate(['/slide']);
        // Save the access token to localStorage (or sessionStorage)
        localStorage.setItem('access_token', response.access_token);

        // Optionally save user info
        localStorage.setItem('user', JSON.stringify(response.clientAccount));
        
        
        
      },
      error: (erreur) => {
        console.error('Login failed:', erreur);
        alert('password or username does not exist');
      }
    });
  }
}