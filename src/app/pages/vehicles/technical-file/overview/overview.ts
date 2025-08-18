import { Component } from '@angular/core';
import { VehiclesLog } from '../../../../services/vehiclesLogs/vehicles-log';

import { ChangeDetectorRef } from '@angular/core';
import { VehiclesAPI } from '../../../../services/vehicles-api';
@Component({
  selector: 'app-overview',
  standalone: false,
  templateUrl: './overview.html',
  styleUrls: ['./overview.scss']
})
export class Overview {
  constructor(private vehiclesAPI:VehiclesAPI,private vehiclesLog:VehiclesLog,private cdr: ChangeDetectorRef ) {}


  vehicleId: string|null = null;
  vehicleDetails: any;
  ngOnInit(): void {
    this.vehicleId = this.vehiclesLog.vehicleID;
    if (this.vehicleId) {
      this.vehiclesAPI.getVehicleById(this.vehicleId).subscribe(response => {
        this.vehicleDetails = response;
        this.cdr.detectChanges();
      }, error => {
        console.error('Error fetching vehicle details:', error);
      });
    } else {
      console.warn('Vehicle ID is null or undefined.');
    }
  }
}