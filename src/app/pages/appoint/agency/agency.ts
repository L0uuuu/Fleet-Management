import { Component } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-agency',
  standalone: false,
  templateUrl: './agency.html',
  styleUrl: './agency.scss'
})
export class Agency {

  //icon
  faChevronRight = faChevronRight;
}
