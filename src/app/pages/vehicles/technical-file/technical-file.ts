import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ChangeDetectorRef } from '@angular/core';
import { VehiclesAPI } from '../../../services/vehicles-api';
import { VehiclesLog } from '../../../services/vehiclesLogs/vehicles-log';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-technical-file',
  standalone: false,
  templateUrl: './technical-file.html',
  styleUrl: './technical-file.scss'
})
export class TechnicalFile implements OnInit {
  constructor(private router:Router,private vehiclesAPI:VehiclesAPI,private vehiclesLog:VehiclesLog,private cdr: ChangeDetectorRef){}
  navigateToVehicles(){
    this.router.navigate(['/slide/vehicles']);

  }
  selected: number = 0; // Default to 'Overview'
  
  vehicleId: string|null = null;
  vehicleDetails: any;
  ngOnInit(): void {
    this.vehicleId = this.vehiclesLog.vehicleID;
    if (this.vehicleId) {
      this.vehiclesAPI.getVehicleById(this.vehicleId).subscribe(response => {
        this.vehicleDetails = response;
        this.cdr.detectChanges();
        console.log('Vehicle Details:', this.vehicleDetails);
      }, error => {
        console.error('Error fetching vehicle details:', error);
      });
    } else {
      console.warn('Vehicle ID is null or undefined.');
    }
  }

  get formattedRegistration(): string | undefined {
    const reg = this.vehicleDetails?.registrationNumber;
    return reg?.replace(/(\d+)([A-Za-z]+)(\d+)/, '$1 $2 $3');
  }
  

  //icon
  faArrow=faArrowLeftLong;
}
