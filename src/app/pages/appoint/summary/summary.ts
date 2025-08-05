import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BookingLogs } from '../../../services/appointmentsLogs/booking-logs';

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-summary',
  standalone: false,
  templateUrl: './summary.html',
  styleUrl: './summary.scss'
})
export class Summary implements OnInit {
  constructor(private router:Router,private bookingLogs:BookingLogs ){}
  navigateToDate(){
    this.router.navigate(['/slide/appointments/date']);
  }
  confirmation(){
    console.log('confirmed');
  }

  selectedAgencyId: string | null = null;
  agencyName: string| null = null;
  agencyAddress: string | null = null;


  selectedServiceId: string | null = null;
  selectedVehicleId: string | null = null;
  selectedVehicleRegistration: string | null = null;
  serviceName: string | null = null;
  isBrokenDown: boolean = false;
  mileage: string | null = null;
  description: string | null = null;
  attatchment: File | null = null;
  quotation_number:string | null = null;
  Select_type_interview:string | null = null;
  Select_services: string | null = null;
  serviceIcon:string | null = null;

  ngOnInit(): void {
    //service init
    this.selectedServiceId = this.bookingLogs.selectedServiceId;
    this.selectedVehicleId = this.bookingLogs.selectedVehicleId;

    this.selectedVehicleRegistration= this.bookingLogs.selectedVehiclesRegistration

    this.serviceName = this.bookingLogs.serviceName;
    this.serviceIcon = this.bookingLogs.serviceIcon;
   
    this.isBrokenDown = this.bookingLogs.isBrokenDown;

    this.mileage = this.bookingLogs.mileage;
    this.description = this.bookingLogs.description;
    this.attatchment = this.bookingLogs.attatchment;
    this.quotation_number = this.bookingLogs.quotation_number; 
    this.Select_type_interview = this.bookingLogs.Select_type_interview;
    this.Select_services = this.bookingLogs.Select_services;

    //agnecy init
    this.selectedAgencyId = this.bookingLogs.selectedAgencyId;
    this.agencyName = this.bookingLogs.agencyName;
    this.agencyAddress = this.bookingLogs.agencyAddress;


  }
  onEditClick(choix: string): void {
    switch (choix) {
      case 'service':
        this.router.navigate(['/slide/appointments/service']);
        break;
      case 'agency':
        this.router.navigate(['/slide/appointments/agency']);
        break;
    }
  }
  //icons
  faChevronRight = faChevronRight;
  faPenToSquare = faPenToSquare;
  faCheckCircle = faCheckCircle;
  faMapMarkerAlt = faMapMarkerAlt
}
