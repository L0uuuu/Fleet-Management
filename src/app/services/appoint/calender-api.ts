import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalenderAPI {

  private baseUrl = 'https://autoteam-bo.teamdev.tn/api/1.0.0';
  constructor(private http: HttpClient) { }

  getCalenderDates(
    id: string,
    params: {
      startDate: string;
      endDate: string;
    }
  ): Observable<any> {
    const url = `${this.baseUrl}/services/${id}/calendar`;

    let httpParams = new HttpParams()
      .set('startDate', (params.startDate))
      .set('endDate', (params.endDate))

    return this.http.get(url, { params: httpParams });
  }
}
