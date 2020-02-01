import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItinerariosPage } from './itinerarios.page';

const routes: Routes = [
  {
    path: '',
    component: ItinerariosPage,
    children: [
      {
        path: 'itinerario1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../itinerario1/itinerario1.module').then(m => m.Itinerario1PageModule)
          }
        ]
      },
      {
        path: 'itinerario2',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('../itinerario2/itinerario2.module').then(m => m.Itinerario2PageModule)
          }
        ]
      },
      {
        path: 'itinerario3',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('../itinerario3/itinerario3.module').then(m => m.Itinerario3PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/itinerarios/itinerario1',
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
export class ItinerariosPageRoutingModule {}
