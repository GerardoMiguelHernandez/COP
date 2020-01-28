import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hotel1Page } from './hotel1.page';

const routes: Routes = [
  {
    path: '',
    component: Hotel1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Hotel1PageRoutingModule {}
