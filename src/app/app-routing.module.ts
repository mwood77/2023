import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { DressCodeComponent } from './dress-code/dress-code.component';
import { InvitiationComponent } from './invitiation/invitiation.component';
import { LocationTimeComponent } from './location-time/location-time.component';
import { LoginComponent } from './login/login.component';
import { RegistryComponent } from './registry/registry.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'location', component: LocationTimeComponent, canActivate: [AuthGuard], canLoad:[AuthGuard], pathMatch: 'full' },
  { path: 'accommodation', component: AccomodationComponent, canActivate: [AuthGuard], canLoad:[AuthGuard], pathMatch: 'full' },
  { path: 'replacement-invitation', component: InvitiationComponent, canActivate: [AuthGuard], canLoad:[AuthGuard], pathMatch: 'full' },
  { path: 'registry', component: RegistryComponent, canActivate: [AuthGuard], canLoad:[AuthGuard], pathMatch: 'full' },
  { path: 'dress-code', component: DressCodeComponent, canActivate: [AuthGuard], canLoad:[AuthGuard], pathMatch: 'full' },
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
