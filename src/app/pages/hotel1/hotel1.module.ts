import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hotel1PageRoutingModule } from './hotel1-routing.module';

import { Hotel1Page } from './hotel1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hotel1PageRoutingModule
  ],
  declarations: [Hotel1Page]
})
export class Hotel1PageModule {}
