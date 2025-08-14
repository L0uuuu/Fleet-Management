import { Component } from '@angular/core';
import { VehiclesLog } from '../../../../services/vehiclesLogs/vehicles-log';
import { VehiclesAPI } from '../../../../services/vehicles-api';

import { ChangeDetectorRef } from '@angular/core';
import { de } from 'intl-tel-input/i18n';
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
      let statusList :any[] = [null,'SCHEDULED', 'RESCHEDULED', 'CANCELED', 'ABANDONED', 'DONE'];
      for (let status of statusList) {
        this.vehiclesAPI.getVehicleInterventionsById(this.vehicleID, {
          page: 1,
          pageSize: 20,
          order: 'DESC',
          appointmentStatus: status
        }).subscribe({
          next: (appointments) => {
            this.appointments.push(...appointments.result);
            this.cdr.detectChanges();
            console.log(`Appointments for status ${status} fetched successfully:`, appointments.result);
          },
          error: (error) => {
            console.error(`Error fetching appointments for status ${status}:`, error);
          }
        });
      }
      
    } else {
      console.warn('No vehicle ID found.');
    }
  }
  getStatusColor(status: string): string {
    switch (status) {
      case 'REQUESTED':
        return 'grey';

      case 'ACCEPTED':
        return 'green';

      case 'REJECTED':
        return 'red';
      default:
        return 'black'; // Default color for unknown status
    }
  }

}
