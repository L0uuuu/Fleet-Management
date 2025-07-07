import { Component } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-slide',
  standalone: false,
  templateUrl: './slide.html',
  styleUrl: './slide.scss'
})
export class Slide {
  private firstName: string = 'Louai';
  private lastName: string = 'boubaker';
  get getFirstName() {
    return this.firstName;  
  }
  get getLastName() {
    return this.lastName;  
  }
  // FontAwesome icon
  faUserCircle = faUserCircle;

}
