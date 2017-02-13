import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { HttpClient } from '../http-client.service';
import { ProductsService } from './products.service';
import { ProductsHomeComponent } from './products-home/products-home.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, BrowserModule, RouterModule
  ],
  declarations: [ProductAddComponent, ProductsListComponent, ProductsHomeComponent],
  providers: [HttpClient, ProductsService],
  exports: [ProductAddComponent, ProductsListComponent, ProductsHomeComponent]
})
export class ProductsModule {
  static forRoot() {
    return { ngModule: ProductsModule, providers: [HttpClient] };
  };
}
