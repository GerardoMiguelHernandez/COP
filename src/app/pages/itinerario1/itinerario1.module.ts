import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Itinerario1PageRoutingModule } from './itinerario1-routing.module';

import { Itinerario1Page } from './itinerario1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Itinerario1PageRoutingModule
  ],
  declarations: [Itinerario1Page]
})
export class Itinerario1PageModule {}
