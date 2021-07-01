import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './products-list/product';
import { ProductsListComponent } from './products-list/products-list.component';

@Injectable({
  providedIn: 'root',
})
export class ProductCartService {
  private _cartList: Product[] = [];
  cartList: BehaviorSubject<Product[]> = new BehaviorSubject(this._cartList);
  constructor() {}

  addToCart(products: Product) {
    let item: Product | undefined = this._cartList.find((v1) => v1.name == products.name);
    if (!item) {
      this._cartList.push({ ...products });
    } else {
      item.quantityInput += products.quantityInput;
    }
    this.cartList.next(this._cartList);
  }
}
