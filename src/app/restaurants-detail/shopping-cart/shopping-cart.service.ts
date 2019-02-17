import { MenuItem } from './../menu-item/menu-item.model';
import { CartItemModel } from "./cart-itemMode";

export class ShoppingCartService {

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
    }
}