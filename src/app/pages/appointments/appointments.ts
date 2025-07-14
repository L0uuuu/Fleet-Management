import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-appointments',
  standalone: false,
  templateUrl: './appointments.html',
  styleUrl: './appointments.scss'
})
export class Appointments {
  constructor(private router: Router) {}

  next() {
    this.router.navigate(['appointments/agency']);
  }

}
