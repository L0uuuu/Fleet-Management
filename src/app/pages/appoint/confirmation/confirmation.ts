import { Component } from '@angular/core';

import { faFileCircleCheck  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-confirmation',
  standalone: false,
  templateUrl: './confirmation.html',
  styleUrl: './confirmation.scss'
})
export class Confirmation {

  //icon
  faFile = faFileCircleCheck;

}
