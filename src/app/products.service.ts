import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>('/assets/products.json');
  }
}
