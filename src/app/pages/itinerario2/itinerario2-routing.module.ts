import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Itinerario2Page } from './itinerario2.page';

const routes: Routes = [
  {
    path: '',
    component: Itinerario2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Itinerario2PageRoutingModule {}
