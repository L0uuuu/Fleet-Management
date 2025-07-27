import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceAPI {
  private baseUrl = 'https://autoteam-bo.teamdev.tn/api/1.0.0';
  constructor(private http: HttpClient) { }

  getServices(): Observable<any> {
    return this.http.get(`${this.baseUrl}/abstract-services`);
  }

}
