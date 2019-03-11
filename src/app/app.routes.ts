import { LoginComponent } from './security/login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReviewsComponent } from './restaurants-detail/reviews/reviews.component';
import { MenuComponent } from './restaurants-detail/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { Routes } from "@angular/router";
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantsDetailComponent } from './restaurants-detail/restaurants-detail.component';

import { OrderSumaryComponent } from './order-sumary/order-sumary.component';
import { LoggedinGuards } from './security/loggedin.guards';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login/:to', component: LoginComponent},
    { path: 'login', component: LoginComponent},
    { path: 'about', loadChildren: './about/about.module#AboutModule' },
    {
        path: 'restaurants/:id', component: RestaurantsDetailComponent,
        children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            { path: 'menu', component: MenuComponent },
            { path: 'reviews', component: ReviewsComponent }
        ]
    },
    { path: 'order', loadChildren: './order/order.module#OrderModule',
        canLoad: [LoggedinGuards], canActivate: [LoggedinGuards] },
    { path: 'order-sumary', component: OrderSumaryComponent },
    { path: 'restaurantes', component: RestaurantsComponent },
    { path: '**', component: NotFoundComponent }

]