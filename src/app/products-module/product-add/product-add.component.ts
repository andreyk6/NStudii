import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product: Product = new Product();
  message: string;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
  }

  add() {
    this.message = '';
    this.productsService.add(this.product)
      .subscribe(
      (res) => {
        if (res) {
          this.message = `Product "${this.product.name}" has beeb added`;
          this.product = new Product();
        } else {
          this.message = 'Error';
        }
      },
      (err) => { this.message = `Error: ${err}`; }
      );
  }

}
