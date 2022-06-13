import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss']
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant | undefined;

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const restaurantId = Number(routeParams.get('restaurantId'));
    this.restaurant = this.restaurantService.find(restaurantId);
  }
}
