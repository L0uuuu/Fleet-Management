import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-technical-file',
  standalone: false,
  templateUrl: './technical-file.html',
  styleUrl: './technical-file.scss'
})
export class TechnicalFile {
  constructor(private router:Router){}
  navigateToVehicles(){
    this.router.navigate(['/slide/vehicles']);

  }

  //icon
  faArrow=faArrowLeftLong;
}
