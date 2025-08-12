import { Component } from '@angular/core';
import { VehiclesLog } from '../../../../services/vehiclesLogs/vehicles-log';
import { VehiclesAPI } from '../../../../services/vehicles-api';

import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-appointment-list',
  standalone: false,
  templateUrl: './appointment-list.html',
  styleUrl: './appointment-list.scss'
})
export class AppointmentList {
  constructor(public vehiclesLog: VehiclesLog,private vehiclesAPI: VehiclesAPI,private cdr: ChangeDetectorRef) { }

  vehicleID: string|null = null;

  appointments: any[] = [];
  ngOnInit() {
    this.vehicleID = this.vehiclesLog.vehicleID;
    if (this.vehicleID) {
      this.vehiclesAPI.getVehicleInterventionsById(this.vehicleID,{
        page: 1,
        pageSize: 20,
        order: 'DESC'
      }).subscribe({
        next: (appointments) => {
          this.appointments = appointments.result;
          this.cdr.detectChanges();
          console.log('Appointments fetched successfully:', this.appointments);
        },
        error: (error) => {
          console.error('Error fetching appointments:', error);
        }
      });
    } else {
      console.warn('No vehicle ID found.');
    }
  }

}
