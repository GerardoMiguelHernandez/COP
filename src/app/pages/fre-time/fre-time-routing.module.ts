import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FreTimePage } from './fre-time.page';

const routes: Routes = [
  {
    path: '',
    component: FreTimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FreTimePageRoutingModule {}
