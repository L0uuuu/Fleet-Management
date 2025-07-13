import { Component,AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import intlTelInput from 'intl-tel-input';

//icon importation
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-account-setting',
  standalone: false,
  templateUrl: './account-setting.html',
  styleUrl: './account-setting.scss'
})
export class AccountSetting {
  private firstName: string = 'John';
  private lastName: string = 'Doe';
  private email: string = 'louaiboubaker@gmail.com';
  private phone: string = '+216 22 222 222';
  private businessName: string = 'My Business';
  private location: string = 'XXXX';
  private country: string = 'Tunisia';
  private city: string = 'XXXXX';

  // password
  currentPassword: string = '';
  newPassword: string = ''; 
  confirmPassword: string = '';

  changePassword(): void {
    if (this.newPassword !== this.confirmPassword) {
      alert('New password and confirm password do not match.');
      return;
    }
    // Logic to change the password goes here
    console.log('Password changed successfully');
  }

  //getters
  get getFirstName(): string {
    return this.firstName;
  }
  get getLastName(): string {
    return this.lastName;
  }
  get getEmail(): string {
    return this.email;
  }
  get getPhone(): string {
    return this.phone;
  }
  get getBusinessName(): string {
    return this.businessName;
  }
  get getLocation(): string {
    return this.location;
  }
  get getCountry(): string {
    return this.country;
  }
  get getCity(): string {
    return this.city;
  }

  ngAfterViewInit(): void {
    const input = document.querySelector('#phone') as HTMLInputElement;

    intlTelInput(input, {
      initialCountry: 'tn', // Tunisia
      separateDialCode: true,
    });
  }


  //icons
  faUserCircle = faUserCircle;


 @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  isDragOver = false;
  fileName: string = 'or drop file here';

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
    
    if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(event.dataTransfer.files[0]);
      this.fileInput.nativeElement.files = dataTransfer.files;
      
      const file = event.dataTransfer.files[0];
      this.fileName = file.name;
      
      const changeEvent = new Event('change');
      this.fileInput.nativeElement.dispatchEvent(changeEvent);
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.fileName = file.name;
      console.log('Selected file:', file.name);
      // Handle file upload here
    }
  }
}
