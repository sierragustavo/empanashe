import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from './product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [
    {
      name: 'Jamon y queso',
      type: 'Empanada',
      price: 70,
      stock: 50,
      altstock: 0,
      image: '../assets/img/empanada.png',
      special: false,
      quantityInput: 0,
    },
    {
      name: 'Carne dulce',
      type: 'Empanada',
      price: 70,
      stock: -10,
      altstock: 0,
      image: '../assets/img/empanada.png',
      special: true,
      quantityInput: 0,
    },
    {
      name: 'Pollo',
      type: 'Tarta',
      price: 430,
      stock: 5,
      altstock: 0,
      image: '../assets/img/tarta.png',
      special: false,
      quantityInput: 0,
    },
  ];

  constructor() {
    this.products.forEach((product) => {
      product.altstock = product.stock;
      console.log('recorriendo');
    });
  }

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

  onChangequantityInput(product: Product): void {
    if (product.quantityInput > 0) {
      if (product.stock - product.quantityInput >= 0) {
        product.altstock = product.stock - product.quantityInput;
      } else alert('te pasaste');
    } else alert('mas de 0');
  }

  onInputInQuantity(event: KeyboardEvent, product: Product) {
    if (event.key == 'Enter') this.onChangequantityInput(product);
  }

  ngOnInit(): void {}
}
