import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '../http-client.service';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService {
    siteRootUrl: string = 'http://bogdankolomiec-001-site2.dtempurl.com';

    constructor(private http: HttpClient) { }

    all(): Observable<Product[]> {
        return this.http.get('api/products')
            .map((res) => res.json());
    }

    get(id: number): Observable<Product> {
        return this.http.get(`api/products/${id}`)
            .map(res => res.json());
    }

    add(product: Product): Observable<boolean> {
        return this.http.post('api/products', JSON.stringify(product))
            .map(res => res.json());
    }

}