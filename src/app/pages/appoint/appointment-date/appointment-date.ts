import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ServiceAPI } from '../../../services/appoint/service-api';
import { BookingLogs } from '../../../services/appointmentsLogs/booking-logs';
import { ChangeDetectorRef } from '@angular/core';
import { CalenderAPI } from '../../../services/appoint/calender-api';


import { faCalendarXmark } from '@fortawesome/free-solid-svg-icons';
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-appointment-date',
  standalone: false,
  templateUrl: './appointment-date.html',
  styleUrl: './appointment-date.scss'
})

export class AppointmentDate implements OnInit {
  constructor(private router: Router,private serviceAPI:ServiceAPI,private bookingLogs:BookingLogs,private cdr: ChangeDetectorRef, 
    private calenderAPI: CalenderAPI
  ){}

  navigateToAgency(): void{
    this.router.navigate(['/slide/appointments/agency']);
  }
  navigateToSummary(): void{
    this.router.navigate(['/slide/appointments/summary']);
  }
  
  serviceLoaded: boolean=true;
  serviceId: string ='';
  ngOnInit(): void {
    const selectedServiceId = this.bookingLogs.selectedServiceId;
    const selectedAgencyId = this.bookingLogs.selectedAgencyId;
    const brandId = this.bookingLogs.brandId;
    if(selectedServiceId && selectedAgencyId && brandId){
      this.serviceAPI.getServices({brand: brandId,agency: selectedAgencyId,abstractService: selectedServiceId})
        .subscribe(response => {
          this.serviceId = response[0].id;
          console.log('serviceId:', this.serviceId);
          this.serviceLoaded=false;
          this.cdr.detectChanges();
        });
    }
  }

  problem:boolean = true;
  problemMessage: string='';
  datesList: any[] =[];
  onDateSelected(date: string) {

    console.log('Selected date:', date);
    if(this.serviceId){
      this.calenderAPI.getCalenderDates(this.serviceId,{startDate:date,endDate:date})
        .subscribe(response =>{
          this.datesList=response;
          console.log(this.datesList);
          const selectedDate = new Date(date);
          const today = new Date();

          const isToday =
            selectedDate.getFullYear() === today.getFullYear() &&
            selectedDate.getMonth() === today.getMonth() &&
            selectedDate.getDate() === today.getDate();

          const currentHour = today.getHours();
          if(isToday && currentHour >= 17){
            this.problem=false;
            this.problemMessage='woking shifts are over';
            
          }
          else if(this.datesList[0].isDayOff){
            this.problem=false;
            this.problemMessage='day off';
            
          }
          else if(this.datesList[0].isHoliday){
            this.problem=false;
            this.problemMessage='today is a Holiday';
            
          }
          else{
            this.problem=true;
            this.problemMessage='';
            
          }
          this.cdr.detectChanges();
        });
    }
    
  }


  //icons
  faChevronRight = faChevronRight;
  faCalendar = faCalendarAlt;
  faCalendarX=faCalendarXmark;
  faClock = faClockRotateLeft;

}
