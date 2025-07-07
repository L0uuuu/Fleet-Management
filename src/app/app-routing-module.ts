import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import {Slide} from './pages/slide/slide';

const routes: Routes = [
  { path: '', component: Slide },          
  { path: 'dashboard', component: Dashboard },
  { path: 'slide', component: Slide }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
