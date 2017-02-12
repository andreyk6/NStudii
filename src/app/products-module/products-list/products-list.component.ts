import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  message: string;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.all()
      .subscribe(
      (res) => { this.products = res; },
      (err) => { }
      );
  }
}
