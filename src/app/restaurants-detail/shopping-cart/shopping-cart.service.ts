import { MenuItem } from './../menu-item/menu-item.model';
import { CartItemModel } from "./cart-itemMode";
import { Injectable } from '@angular/core';
import { NotificationService } from 'app/shared/messages/notification.service';

@Injectable()
export class ShoppingCartService {

    constructor(private notificationService: NotificationService) {

    }

    items: CartItemModel[] = [];

    clear() {
        this.items = [];
    }

    total(): number {
        return this.items
            .map(item => item.value())
            .reduce((prev, value) => prev + value, 0);
    }

    addItem(item: MenuItem) {
        let foudItem = this.items.find((mItem) => mItem.menuItem.id === item.id);
        if (foudItem) {
            this.increaseQty(foudItem);
        } else {
            this.items.push(new CartItemModel(item));
        }
        this.notificationService.notify(`Você adicionou o item ${item.name}.`);
    }

    increaseQty(item: CartItemModel) {
        item.quantity = item.quantity + 1;
    }

    decreaseQty(item: CartItemModel) {
        item.quantity = item.quantity - 1;
        if (item.quantity === 0) {
            this.removeItem(item);
        }
    }

    removeItem(item: CartItemModel) {
        this.items.splice(this.items.indexOf(item), 1);
        this.notificationService.notify(`Você removeu o item ${item.menuItem.name}.`);
    }
}