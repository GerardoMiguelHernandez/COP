import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Itinerario3PageRoutingModule } from './itinerario3-routing.module';

import { Itinerario3Page } from './itinerario3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Itinerario3PageRoutingModule
  ],
  declarations: [Itinerario3Page]
})
export class Itinerario3PageModule {}
