import { CartItemModel } from './../restaurants-detail/shopping-cart/cart-itemMode';
import { RadioOptionModel } from './../shared/radio/radio-option-Model';
import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { Order, OrderItem } from './order.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentsOption: RadioOptionModel[] = [
    { label: 'Dinheiro', value: 'DIN' },
    { label: 'Cartão de Débito', value: 'DEB' },
    { label: 'Cartão Refeição', value: 'REF' }
  ]

  delivery: number = 8;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  cartItems(): CartItemModel[] {
    return this.orderService.cartItems();
  }

  increaseQty(item: CartItemModel) {
    return this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItemModel) {
    return this.orderService.decreaseQty(item);
  }

  remove(item: CartItemModel) {
    return this.orderService.remove(item);
  }

  itemsValue(): number {
    return this.orderService.itemsValue();
  }

  checkOrder(order: Order) {
    order.orderItem = this.cartItems()
      .map((item: CartItemModel) => new OrderItem(item.quantity, item.menuItem.id));
      this.orderService.checkOrder(order)
      .subscribe((orderId) => {
        console.log(`Compra concluída: ${orderId}`);
        this.orderService.clear();
      })
    console.log(order);
  }
}
