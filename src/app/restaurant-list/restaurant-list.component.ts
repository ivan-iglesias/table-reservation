import { Component, OnInit } from '@angular/core';

import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {

  restaurants = this.restaurantService.getRestaurants();

  constructor(
    private restaurantService: RestaurantService,
  ) {}

  ngOnInit(): void {
  }
}
