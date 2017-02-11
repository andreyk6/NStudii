import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { RegistrationComponent } from './login/registration/registration.component';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-module/products-list/products-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'products', component: ProductsListComponent },
  { path: 'home', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent, RegistrationComponent, AppComponent, ProductsListComponent];
