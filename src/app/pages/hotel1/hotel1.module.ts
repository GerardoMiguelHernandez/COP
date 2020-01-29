import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hotel1PageRoutingModule } from './hotel1-routing.module';

import { Hotel1Page } from './hotel1.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hotel1PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Hotel1Page]
})
export class Hotel1PageModule {}
