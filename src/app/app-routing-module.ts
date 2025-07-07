import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './pages/dashboard/dashboard';

const routes: Routes = [
  { path: '', component: Login },          
  { path: 'dashboard', component: Dashboard }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
