import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './core/pages/login/login.component';
import { RegisterComponent } from './core/pages/register/register.component';
import { HomeComponent } from './core/pages/home/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterRecordComponent } from './core/components/register-record/register-record.component';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { LoggedUserService } from './shared/services/logged-user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    RegisterRecordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [LoggedUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
