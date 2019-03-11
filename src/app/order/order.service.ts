import { LoginService } from './../security/login/login.service';
import { MEAT_API } from './../app.api';
import { Observable } from 'rxjs/Observable';
import { CartItemModel } from 'app/restaurants-detail/shopping-cart/cart-itemMode';
import { ShoppingCartService } from './../restaurants-detail/shopping-cart/shopping-cart.service';
import { Injectable } from "@angular/core";
import { Order, OrderItem } from './order.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartService,
        private http: HttpClient,
        private loginService: LoginService) {
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
        debugger;
        let headers = new HttpHeaders();
        if (this.loginService.isLoggegIn()) {
            headers = headers.set('Authorization', ` Bearer ${this.loginService.user.accessToken}`)
        }
        return this.http.post<Order>(`${MEAT_API}/orders`, order, { headers: headers })
            .map(order => order.id);
    }

    clear() {
        this.cartService.clear();
    }
}
