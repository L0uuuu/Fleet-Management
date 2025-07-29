import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BookingLogs } from '../../../services/appointmentsLogs/booking-logs';
import { ServiceAPI } from '../../../services/appoint/service-api';
//icon
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-service',
  standalone: false,
  templateUrl: './service.html',
  styleUrl: './service.scss'
})
export class Service implements OnInit {
  
  constructor(private router: Router,private serviceAPI:ServiceAPI,private bookingLogs:BookingLogs ) {}
  
  serviceStates: { [key: string]: boolean } = {
    ser1: false, // Diagnostic service
    ser2: false, // Electrical Repair Service
    ser3: false, // Mechanical Repair Service
    ser4: false, // Fast Service
    ser5: false, // Multiple services
    ser6: false  // Bodywork
  };



  
  //link to icon
  diagnosticService: string = 'assets/service-icons/blue/DIAGNOSIS-service.png' ;
  electricalRepairService: string = 'assets/service-icons/blue/REPAIR_ELECTRIC-service.png' ;
  mechanicalRepairService: string = 'assets/service-icons/blue/REPAIR_MECHANIC-service.png' ;
  fastService: string = 'assets/service-icons/blue/FAST-service.png' ;
  multipleServices: string = 'assets/service-icons/blue/MULTIPLE_SERVICES-service.png' ;
  bodywork: string = 'assets/service-icons/blue/REPAIR_SHEET_METAL-service.png' ;

   //scroll to the servicer form
  @ViewChild('formService') formService!: ElementRef;

  scrollToSection() {
    this.formService.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }


  ngOnInit(): void {

    // Reset all buttons and activate Account Settings button
    for (let key in this.serviceStates) {
      this.serviceStates[key] = false;
    }
    if(this.bookingLogs.service_btn){
      
      this.toggleService(this.bookingLogs.service_btn);
      
    }

    
  }


  serviceName: string = 'Default';
  serviceNameInApiRespense: string = '';
  isHidden: boolean = false;
  toggleService(buttonKey: string): void {
    this.isHidden = true;
    // Reset all buttons to false
    for (let key in this.serviceStates) {
      this.serviceStates[key] = false;
    }

    //rest the icons
    this.diagnosticService = 'assets/service-icons/blue/DIAGNOSIS-service.png' ;
    this.electricalRepairService = 'assets/service-icons/blue/REPAIR_ELECTRIC-service.png' ;
    this.mechanicalRepairService = 'assets/service-icons/blue/REPAIR_MECHANIC-service.png' ;
    this.fastService = 'assets/service-icons/blue/FAST-service.png' ;
    this.multipleServices= 'assets/service-icons/blue/MULTIPLE_SERVICES-service.png' ;
    this.bodywork= 'assets/service-icons/blue/REPAIR_SHEET_METAL-service.png' ;

    this.serviceStates[buttonKey] = !this.serviceStates[buttonKey];
    switch(buttonKey){
      case 'ser1':  
        this.diagnosticService= 'assets/service-icons/white/DIAGNOSIS-service-white.png';
        this.serviceName='Diagnostic service';
        this.serviceNameInApiRespense='Service Diagnostique';
        break;
      case 'ser2':  
        this.electricalRepairService= 'assets/service-icons/white/REPAIR_ELECTRIC-service-white.png';
        this.serviceName='Electrical Repair Service';
        this.serviceNameInApiRespense='Service Rép.Electrique';
        break;
      case 'ser3':  
        this.mechanicalRepairService= 'assets/service-icons/white/REPAIR_MECHANIC-service-white.png';
        this.serviceName='Mechanical Repair Service';
        this.serviceNameInApiRespense='Service Rép.Mecanique';
        break;
      case 'ser4':  
        this.fastService= 'assets/service-icons/white/FAST-service-white.png';
        this.serviceName='Fast Service';
        this.serviceNameInApiRespense='Service Rapide';
        break;
      case 'ser5':  
        this.multipleServices= 'assets/service-icons/white/MULTIPLE_SERVICES-service-white.png';
        this.serviceName='Multiple services';
        this.serviceNameInApiRespense='Services Multiples';
        break;
      case 'ser6':  
        this.bodywork= 'assets/service-icons/white/REPAIR_SHEET_METAL-service-white.png';
        this.serviceName='Bodywork';
        this.serviceNameInApiRespense='Service Réparation Carrosserie';
        break;
    }
    this.bookingLogs.service_btn = buttonKey;
    setTimeout(() => {
    this.scrollToSection();
    }, 0);
  }

  isButtonActive(buttonKey: string): boolean {
    return this.serviceStates[buttonKey] === true;
  }


  
  services: any[] = [];
  navigateToAgency(): void{
    //calling the api
    this.serviceAPI.getServices().subscribe(response => {
      
      
      this.services = response;
      console.log('services:', this.services);
      const selectedService = this.services.find(
        (service) => service.name === this.serviceNameInApiRespense
      );
      this.bookingLogs.selectedServiceId = selectedService.id ;
      this.router.navigate(['/slide/appointments/agency']);
    });

  }
 

  //icon
  faImage = faImage;
  faCircleCheck = faCircleCheck;
  faChevronRight = faChevronRight;
}
