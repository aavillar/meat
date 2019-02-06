import { RestaurantService } from './restaurant.service';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';


@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {


  constructor(private restaurantService: RestaurantService) {

  }
  restaurants: Restaurant[];
  ngOnInit() {
     this.restaurantService.restaurants()
     .subscribe(x => {
       this.restaurants = x;
     });
  }

}
