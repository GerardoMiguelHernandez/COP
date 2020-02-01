import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Itinerario2PageRoutingModule } from './itinerario2-routing.module';

import { Itinerario2Page } from './itinerario2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Itinerario2PageRoutingModule
  ],
  declarations: [Itinerario2Page]
})
export class Itinerario2PageModule {}
