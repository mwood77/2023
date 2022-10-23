import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: '', component: LandingComponent, canActivate: [AuthGuard], canLoad:[AuthGuard], pathMatch: 'full' },
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
