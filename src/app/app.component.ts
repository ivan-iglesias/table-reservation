import { Component } from '@angular/core';

import { RestaurantService } from './restaurant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    restaurants = this.restaurantService.getRestaurants();

    constructor(
        private restaurantService: RestaurantService,
    ) {}
}
