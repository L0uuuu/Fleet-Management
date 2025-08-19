import { Component } from '@angular/core';
import { VehiclesAPI } from '../../../../services/vehicles-api';
import { VehiclesLog } from '../../../../services/vehiclesLogs/vehicles-log';

@Component({
  selector: 'app-complaint-list',
  standalone: false,
  templateUrl: './complaint-list.html',
  styleUrl: './complaint-list.scss'
})
export class ComplaintList implements OnInit {
  constructor(private vehiclesAPI:VehiclesAPI,private vehiclesLog:VehiclesLog) {}

  vehiclesID: string | null = '';

  complaints: any[] = [];
  ngOnInit(): void {
    this.vehiclesID = this.vehiclesLog.vehicleID;
    if (this.vehiclesID) {
      this.vehiclesAPI.getVehicleComplaintsById(this.vehiclesID)
        .subscribe(response => {
          this.complaints = response;
          console.log('complaints:', this.complaints);
        });
    } else {
      console.warn('vehiclesID is null. Skipping API call.');
    }
  }


}
