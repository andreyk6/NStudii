import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { RegistrationComponent } from './login/registration/registration.component';
import { RegistrationAdminComponent } from './login/registration-admin/registration-admin.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'registration/admin', component: RegistrationAdminComponent },
  { path: 'home', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent, RegistrationComponent, RegistrationAdminComponent, AppComponent];
