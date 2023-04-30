/**
 * 
 * Modules - Components[]
 * Components - html, css, ts
 */

import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { OffHoursComponent } from './off-hours/off-hours.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { SearchComponent } from './search/search.component';
import { LogInGuard } from './guards/login.guard';
import { LogOutGuard } from './guards/logout.guard';

// import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

@NgModule({
  declarations: [
    AppComponent,
    LoginSignupComponent,
    ProfileComponent,
    OffHoursComponent,
    AppointmentComponent,
    SearchComponent,
  ], // All components of this module
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
    // NgxMaterialTimepickerModule,
    
  ],  
  providers: [LogInGuard, LogOutGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
