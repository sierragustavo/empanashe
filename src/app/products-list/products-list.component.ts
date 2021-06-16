import { Component, OnInit } from '@angular/core';
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
      image: '../assets/img/empanada.png',
      special: false,
    },
    {
      name: 'Carne dulce',
      type: 'Empanada',
      price: 70,
      stock: -10,
      image: '../assets/img/empanada.png',
      special: true,
    },
    {
      name: 'Pollo',
      type: 'Tarta',
      price: 430,
      stock: 5,
      image: '../assets/img/tarta.png',
      special: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
