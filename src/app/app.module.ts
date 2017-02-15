import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClient } from './http-client.service';

import { TranslateModule } from 'ng2-translate';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { MembershipService } from './login/membership.service';
import { TranslationBoxComponentComponent } from './translation-box-component/translation-box-component.component';
import { UserBoxComponentComponent } from './login/user-box-component/user-box-component.component';

import { ProductsModule } from './products-module/products-module.module';

@NgModule({
  declarations: [
    AppComponent,
    TranslationBoxComponentComponent
  ],
  imports: [
    AppRoutingModule,
    LoginModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    TranslateModule.forRoot(),
    NgbModule.forRoot(),
    ProductsModule.forRoot(),
  ],
  providers: [MembershipService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
