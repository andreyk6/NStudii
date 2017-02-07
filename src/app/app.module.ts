import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { CarouselModule } from 'ng2-bootstrap/carousel';

import { MembershipService } from './login/membership.service';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    AlertModule.forRoot(),
    CarouselModule.forRoot(),
    LoginModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MembershipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
