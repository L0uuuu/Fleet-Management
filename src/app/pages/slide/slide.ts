import { Component ,ViewChild,ElementRef,AfterViewInit,Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
//icon importation
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-slide',
  standalone: false,
  templateUrl: './slide.html',
  styleUrl: './slide.scss'
})

export class Slide {
  // Variables
  //hover state for the side element
  isHovered1: boolean = false;
  isHovered2: boolean = false;
  isHovered3: boolean = false;
  isHovered4: boolean = false;
  isHovered5: boolean = false;
  isHovered6: boolean = false;

  // will be used latter
  private firstName: string = 'Louai';
  private lastName: string = 'Boubaker';

  // constructor
  // the router will be used to navigate to the different pages
  constructor(private router: Router) {}


  // styles for the non acount settings button
  BorderStyle: string = '12px';
  hoverColor: string = 'rgba(8,53,82,0.2)';
  settingsColor: string = 'rgba(8,53,82,0.1)';
  defaultColor: string = 'rgba(8,53,82,0)';

  //getters for first and last name
  get getFirstName() {
    return this.firstName;  
  }
  get getLastName() {
    return this.lastName;  
  }


  buttonStates: { [key: string]: boolean } = {
    btn1: false, // Account Settings
    btn2: false, // Dashboard
    btn3: false, // Vehicles
    btn4: false, // Appointments
    btn5: false, // Settings
    btn6: false  // Sign Out
  };

  ngOnInit(): void {
    // Navigate to account settings when component initializes
    this.router.navigate(['/slide/account-setting']);
    
    // Reset all buttons and activate Account Settings button
    for (let key in this.buttonStates) {
      this.buttonStates[key] = false;
    }
    this.buttonStates['btn1'] = true;
  }
  toggleButtonState(buttonKey: string): void {
    // Reset all buttons to false
    for (let key in this.buttonStates) {
      this.buttonStates[key] = false;
    }
    
    this.buttonStates[buttonKey] = !this.buttonStates[buttonKey];
    switch (buttonKey) {
      case 'btn1': this.router.navigate(['/slide/account-setting']); break;
      case 'btn2': this.router.navigate(['/slide/dashboard']); break;
      case 'btn3': this.router.navigate(['/slide/vehicles']); break;
      case 'btn4': this.router.navigate(['/slide/appointments']); break;
      default: this.router.navigate(['/slide/account-setting']); break;
    }
  }
  isButtonActive(buttonKey: string): boolean {
    return this.buttonStates[buttonKey] === true;
  }


  // FontAwesome icon
  faUserCircle = faUserCircle;
  faDashboard = faTachometerAlt;
  faVehicle = faCar;
  faAppointments = faCalendarCheck;
  faSettings = faCog;
  faSignOut = faRightFromBracket;

  

}
