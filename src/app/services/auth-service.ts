import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'https://autoteam-bo.teamdev.tn/api/1.0.0'; // replace with your backend URL

  constructor(private http: HttpClient) {}
  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  getUser() {
    const userJson = localStorage.getItem('user');
    return userJson ? JSON.parse(userJson) : null;
  }
  getPassword(): string | null {
    return localStorage.getItem('password');
  }
  
  changePassword(number: string, newPassword: string): Observable<any> {
    const body = {
      number,
      newPassword
    };
    return this.http.patch(`${this.baseUrl}/auth/change-password`, body);
  }
  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
  }
}
