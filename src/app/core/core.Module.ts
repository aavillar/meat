import { OrderService } from './../order/order.service';
import { ShoppingCartService } from './../restaurants-detail/shopping-cart/shopping-cart.service';
import { NgModule } from '@angular/core';
import { RestaurantService } from 'app/restaurants/restaurant.service';


@NgModule({
    providers:[RestaurantService, ShoppingCartService, OrderService]
})
export class CoreModule {

}