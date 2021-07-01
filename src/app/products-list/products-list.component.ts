import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { ApiProductsCartService } from '../api-products-cart.service';
import { Product } from './product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productsCartService: ProductCartService,
    private apiCartService: ApiProductsCartService
  ) {

  }

  ngOnInit(): void {
    this.apiCartService.getAll().subscribe(products => this.products = products);
  }

  addToCart(products:Product):void{

    if(products.quantityInput>0){
      this.productsCartService.addToCart(products);
      products.stock -= products.quantityInput;
      products.quantityInput=0;
    }
  }
}

/*
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
      special: false,
      quantityInput: 0,
    },
    {
      name: 'Pollo',
      type: 'Tarta',
      price: 430,
      stock: 5,
      altstock: 0,
      image: '../assets/img/tarta.png',
      special: true,
      quantityInput: 0,
    },
  */

        /*
    this.products.forEach((product) => {
      product.altstock = product.stock;
    })*/