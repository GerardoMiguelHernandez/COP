import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelPage } from './hotel.page';

const routes: Routes = [
  {
    path: '',
    component: HotelPage,
    children: [
      {
        path: 'hotel1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../hotel1/hotel1.module').then(m => m.Hotel1PageModule)
          }
        ]
      },
      {
        path: 'hotel2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../hotel2/hotel2.module').then(m => m.Hotel2PageModule)
          }
        ]
      },
      {
        path: 'hotel3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../hotel3/hotel3.module').then(m => m.Hotel3PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/hotel/hotel1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/hotel/hotel1',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelPageRoutingModule {}
