import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';

import { PdfViewerModule } from 'ng2-pdf-viewer';

/**
 * Angular Material
 */
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatIconModule } from '@angular/material/icon';
import { LocationTimeComponent } from './location-time/location-time.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { InvitiationComponent } from './invitiation/invitiation.component';
import { MatSidenavModule } from '@angular/material/sidenav'
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { RegistryComponent } from './registry/registry.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    FooterComponent,
    LocationTimeComponent,
    AccomodationComponent,
    InvitiationComponent,
    RegistryComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    PdfViewerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Material
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatToolbarModule,
    MatGridListModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatMenuModule
  ],
  providers: [ AuthService, AuthGuard,],
  bootstrap: [AppComponent]
})
export class AppModule { }
