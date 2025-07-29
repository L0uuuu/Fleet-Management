import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/token-interceptor';

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
import { Vehicles } from './pages/vehicles/vehicles';
import { Map } from './pages/extra/map/map';


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
    Vehicles,
    Map,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule
    
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [App]
})
export class AppModule { }
