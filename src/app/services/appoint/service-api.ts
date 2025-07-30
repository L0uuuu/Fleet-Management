import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceAPI {
  private baseUrl = 'https://autoteam-bo.teamdev.tn/api/1.0.0';
  constructor(private http: HttpClient) { }

  getAbstractServices(): Observable<any> {
    return this.http.get(`${this.baseUrl}/abstract-services`);
  }

  getServices( params: {brand?: string;agency?: string;abstractServices?: string}): Observable<any> {
    const url = `${this.baseUrl}/services`;
    let httpParams = new HttpParams();
    
    if (params.brand) httpParams = httpParams.set('brand', params.brand);
    if (params.agency) httpParams = httpParams.set('agency', params.agency);
    if (params.abstractServices) httpParams = httpParams.set('keyword', params.abstractServices);

    

    return this.http.get(url, { params: httpParams });
  }

}
