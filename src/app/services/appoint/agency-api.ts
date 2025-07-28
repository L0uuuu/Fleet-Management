import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AgencyAPI {

  private baseUrl = 'https://autoteam-bo.teamdev.tn/api/1.0.0';
  constructor(private http: HttpClient) { }

  getAgency(
    params: {
      delegation?: number;
      brand?: number;
      abstractServices?: string[];
      active?: boolean;
      sav?: boolean;
    }
  ): Observable<any> {
    const url = `${this.baseUrl}/agencies`;

    let httpParams = new HttpParams();
    
    if (params.delegation) httpParams = httpParams.set('delegation', params.delegation);
    if (params.brand) httpParams = httpParams.set('brand', params.brand);
    if (params.abstractServices && params.abstractServices.length > 0 ) {
      params.abstractServices.forEach(id => {
        httpParams = httpParams.append('abstractServices', id);
      });
    }
    if (params.active) httpParams = httpParams.set('keyword', params.active);
    if (params.sav) httpParams = httpParams.set('brand', params.sav);

    

    return this.http.get(url, { params: httpParams });
  }

}
