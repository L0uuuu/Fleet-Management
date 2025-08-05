import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingLogs {
  
  selectedAgencyId: string | null = null;
  selectedAgencyIndex: number = -1;
  agencyName: string| null = null;
  agencyAddress: string | null = null;

  brandId: string='7e76cbc5-649c-49bf-ba58-9b9ce82a0ab9';

  appointmentDate: Date | null = null;

  additionalNotes: string = '';


  selectedServiceId: string | null = null;
  selectedVehiclesRegistration: string | null = null;
  selectedVehicleId: string | null = null;
  service_btn: string | null = null;
  serviceName: string | null = null;
  isBrokenDown: boolean = false;
  mileage: string | null = null;
  description: string | null = null;
  attatchment:  File | null = null;
  quotation_number:string | null = null;
  Select_type_interview:string | null = null;
  Select_services: string | null = null;
  serviceIcon:string | null = null;



  constructor() { }
}
