import { Component,AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import intlTelInput from 'intl-tel-input';
import { AuthService } from '../../services/auth-service';
//icon importation
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-account-setting',
  standalone: false,
  templateUrl: './account-setting.html',
  styleUrl: './account-setting.scss'
})
export class AccountSetting implements OnInit {

  constructor( private authService:AuthService) {}
  private firstName: string = 'John';
  private lastName: string = 'Doe';
  private email: string = 'louaiboubaker@gmail.com';
  private phone: string = '+216 00 000 000';
  private businessName: string = 'My Business';
  private location: string = 'XXXX';
  private country: string = 'Tunisia';
  private city: string = 'XXXXX';

  
  ngOnInit(): void {
    const user = this.authService.getUser();
    if (user) {
      this.firstName = user.firstName || this.firstName;
      this.lastName = user.lastName || this.lastName;
      this.email = user.login  || this.email;
      this.phone = user.phone || this.phone;
      this.businessName = user.businessName || this.businessName;
      this.location = user.location || this.location;
      this.country = user.country || this.country;
      this.city = user.city || this.city;
    }
  }
  // password
  currentPassword: string = '';
  newPassword: string = ''; 
  confirmPassword: string = '';
  changePassword(): void {
    if (!this.currentPassword || !this.newPassword || !this.confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }
    console.log('Password:', this.authService.getPassword());
    if (this.currentPassword !== this.authService.getPassword()) {
      alert('Current password is incorrect.');
      return;
    }
    
    if (this.newPassword !== this.confirmPassword) {
      alert('New password and confirm password do not match.');
      return;
    }

    this.authService.changePassword(this.email, this.newPassword).subscribe({
      next: (res) => {
        console.log('Password changed successfully:', res);
        localStorage.setItem('password', this.newPassword);
        alert('Password updated successfully!');
        this.closePopup();
      },
      error: (err) => {
        console.error('Error changing password:', err);
        alert('Failed to update password.');
      }
    });
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


  showPopup_info: boolean = false;
  showPopup_psw: boolean = false;
  showPopup_logo: boolean = false;

  openPopup(pop: string) {
    switch(pop){
      case('pop1'): this.showPopup_info = true;break;
      case('pop2'): this.showPopup_psw = true;break;
      case('pop3'): this.showPopup_logo = true;break;
    }



    setTimeout(() => {
      const input = document.querySelector('#phone') as HTMLInputElement;

        intlTelInput(input, {
          initialCountry: 'tn', // Tunisia
          separateDialCode: true,
        });
      
    },0);
  }

  closePopup() {
    this.showPopup_info = false;
    this.showPopup_psw = false;
    this.showPopup_logo = false;
  }


}
