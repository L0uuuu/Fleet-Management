import { Component,AfterViewInit } from '@angular/core';
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

}
