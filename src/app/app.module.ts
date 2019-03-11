import { SharedModule } from './shared/shared.module';
import { ROUTES } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantsDetailComponent } from './restaurants-detail/restaurants-detail.component';
import { MenuComponent } from './restaurants-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurants-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurants-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurants-detail/reviews/reviews.component';
import { OrderSumaryComponent } from './order-sumary/order-sumary.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NotFoundComponent } from './not-found/not-found.component'
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { LoginComponent } from './security/login/login.component';
import { UserDetailComponent } from './header/user-detail/user-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantsDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderSumaryComponent,
    NotFoundComponent,
    LoginComponent,
    UserDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
  ],
  providers: [ {provide: LocationStrategy, useClass: HashLocationStrategy},
    { provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
