import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItemModel } from 'app/restaurants-detail/shopping-cart/cart-itemMode';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {

  constructor() { }

  @Input() items: CartItemModel[];
  @Output() increaseQtd = new EventEmitter<CartItemModel>();
  @Output() decreaseQtd = new EventEmitter<CartItemModel>();
  @Output() remove = new EventEmitter<CartItemModel>();

  ngOnInit() {
  }

  emitIncreaseQtd(item: CartItemModel) {
    this.increaseQtd.emit(item);
  }

  emitDecreaseQtd(item: CartItemModel) {
    this.decreaseQtd.emit(item);
  }

  emitRemove(item: CartItemModel) {
    this.remove.emit(item);
  }
}
