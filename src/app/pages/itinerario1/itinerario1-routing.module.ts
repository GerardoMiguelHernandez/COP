import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Itinerario1Page } from './itinerario1.page';

const routes: Routes = [
  {
    path: '',
    component: Itinerario1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Itinerario1PageRoutingModule {}
