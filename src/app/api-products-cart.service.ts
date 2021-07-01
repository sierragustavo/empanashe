import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './products-list/product';

const URL = 'https://60dd11ffc2b6280017febdb1.mockapi.io/api/ProductList'; //para traer un json

@Injectable({
  providedIn: 'root',
})

export class ApiProductsCartService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(URL);
  }
}
