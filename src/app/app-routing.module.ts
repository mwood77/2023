import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { AppComponent } from './app.component';
import { InvitiationComponent } from './invitiation/invitiation.component';
import { LandingComponent } from './landing/landing.component';
import { LocationTimeComponent } from './location-time/location-time.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'location', component: LocationTimeComponent, canActivate: [AuthGuard], canLoad:[AuthGuard], pathMatch: 'full' },
  { path: 'accomodation', component: AccomodationComponent, canActivate: [AuthGuard], canLoad:[AuthGuard], pathMatch: 'full' },
  { path: 'replacement-invitation', component: InvitiationComponent, canActivate: [AuthGuard], canLoad:[AuthGuard], pathMatch: 'full' },
  { path: '', redirectTo: '/location', pathMatch: 'full' },
	{
		path: '**',
		redirectTo: ''
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
