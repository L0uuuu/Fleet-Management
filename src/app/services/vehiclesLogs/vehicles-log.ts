import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VehiclesLog {

  constructor() { }

  
  vehicleID: string|null = null;
  brandId: string='7e76cbc5-649c-49bf-ba58-9b9ce82a0ab9';
  clientID: string|null = null;
  
}
