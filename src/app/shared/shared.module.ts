import { OrderService } from './../order/order.service';
import { ShoppingCartService } from './../restaurants-detail/shopping-cart/shopping-cart.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { NgModule, ModuleWithProviders } from "@angular/core";
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';
import { CommonModule } from '@angular/common';
import { RestaurantService } from 'app/restaurants/restaurant.service';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';



@NgModule({
    declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        InputComponent,
        RadioComponent,
        RatingComponent,
        SnackbarComponent
    ]
})
export class SharedModule {
static forRoot(): ModuleWithProviders {
    return {
        ngModule: SharedModule,
        providers:[RestaurantService, ShoppingCartService, OrderService]
    }
}
}