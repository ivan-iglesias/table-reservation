import { Component, OnInit, Input } from '@angular/core';

import { Restaurant } from '../restaurant';

@Component({
  selector: 'restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss']
})
export class RestaurantCardComponent implements OnInit {

  @Input() restaurant: Restaurant | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
