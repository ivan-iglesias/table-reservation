import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';

const routes: Routes = [
    {
        path: '',
        component: RestaurantListComponent
    },
    {
        path: 'restaurants/:restaurantId',
        component: RestaurantDetailComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
