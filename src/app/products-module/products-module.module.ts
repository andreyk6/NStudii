import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { HttpClient } from '../http-client.service';

@NgModule({
  imports: [
    CommonModule, FormsModule, BrowserModule
  ],
  declarations: [ProductComponent, ProductsListComponent],
  providers: [HttpClient],
  exports: [ProductComponent, ProductsListComponent]
})
export class ProductsModule {
  static forRoot() {
    return { ngModule: ProductsModule, providers: [HttpClient] };
  };
}
