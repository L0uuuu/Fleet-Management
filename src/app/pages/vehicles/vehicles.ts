import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VehiclesAPI } from '../../services/vehicles-api';
import { AuthService } from '../../services/auth-service';
//icon importation
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vehicles',
  standalone: false,
  templateUrl: './vehicles.html',
  styleUrl: './vehicles.scss'
})
export class Vehicles  {

  constructor(private http: HttpClient,private authService: AuthService,private vehiclesAPI: VehiclesAPI,) {}

  ngOnInit() {

    this.vehiclesAPI.getVehiclesOfClient('522d8ad4-59c5-4508-a261-106d46937667', {
      page: 1,
      pageSize: 10,
      order: 'DESC'
    }).subscribe(response => {
      console.log('Vehicles:', response);
    });
  }
  //icon
  faPlus = faPlus;
  faSearch = faSearch;
}
