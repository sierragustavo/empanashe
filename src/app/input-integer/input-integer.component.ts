import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../products-list/product';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss'],
})
export class InputIntegerComponent implements OnInit {
  constructor() {
    
  }

  @Input()
  product!: Product;

  ngOnInit(): void {}

  upquantityInput(product: Product) {
    if (product.altstock > 0) {
      product.quantityInput++;
      product.altstock--;
    }
  }

  decreasequantityInput(product: Product) {
    if (product.quantityInput > 0) {
      product.quantityInput--;
      product.altstock++;
    }
  }

  onChangeQuantityInput(product: Product): void {
    if (product.quantityInput > 0) {
      if (product.stock - product.quantityInput >= 0) {
        product.altstock = product.stock - product.quantityInput;
      } else alert('te pasaste');
    } else alert('mas de 0');
  }

  onInputInQuantity(event: KeyboardEvent, product: Product) {
    if (event.key == 'Enter') this.onChangeQuantityInput(product);
  }
}
