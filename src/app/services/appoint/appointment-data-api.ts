import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentDataAPI {
  private baseUrl = 'https://autoteam-bo.teamdev.tn/api/1.0.0';

  constructor(private http: HttpClient) {}

  setInterventions(payload: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/mobile/interventions`, payload);
  }
}