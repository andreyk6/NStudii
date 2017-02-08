import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TranslateModule } from 'ng2-translate';

import { AppComponent } from './app.component';

import { MembershipService } from './login/membership.service';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    LoginModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot()
  ],
  providers: [MembershipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
