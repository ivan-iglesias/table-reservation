import { Injectable } from '@angular/core';

import { Restaurant, restaurants } from './restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  items: Restaurant[] = [];

  constructor() {
    this.items = restaurants;
  }

  getRestaurants() {
    return this.items;
  }

  find(restaurantId: number) {
    return this.items.find(item => item.id === restaurantId);
  }
}
