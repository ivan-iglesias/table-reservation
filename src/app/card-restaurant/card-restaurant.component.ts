import { Component, OnInit, Input } from '@angular/core';

import { Restaurant } from '../restaurant';

@Component({
  selector: 'card-restaurant',
  templateUrl: './card-restaurant.component.html',
  styleUrls: ['./card-restaurant.component.scss']
})
export class CardRestaurantComponent implements OnInit {

  @Input() restaurant: Restaurant | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
