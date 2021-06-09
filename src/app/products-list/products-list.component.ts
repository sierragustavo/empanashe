import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products = [
    {
      name: 'Jamon y queso',
      type: 'Empanada',
      price: 70,
      stock: 50,
      image: '../assets/img/empanada.png',
    },
    {
      name: 'Pollo',
      type: 'Tarta',
      price: 430,
      stock: 5,
      image: '../assets/img/tarta.png',
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
