import { ReviewsComponent } from './restaurants-detail/reviews/reviews.component';
import { MenuComponent } from './restaurants-detail/menu/menu.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Routes } from "@angular/router";
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantsDetailComponent } from './restaurants-detail/restaurants-detail.component';
import { OrderComponent } from './order/order.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    {
        path: 'restaurants/:id', component: RestaurantsDetailComponent,
        children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            { path: 'menu', component: MenuComponent },
            { path: 'reviews', component: ReviewsComponent }
        ]
    },
    { path: 'order', component: OrderComponent },
    { path: 'restaurantes', component: RestaurantsComponent }

]