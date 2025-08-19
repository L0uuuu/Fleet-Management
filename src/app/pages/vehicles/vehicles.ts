import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VehiclesAPI } from '../../services/vehicles-api';
import { AuthService } from '../../services/auth-service';
import { VehiclesLog } from '../../services/vehiclesLogs/vehicles-log'; 

import { ChangeDetectorRef } from '@angular/core';
//icon importation
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { ca, csInterfaceTranslations } from 'intl-tel-input/i18n';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  standalone: false,
  templateUrl: './vehicles.html',
  styleUrl: './vehicles.scss'
})
export class Vehicles implements OnInit  {
  vehicl: any[] = [];
  constructor(private vehiclesLog:VehiclesLog,private router:Router,private http: HttpClient,private authService: AuthService,private vehiclesAPI: VehiclesAPI,private cdr: ChangeDetectorRef) {}

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

  selectAll: boolean = false;

  toggleAll() {
    this.vehicl.forEach(v => v.selected = this.selectAll);
  }

  checkIfAllSelected() {
    this.selectAll = this.vehicl.every(v => v.selected);
  }


  //popup
  showPopup_addVehicle: boolean = false;
  showPopup_deleteVehicle: boolean = false;
  showPopup_editVehicle: boolean = false;
  openPopup(pop: string) {
    switch(pop){
      case'pop1':
        this.showPopup_addVehicle = true;
        break;
      case'pop2':
        this.showPopup_deleteVehicle = true;
        break;
      case'pop3': 
        this.showPopup_editVehicle = true;
        break;
    }
    
  }

  closePopup() {
    this.showPopup_addVehicle = false;
    this.showPopup_deleteVehicle = false;
    this.showPopup_editVehicle = false;
  }

  navigateToTechnicalFile(index: number) {
    const vehicle = this.vehicl[index];
    this.vehiclesLog.vehicleID = vehicle.id;
    this.vehiclesLog.clientID = vehicle.clientId; 
    this.router.navigate(['/slide/technicalFile']);
  }


  //icon
  faPlus = faPlus;
  faSearch = faSearch;
  faXmarkCircle = faCircleXmark;
  faPen= faPencil;
  faEye = faEye;
}
