import { Component } from '@angular/core';

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
  //icons
  faUserCircle = faUserCircle;

}
