import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-appointments',
  standalone: false,
  templateUrl: './appointments.html',
  styleUrl: './appointments.scss'
})
export class Appointments {
  currentStep = 1;

  constructor(private router: Router) {
    router.events.subscribe(() => {
      this.setCurrentStep(router.url);
    });
  }
   
  
  setCurrentStep(url: string) {
    if (url.includes('service')) this.currentStep = 1;
    else if (url.includes('agency')) this.currentStep = 2;
    else if (url.includes('date')) this.currentStep = 3;
    else if (url.includes('summary')) this.currentStep = 4;
  }

  isCompleted(step: number): boolean {
    return this.currentStep > step;
  }

  isActive(step: number): boolean {
    return this.currentStep == step;
  }
}
