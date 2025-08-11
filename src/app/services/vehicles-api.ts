import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VehiclesAPI {
  private baseUrl = 'https://autoteam-bo.teamdev.tn/api/1.0.0';

  constructor(private http: HttpClient) {}

  getVehiclesOfClient(
    id: string,
    params: {
      page?: number;
      pageSize?: number;
      order?: 'ASC' | 'DESC';
      keyword?: string;
      brand?: string;
    }
  ): Observable<any> {
    const url = `${this.baseUrl}/clients/${id}/vehicles`;

    let httpParams = new HttpParams()
      .set('page', (params.page ?? 1).toString())
      .set('pageSize', (params.pageSize ?? 10).toString())
      .set('order', params.order ?? 'DESC');

    if (params.keyword) httpParams = httpParams.set('keyword', params.keyword);
    if (params.brand) httpParams = httpParams.set('brand', params.brand);

    return this.http.get(url, { params: httpParams });
  }
  
  getVehicleById(id: string): Observable<any> {
    const url = `${this.baseUrl}/vehicles/${id}`;
    return this.http.get(url);
  }

  getVehicleInterventionsById(
    id: string,
   params: {
      page?: number;
      pageSize?: number;
      order?: 'ASC' | 'DESC';
      appointmentStatus?: 'SCHEDULED'| 'RESCHEDULED'| 'CANCELED'| 'ABANDONED'| 'DONE';
    }): Observable<any> {
      const url = `${this.baseUrl}/mobile/vehicles/${id}/interventions`;
      let httpParams = new HttpParams()
      .set('page', (params.page ?? 1).toString())
      .set('pageSize', (params.pageSize ?? 10).toString())
      .set('order', params.order ?? 'DESC');

      
      if (params.appointmentStatus) httpParams = httpParams.set('appointmentStatus', params.appointmentStatus);

      return this.http.get(url, { params: httpParams });
    }
}