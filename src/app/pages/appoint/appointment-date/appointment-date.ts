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

  selectedDate:string = '';
  selectedTime:string = '';


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


  firstShiftSlotsList:any[]=[];
  secondShiftSlotsList:any[]=[];
  problem:boolean = true;
  problemMessage: string='';
  datesList: any[] =[];

  onDateSelected(date: string) {
    this.selectedDate=date;
    console.log('Selected date:', this.selectedDate);
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
            const slots = this.datesList[0].workSchedule;

            const formatToTime = (isoString: string): string => {
              const date = new Date(isoString);
              const hours = String(date.getHours()).padStart(2, '0');
              const minutes = String(date.getMinutes()).padStart(2, '0');
              return `${hours}:${minutes}`;
            };

            // Define the interface (optional but clean)
            interface SlotInfo {
              time: string;
              hasPassed: boolean;
              isAllowed: boolean;
              isFull: boolean;
            }

            // Map full slot info
            const firstShiftSlots: SlotInfo[] = slots.firstShiftSlots.map((slot: any) => ({
              time: formatToTime(slot.slotStartDate),
              hasPassed: slot.hasPassed,
              isAllowed: slot.isAllowed,
              isFull: slot.isFull
            }));

            const secondShiftSlots: SlotInfo[] = slots.secondShiftSlots.map((slot: any) => ({
              time: formatToTime(slot.slotStartDate),
              hasPassed: slot.hasPassed,
              isAllowed: slot.isAllowed,
              isFull: slot.isFull
            }));

            console.log(firstShiftSlots);
            console.log(secondShiftSlots);

            this.firstShiftSlotsList = firstShiftSlots;
            this.secondShiftSlotsList = secondShiftSlots;
            this.selectedIndexFirst = null;
            this.selectedIndexSecond = null;
          }
          this.cdr.detectChanges();
        });
    }
    
  }

  selectedIndexFirst:number|null=null;
  selectedIndexSecond:number|null=null;
  toggelSelectionFirst(i:number|null,){
    this.selectedIndexSecond = null;
    this.selectedIndexFirst = i; 
    this.OnSelectDate();
  }
  toggelSelectionSecond(j:number|null,){
    this.selectedIndexFirst = null;
    this.selectedIndexSecond = j; 
    this.OnSelectDate();
  }


  isDisabled:boolean=true;
  OnSelectDate(){
    if(this.selectedIndexFirst){
      this.selectedTime = this.firstShiftSlotsList[this.selectedIndexFirst];
    }
    else if(this.selectedIndexSecond){
      this.selectedTime = this.secondShiftSlotsList[this.selectedIndexSecond];
    }
    if(this.selectedDate && this.selectedTime){
      this.isDisabled=false
    }
  }


  //icons
  faChevronRight = faChevronRight;
  faCalendar = faCalendarAlt;
  faCalendarX=faCalendarXmark;
  faClock = faClockRotateLeft;

}
