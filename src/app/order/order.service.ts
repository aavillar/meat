import { CartItemModel } from 'app/restaurants-detail/shopping-cart/cart-itemMode';
import { ShoppingCartService } from './../restaurants-detail/shopping-cart/shopping-cart.service';
import { Injectable } from "@angular/core";

@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartService) {
    }

    cartItems(): CartItemModel[] {
        return this.cartService.items;
    }

    increaseQty(item: CartItemModel){
        this.cartService.increaseQty(item);
    }

    decreaseQty(item: CartItemModel){
        this.cartService.decreaseQty(item);
    }

    remove(item: CartItemModel){
        this.cartService.removeItem(item);
    }

}