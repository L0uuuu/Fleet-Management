import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router:Router,private vehiclesAPI:VehiclesAPI,private vehiclesLog:VehiclesLog){}
  navigateToVehicles(){
    this.router.navigate(['/slide/vehicles']);

  }
  vehcileId: string|null = null;
  vehicleDetails: any;
  ngOnInit(): void {
    this.vehcileId = this.vehiclesLog.vehicleID;
    if (this.vehcileId) {
      this.vehiclesAPI.getVehicleById(this.vehcileId).subscribe(response => {
        this.vehicleDetails = response;
        console.log('Vehicle Details:', this.vehicleDetails);
      }, error => {
        console.error('Error fetching vehicle details:', error);
      });
    } else {
      console.warn('Vehicle ID is null or undefined.');
    }
  }
  

  //icon
  faArrow=faArrowLeftLong;
}
