import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [{
  path: 'login',
  component : LoginComponent
 },
 {
  path: '',
  component : LandingpageComponent
 },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
