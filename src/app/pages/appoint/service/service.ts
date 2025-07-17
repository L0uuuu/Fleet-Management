import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service',
  standalone: false,
  templateUrl: './service.html',
  styleUrl: './service.scss'
})
export class Service {

  constructor(private router: Router) {}

  serviceStates: { [key: string]: boolean } = {
    ser1: false, // Diagnostic service
    ser2: false, // Electrical Repair Service
    ser3: false, // Mechanical Repair Service
    ser4: false, // Fast Service
    ser5: false, // Multiple services
    ser6: false  // Bodywork
  };

  ngOnInit(): void {
    // Reset all buttons and activate Account Settings button
    for (let key in this.serviceStates) {
      this.serviceStates[key] = false;
    }
  }

  toggleService(buttonKey: string): void {
    // Reset all buttons to false
    for (let key in this.serviceStates) {
      this.serviceStates[key] = false;
    }
    this.serviceStates[buttonKey] = !this.serviceStates[buttonKey];
    switch (buttonKey) {
      case 'ser1': this.router.navigate(['appointments/service/DiagnosticService']); break;
    }
  }
  isButtonActive(buttonKey: string): boolean {
    return this.serviceStates[buttonKey] === true;
  }
}
