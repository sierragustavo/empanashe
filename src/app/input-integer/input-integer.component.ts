import { Component, Input, OnInit,EventEmitter,Output } from '@angular/core';
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
  quantityInput!: number;

  @Input()
  stock!: number;

  @Input()
  special!: boolean;

  @Output()
  quantityInputChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  stockChange: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {}

  upquantityInput() {
    if (this.stock > 0) {
      this.quantityInput++;
      this.stock--;
    }
    this.stockChange.emit(this.stock);
    this.quantityInputChange.emit(this.quantityInput);
  }

  decreasequantityInput() {
    if (this.quantityInput > 0) {
      this.quantityInput--;
      this.stock++;
    }
    this.stockChange.emit(this.stock);
    this.quantityInputChange.emit(this.quantityInput);
  }

  onChangeQuantityInput(): void {
    if (this.quantityInput > 0) {
      if (this.stock - this.quantityInput >= 0) {
        this.stock = this.stock - this.quantityInput;
        this.quantityInputChange.emit(this.quantityInput);
      } else alert('Stock maximo: ' + this.stock);
    } else alert('Cargar mas de 0');
  }

  onInputInQuantity(event: KeyboardEvent) {
    if (event.key == 'Enter') this.onChangeQuantityInput();
  }
}
