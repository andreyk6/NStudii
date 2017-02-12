import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { RegistrationComponent } from './login/registration/registration.component';
import { AppComponent } from './app.component';
import { ProductsHomeComponent } from './products-module/products-home/products-home.component';
import { ProductsListComponent } from './products-module/products-list/products-list.component';
import { ProductAddComponent } from './products-module/product-add/product-add.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  {
    path: 'products', component: ProductsHomeComponent,
    children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      { path: 'all', component: ProductsListComponent },
      { path: 'add', component: ProductAddComponent }
    ]
  },
  { path: 'home', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent, RegistrationComponent, AppComponent, ProductsListComponent];
