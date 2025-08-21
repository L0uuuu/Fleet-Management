import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';



import { BookingLogs } from '../../../services/appointmentsLogs/booking-logs';
import { ServiceAPI } from '../../../services/appoint/service-api';
import { VehiclesAPI } from '../../../services/vehicles-api';
import { AuthService } from '../../../services/auth-service';

import { ChangeDetectorRef } from '@angular/core';
//icon
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { tr } from 'intl-tel-input/i18n';

@Component({
  selector: 'app-service',
  standalone: false,
  templateUrl: './service.html',
  styleUrl: './service.scss'
})
export class Service implements OnInit {
  
  isSelectOpen = false;
  

  selectedVehicleId: string = '';
  selectedInterviewType:string ='';
  interviewTypeOther: string = '';
  mileage: string = '';
  description: string = '';
  quotation_number: string = '';
  interviewType: string = '';
  isBrokenDown: boolean = false;
  constructor(private router: Router,private cdr:ChangeDetectorRef,private authService:AuthService,private serviceAPI:ServiceAPI,private bookingLogs:BookingLogs ,private vehiclesAPI: VehiclesAPI ) {}
  
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
  

  listInterviews: number[] = [];
  vehiclesList:any[]=[]
  ngOnInit(): void {
    for (let i = 10000; i <= 200000; i += 10000) {
      this.listInterviews.push(i);
    }
    // Reset all buttons and activate Account Settings button
    for (let key in this.serviceStates) {
      this.serviceStates[key] = false;
    }
    
    if(this.bookingLogs.selectedVehicleId){
      this.selectedVehicleId = this.bookingLogs.selectedVehicleId;
      this.cdr.detectChanges();
    }
    if(this.bookingLogs.service_btn){
      
      this.toggleService(this.bookingLogs.service_btn);
      
      
    }
    if(this.bookingLogs.attatchment){
      this.selectedFile = this.bookingLogs.attatchment;
    }
    if(this.bookingLogs.mileage){
      this.mileage = this.bookingLogs.mileage;
    }
    if(this.bookingLogs.description){
      this.description = this.bookingLogs.description;
    }
    if(this.bookingLogs.Select_type_interview){
      if(this.bookingLogs.Select_type_interview > '200000'){
        this.interviewType="other" ;
        this.interviewTypeOther = this.bookingLogs.Select_type_interview;
      }
      else{
        this.interviewType=this.bookingLogs.Select_type_interview;
      }

    }
    if(this.bookingLogs.isBrokenDown){
      this.isBrokenDown = this.bookingLogs.isBrokenDown;
    }
    if(this.bookingLogs.quotation_number){
      this.quotation_number = this.bookingLogs.quotation_number;
    }
    let user = this.authService.getUser();
    let id = user.client.id;
    
    this.vehiclesAPI.getVehiclesOfClient(id, {
      page: 1,
      pageSize: 10,
      order: 'DESC'
    }).subscribe(response => {
      
      this.vehiclesList = response.result.map((car: any)=> ({
        id: car.id,
        registrationNumber: car.registrationNumber
      }));

      this.cdr.detectChanges();
    });
    this.onInputChange();
 
  }


  serviceIcon:string =''
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
        this.serviceIcon = 'assets/service-icons/blue/DIAGNOSIS-service.png';
        this.onInputChange();
        break;
      case 'ser2':  
        this.electricalRepairService= 'assets/service-icons/white/REPAIR_ELECTRIC-service-white.png';
        this.serviceName='Electrical Repair Service';
        this.serviceNameInApiRespense='Service Rép.Electrique';
        this.serviceIcon = 'assets/service-icons/blue/REPAIR_ELECTRIC-service.png';
        this.onInputChange();
        break;
      case 'ser3':  
        this.mechanicalRepairService= 'assets/service-icons/white/REPAIR_MECHANIC-service-white.png';
        this.serviceName='Mechanical Repair Service';
        this.serviceNameInApiRespense='Service Rép.Mecanique';
        this.serviceIcon = 'assets/service-icons/blue/REPAIR_MECHANIC-service.png';
        this.onInputChange();
        break;
      case 'ser4':  
        this.fastService= 'assets/service-icons/white/FAST-service-white.png';
        this.serviceName='Fast Service';
        this.serviceNameInApiRespense='Service Rapide';
        this.serviceIcon = 'assets/service-icons/blue/FAST-service.png';
        this.onInputChange();
        break;
      case 'ser5':  
        this.multipleServices= 'assets/service-icons/white/MULTIPLE_SERVICES-service-white.png';
        this.serviceName='Multiple services';
        this.serviceNameInApiRespense='Services Multiples';
        this.serviceIcon = 'assets/service-icons/blue/MULTIPLE_SERVICES-service.png';
        this.onInputChange();
        break;
      case 'ser6':  
        this.bodywork= 'assets/service-icons/white/REPAIR_SHEET_METAL-service-white.png';
        this.serviceName='Bodywork';
        this.serviceNameInApiRespense='Service Réparation Carrosserie';
        this.serviceIcon = 'assets/service-icons/blue/REPAIR_SHEET_METAL-service.png';
        this.onInputChange();
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



  //mileage methodes
  restrictToNumbers(event: KeyboardEvent) {
    const charCode = event.charCode || event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }

  formatMileage(event: Event, model: keyof this) {
    let value = (event.target as HTMLInputElement).value.replace(/[^0-9]/g, '');
    if (value) {
      value = parseInt(value).toLocaleString('en-US');
      (event.target as HTMLInputElement).value = value;
      (this as any)[model] = value; // dynamically assign to the property
    }
  }

  
  services: any[] = [];
  navigateToAgency(): void{
    //calling the api
    this.serviceAPI.getAbstractServices().subscribe(response => {
      
      
      this.services = response;
      console.log('services:', this.services);
      const selectedService = this.services.find(
        (service) => service.name === this.serviceNameInApiRespense
      );


      this.bookingLogs.selectedServiceId = selectedService.id ;
      this.bookingLogs.selectedVehicleId=this.selectedVehicleId;
      this.bookingLogs.selectedVehiclesRegistration = this.vehiclesList.find(
        (car) => car.id === this.selectedVehicleId
      ).registrationNumber;
      this.bookingLogs.serviceName = this.serviceName;
      this.bookingLogs.serviceIcon = this.serviceIcon;
      this.bookingLogs.mileage = this.mileage;
      this.bookingLogs.description = this.description;
      this.bookingLogs.isBrokenDown = this.isBrokenDown;
      if(this.serviceName=== 'Fast Service'){
        if(this.interviewType == 'other'){
          this.bookingLogs.Select_type_interview = this.interviewTypeOther;
        }
        else{
          this.bookingLogs.Select_type_interview = this.interviewType;

        }
        this.bookingLogs.mileage = null;
        this.bookingLogs.description = null;
      }
      else{
        this.bookingLogs.Select_type_interview = null;
      }
      if(this.serviceName=== 'Multiple services'){
        this.bookingLogs.Select_services = this.interviewType;
      }
      else{
        this.bookingLogs.Select_services = null;
      }
      if(this.serviceName==='Mechanical Repair Service'||this.serviceName==='Electrical Repair Service'){
        this.bookingLogs.quotation_number = this.quotation_number;
      }
      else{
        this.bookingLogs.quotation_number = null;
      }

      

      this.router.navigate(['/slide/appointments/agency']);
    });

  }
 
  isDisabled = true;
  onInputChange() {
    if(this.selectedVehicleId){
      this.isDisabled = this.checkIfDisabled();
    }
  }

  checkIfDisabled():boolean{
    switch(this.serviceName){
      case 'Diagnostic service':
        if(this.mileage && this.description){
          return false
        }
        break;
      case 'Electrical Repair Service':
        if(this.mileage ){
          return false
        }
        break;
      case 'Mechanical Repair Service':
        if(this.mileage ){
          return false
        }
        break;
      case 'Fast Service':
        if(this.interviewType ){
          return false
        }
        break;
      case 'Multiple services':
        if(this.mileage ){
          return false
        }
        break;
      case 'Bodywork':
        if(this.mileage && this.description){
          return false
        }
        break;
    }


    return true;
  }

  selectedFile: File | null = null;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      console.log('Selected file:', this.selectedFile.name);
      this.bookingLogs.attatchment = this.selectedFile;
      // TODO: You can upload it or show preview here
    }
  }

  isDragging = false;

  onDragOver(event: DragEvent): void {
    event.preventDefault(); // Required to allow dropping
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = false;

    if (event.dataTransfer?.files.length) {
      this.selectedFile = event.dataTransfer.files[0];
      console.log('Dropped file:', this.selectedFile);
      this.bookingLogs.attatchment = this.selectedFile;
    }
  }

  //icon
  faImage = faImage;
  faCircleCheck = faCircleCheck;
  faChevronRight = faChevronRight;
}
