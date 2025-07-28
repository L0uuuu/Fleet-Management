import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VehiclesAPI } from '../../services/vehicles-api';
import { AuthService } from '../../services/auth-service';

import { ChangeDetectorRef } from '@angular/core';
//icon importation
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vehicles',
  standalone: false,
  templateUrl: './vehicles.html',
  styleUrl: './vehicles.scss'
})
export class Vehicles implements OnInit  {
  vehicl: any[] = [];
  constructor(private http: HttpClient,private authService: AuthService,private vehiclesAPI: VehiclesAPI,private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    let user = this.authService.getUser();
    let id = user.client.id;
    
    this.vehiclesAPI.getVehiclesOfClient(id, {
      page: 1,
      pageSize: 10,
      order: 'DESC'
    }).subscribe(response => {
      
      this.vehicl = response.result;
      this.cdr.detectChanges();
    });
  }
  //icon
  faPlus = faPlus;
  faSearch = faSearch;
}
