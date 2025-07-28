import { Component, OnInit } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { AgencyAPI } from '../../../services/appoint/agency-api';
import { Router } from '@angular/router';

import { ChangeDetectorRef } from '@angular/core';

import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-agency',
  standalone: false,
  templateUrl: './agency.html',
  styleUrl: './agency.scss'
})
export class Agency implements OnInit {
  constructor(private router: Router,private agencyAPI:AgencyAPI,private cdr: ChangeDetectorRef){}
  
  agencyList: any[] = [];
  ngOnInit(): void {
   const selectedServiceId = sessionStorage.getItem('selectedServiceId');
    if (selectedServiceId) {
      this.agencyAPI.getAgency({ abstractServices: [selectedServiceId] })
        .subscribe(response => {
          this.agencyList = response;
          console.log('agency:', this.agencyList);
          this.cdr.detectChanges();
        });
    } else {
      console.warn('selectedServiceId is null. Skipping API call.');
    }
  }
  
  navigateToService(): void{
    this.router.navigate(['/slide/appointments/service']);
  }

  selectedAgencyIndex: number | null = null;
  selectAgency(index: number): void {
    this.selectedAgencyIndex = index;
  }

  //icon
  faChevronRight = faChevronRight;
  faPhone = faPhone;
  faLocation = faMapMarkerAlt;
  faPlus = faPlus;
}
