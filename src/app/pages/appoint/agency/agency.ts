import { Component, OnInit } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { AgencyAPI } from '../../../services/appoint/agency-api';
import { Router } from '@angular/router';
import { __param } from 'tslib';



@Component({
  selector: 'app-agency',
  standalone: false,
  templateUrl: './agency.html',
  styleUrl: './agency.scss'
})
export class Agency implements OnInit {
  constructor(private router: Router,private agencyAPI:AgencyAPI){}
  
  agencyList: any[] = [];
  ngOnInit(): void {
    const selectedServiceId : string | null =sessionStorage.getItem('selectedServiceId');
    this.agencyAPI.getAgency({abstractServices: [selectedServiceId!] }).subscribe(response => {
      
      this.agencyList=response;
      console.log('agency:', this.agencyList);

    })
  }

  navigateToService(): void{
    this.router.navigate(['/slide/appointments/service']);
  }
 

  //icon
  faChevronRight = faChevronRight;
}
