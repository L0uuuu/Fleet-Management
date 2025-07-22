import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginAPI {
  private baseUrl = 'https://autoteam-bo.teamdev.tn/api/1.0.0';
  constructor(private http: HttpClient) { }

  login(credentials: { login: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/signin/client-account`, credentials);
  }

}
