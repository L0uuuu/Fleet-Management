import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import {Slide} from './pages/slide/slide';
import { AccountSetting } from './pages/account-setting/account-setting';
import { Appointments } from './pages/appointments/appointments';

import { Service } from './pages/appoint/service/service';
import { Agency } from './pages/appoint/agency/agency';
import { AppointmentDate } from './pages/appoint/appointment-date/appointment-date';
import { Summary } from './pages/appoint/summary/summary';

const routes: Routes = [     
    
  { path: 'dashboard', component: Dashboard },
  { path: 'slide', component: Slide },
  { path: 'account-setting', component: AccountSetting },
  { path: 'appointments', component: Appointments,
    children: [
      { path: 'service', component: Service },
      { path: 'agency', component:  Agency },
      { path: 'date', component:  AppointmentDate },
      { path: 'summary', component: Summary },
      { path: '', redirectTo: 'agency', pathMatch: 'full' }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
