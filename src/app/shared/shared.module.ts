import { LeaveOrderGuard } from './../order/leave-order.guard';
import { LoggedinGuards } from './../security/loggedin.guards';
import { LoginService } from './../security/login/login.service';
import { NotificationService } from './messages/notification.service';
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
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'app/security/auth.interceptor';



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
            providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
                RestaurantService,
                ShoppingCartService,
                OrderService,
                NotificationService,
                LoginService,
                LoggedinGuards,
                LeaveOrderGuard]
        }
    }
}
