import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BookingLogs } from '../../../services/appointmentsLogs/booking-logs';
import{ AppointmentDataAPI } from '../../../services/appoint/appointment-data-api';


import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
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
  constructor(private router:Router,private bookingLogs:BookingLogs,private appointmentDataAPI:AppointmentDataAPI ){}

  parseNumberFromString(input: string|null): number|null {
    if(input){
      return Number(input.replace(/,/g, ''));
    }
    return null;
  }


  navigateToDate(){
    this.router.navigate(['/slide/appointments/date']);
  }
  confirmation(){
    const date = this.selectedDate; // e.g. '2025-08-06'
    const time = this.selectedTime; // e.g. '14:30'

    // Combine to a Date object
    const appointmentDate = new Date(`${date}T${time}:00`); // Add seconds

    // Convert to ISO string
    const isoAppointmentDate = appointmentDate.toISOString();


    
    var payload = {
      deviceType: 'ISO', 
      data: {
        description: this.description,
        km: this.parseNumberFromString(this.mileage),
        appointmentDate: isoAppointmentDate // or bind from a date picker
      },
      vehicle: this.selectedVehicleId,
      breakDown: this.isBrokenDown,
      service: this.selectedServiceId
    };
    this.appointmentDataAPI.setInterventions(payload).subscribe({
      next: (res) => console.log('Sent with attachment:', res),
      error: (err) => console.error('Upload error:', err)
    });
  }

  selectedAgencyId: string | null = null;
  agencyName: string| null = null;
  agencyAddress: string | null = null;


  selectedDate:string| null = null;
  selectedTime:string | null = null;
  
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

    //date inti
    this.selectedDate = this.bookingLogs.selectedDate;
    this.selectedTime = this.bookingLogs.selectedTime;

  }
  onEditClick(choix: string): void {
    switch (choix) {
      case 'service':
        this.router.navigate(['/slide/appointments/service']);
        break;
      case 'agency':
        this.router.navigate(['/slide/appointments/agency']);
        break;
      case 'date':
        this.router.navigate(['/slide/appointments/date']);
        break;
    }
  }
  //icons
  faChevronRight = faChevronRight;
  faPenToSquare = faPenToSquare;
  faCheckCircle = faCheckCircle;
  faMapMarkerAlt = faMapMarkerAlt;
  faClock = faClockRotateLeft;
  faCalendar = faCalendarAlt;
}
