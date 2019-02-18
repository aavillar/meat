import { MEAT_API } from './../app.api';
import { Observable } from 'rxjs/Observable';
import { CartItemModel } from 'app/restaurants-detail/shopping-cart/cart-itemMode';
import { ShoppingCartService } from './../restaurants-detail/shopping-cart/shopping-cart.service';
import { Injectable } from "@angular/core";
import { Order, OrderItem } from './order.model';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartService, private http: Http) {
    }

    cartItems(): CartItemModel[] {
        return this.cartService.items;
    }

    increaseQty(item: CartItemModel) {
        this.cartService.increaseQty(item);
    }

    decreaseQty(item: CartItemModel) {
        this.cartService.decreaseQty(item);
    }

    remove(item: CartItemModel) {
        this.cartService.removeItem(item);
    }

    itemsValue(): number {
        return this.cartService.total();
    }

    checkOrder(order: Order): Observable<string> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(`${MEAT_API}/orders`, JSON.stringify(order),
            new RequestOptions({ headers: headers }))
            .map(response => response.json());
    }

    clear() {
        this.cartService.clear();
    }
}