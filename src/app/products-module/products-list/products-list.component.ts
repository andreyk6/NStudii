import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { HttpClient } from '../../http-client.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  message: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('api/Products').subscribe(
      (res) => { this.products = res.json(); },
      (err) => { }
    );
  }

}
