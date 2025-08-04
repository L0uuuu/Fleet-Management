import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BookingLogs } from '../../../services/appointmentsLogs/booking-logs';

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
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

  selectedServiceId: string | null = null;
  selectedVehicleId: string | null = null;
  selectedVehicleRegistration: string | null = null;
  serviceName: string | null = null;
  isBrokenDown: boolean = false;
  mileage: string | null = null;
  description: string | null = null;
  attatchment: string | null = null;
  quotation_number:string | null = null;
  Select_type_interview:string | null = null;
  Select_services: string | null = null;
  serviceIcon:string | null = null;
  ngOnInit(): void {
    this.selectedVehicleRegistration= this.bookingLogs.selectedVehiclesRegistration
    this.serviceName = this.bookingLogs.serviceName;
    this.serviceIcon = this.bookingLogs.serviceIcon
  }
  //icons
  faChevronRight = faChevronRight;
  faPenToSquare = faPenToSquare;
  faCheckCircle = faCheckCircle;
}
