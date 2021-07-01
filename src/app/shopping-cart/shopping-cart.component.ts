import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCartService } from '../product-cart.service';
import { Product } from '../products-list/product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  cartList$: Observable<Product[]>;

  constructor(private productCartService: ProductCartService) {
    this.cartList$ = this.productCartService.cartList.asObservable();
  }

  ngOnInit(): void {}
}
