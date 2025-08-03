import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-summary',
  standalone: false,
  templateUrl: './summary.html',
  styleUrl: './summary.scss'
})
export class Summary {
  constructor(private router:Router){}
  navigateToDate(){
    this.router.navigate(['/slide/appointments/date']);
  }
  confirmation(){
    console.log('confirmed');
  }
  //icons
  faChevronRight = faChevronRight;
  faPenToSquare = faPenToSquare;
}
