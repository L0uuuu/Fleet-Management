import { Component, OnInit } from '@angular/core';
import { VehiclesAPI } from '../../../../services/vehicles-api';
import { VehiclesLog } from '../../../../services/vehiclesLogs/vehicles-log';

import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-complaint-list',
  standalone: false,
  templateUrl: './complaint-list.html',
  styleUrl: './complaint-list.scss'
})
export class ComplaintList implements OnInit {
  constructor(private vehiclesAPI:VehiclesAPI,private vehiclesLog:VehiclesLog,private cdr: ChangeDetectorRef) {}

  vehiclesID: string | null = null;
  brand: string = '';
  clientID: string | null = null;
  complaints: any[] = [];
  ngOnInit(): void {
    this.vehiclesID = this.vehiclesLog.vehicleID;
    this.brand = this.vehiclesLog.brandId;
    this.clientID = this.vehiclesLog.clientID;
    if (this.vehiclesID && this.brand && this.clientID) {
      this.vehiclesAPI.getVehicleComplaintsById(this.vehiclesID
        , {
          brand: this.brand,
          client: this.clientID
        }
      )
        .subscribe(response => {
          this.complaints = response;
          this.cdr.detectChanges();
          console.log('complaints:', this.complaints);
        });
    } else {
      console.warn('vehiclesID is null. Skipping API call.');
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
