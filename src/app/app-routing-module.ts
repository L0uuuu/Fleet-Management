import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import {Slide} from './pages/slide/slide';
import { AccountSetting } from './pages/account-setting/account-setting';

const routes: Routes = [
  //{ path: '', component: Slide },          
  { path: 'dashboard', component: Dashboard },
  { path: 'slide', component: Slide },
  { path: 'account-setting', component: AccountSetting },
  {path: '', redirectTo: '/account-setting', pathMatch: 'full' }, // Redirect to slide on empty path
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
