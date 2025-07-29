import { Component, OnInit } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { AgencyAPI } from '../../../services/appoint/agency-api';
import { Router } from '@angular/router';

import { BookingLogs } from '../../../services/appointmentsLogs/booking-logs';
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
  constructor(private router: Router,private agencyAPI:AgencyAPI,private cdr: ChangeDetectorRef,private bookingLogs: BookingLogs){}
  

  agencyList: any[] = [];
  agencyPoints: { lat: number; lng: number; label: string }[] = [];


  ngOnInit(): void {
    const selectedServiceId = this.bookingLogs.selectedServiceId;
    if (selectedServiceId) {
      this.agencyAPI.getAgency({ abstractServices: [selectedServiceId] })
        .subscribe(response => {
          this.agencyList = response;
          console.log('agency:', this.agencyList);
          
          this.agencyPoints = this.agencyList
          .filter(a => a.latitude && a.longitude)
          .map(a => ({
            lat: a.latitude,
            lng: a.longitude,
            label: `<b>${a.socialReason}</b><br>${a.address}`
          }));
          this.cdr.detectChanges();
        });
    } else {
      console.warn('selectedServiceId is null. Skipping API call.');
    }
  }
  
  navigateToService(): void{
    this.router.navigate(['/slide/appointments/service']);
  }
  navigateToDate(): void{
    this.router.navigate(['/slide/appointments/date']);
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
