import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-appointment-date',
  standalone: false,
  templateUrl: './appointment-date.html',
  styleUrl: './appointment-date.scss'
})
export class AppointmentDate {
  constructor(private router: Router){}
  navigateToAgency(): void{
    this.router.navigate(['/slide/appointments/agency']);
  }
  navigateToSummary(): void{
    this.router.navigate(['/slide/appointments/summary']);
  }
  onDateSelected(date: string) {
    console.log('Selected date:', date);
    // Handle the date as needed (e.g., store it, display it)
  }


  //icons
  faChevronRight = faChevronRight;
  faCalendar = faCalendarAlt;
  faClock = faClockRotateLeft;

}
