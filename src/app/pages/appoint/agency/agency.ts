import { Component, OnInit } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { AgencyAPI } from '../../../services/appoint/agency-api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-agency',
  standalone: false,
  templateUrl: './agency.html',
  styleUrl: './agency.scss'
})
export class Agency implements OnInit {
  constructor(private router: Router,private agencyAPI:AgencyAPI){}

  ngOnInit(): void {
    const selectedServiceId =sessionStorage.getItem('selectedServiceId');
  }



  //icon
  faChevronRight = faChevronRight;
}
