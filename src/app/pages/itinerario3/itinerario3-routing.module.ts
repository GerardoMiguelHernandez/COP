import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Itinerario3Page } from './itinerario3.page';

const routes: Routes = [
  {
    path: '',
    component: Itinerario3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Itinerario3PageRoutingModule {}
