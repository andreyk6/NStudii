import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { TranslateModule } from 'ng2-translate';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MembershipService } from './login/membership.service';
import { LoginModule } from './login/login.module';
import { TranslationBoxComponentComponent } from './translation-box-component/translation-box-component.component';
import { UserBoxComponentComponent } from './user-box-component/user-box-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TranslationBoxComponentComponent,
    UserBoxComponentComponent,
  ],
  imports: [
    AppRoutingModule,
    LoginModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    TranslateModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [MembershipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
