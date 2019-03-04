import { RestaurantService } from './restaurant.service';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { trigger, state, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  animations: [
    trigger('toggleSerach', [
      state('hidden', style({
        opacity: 0,
        "max-height": "0px"
      })),
      state('visible', style({
        opacity: 1,
        "max-height": "70px",
        "margin-top": "20px"
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class RestaurantsComponent implements OnInit {

  searchBarToggle = 'hidden'
  constructor(private restaurantService: RestaurantService) {

  }
  restaurants: Restaurant[];
  ngOnInit() {
    this.restaurantService.restaurants()
      .subscribe(x => {
        this.restaurants = x;
      });
  }

  touggleSearch() {
    this.searchBarToggle = this.searchBarToggle === 'hidden' ? 'visible' : 'hidden';
  }
}
