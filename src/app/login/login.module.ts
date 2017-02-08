import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MembershipService } from './membership.service';
import { UserCredentials } from './user-credentials';
import { } from './user-login-vm';
import { } from './user-registration-vm';

import { TranslateModule } from 'ng2-translate';

@NgModule({
  imports: [
    CommonModule, BrowserModule, FormsModule, HttpModule, TranslateModule
  ],
  declarations: [LoginComponent, RegistrationComponent],
  providers: [MembershipService],
  exports: [LoginComponent, RegistrationComponent]
})
export class LoginModule {
  static forRoot() {
    return { ngModule: LoginModule, providers: [MembershipService] };
  };

}
