import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth-guard';

import { Login } from './login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import {Slide} from './pages/slide/slide';
import { AccountSetting } from './pages/account-setting/account-setting';
import { Appointments } from './pages/appointments/appointments';
import { Vehicles } from './pages/vehicles/vehicles';

import { Service } from './pages/appoint/service/service';
import { Agency } from './pages/appoint/agency/agency';
import { AppointmentDate } from './pages/appoint/appointment-date/appointment-date';
import { Summary } from './pages/appoint/summary/summary';

const routes: Routes = [     
  { path: '', redirectTo: '/slide', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'slide', component: Slide , canActivate: [AuthGuard] ,
    children: [
      { path: 'account-setting', component: AccountSetting },
      { path: 'dashboard', component: Dashboard },
      { path: 'vehicles', component: Vehicles },
      { path: 'appointments', component: Appointments,
        children: [
          { path: 'service', component: Service},
          { path: 'agency', component:  Agency },
          { path: 'date', component:  AppointmentDate },
          { path: 'summary', component: Summary },
          { path: '', redirectTo: 'service', pathMatch: 'full' }
    ]
  }
    ]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
