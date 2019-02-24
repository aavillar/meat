import { SharedModule } from './../shared/shared.module';
import { OrderItemsComponent } from './order-items/order-items.component';
import { OrderComponent } from './order.component';
import { NgModule } from "@angular/core";
import { DiliveryCostsComponent } from './dilivery-costs/dilivery-costs.component';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
    { path: '', component: OrderComponent }
]

@NgModule({
    declarations: [
        OrderComponent,
        OrderItemsComponent,
        DiliveryCostsComponent
    ],
    imports: [SharedModule, RouterModule.forChild(ROUTES)]
})
export class OrderModule {

}