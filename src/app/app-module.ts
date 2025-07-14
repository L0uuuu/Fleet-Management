import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Login } from './login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import {Slide} from './pages/slide/slide';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccountSetting } from './pages/account-setting/account-setting';
import { Appointments } from './pages/appointments/appointments';
import { Service } from './pages/appoint/service/service';
import { Agency } from './pages/appoint/agency/agency';
import { Summary } from './pages/appoint/summary/summary';
import { AppointmentDate } from './pages/appoint/appointment-date/appointment-date';

@NgModule({
  declarations: [
    App,
    Login,
    Dashboard,
    Slide,
    AccountSetting,
    Appointments,
    Summary,
    Service,
    Agency,
    AppointmentDate,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
