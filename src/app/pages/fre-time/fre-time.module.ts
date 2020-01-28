import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FreTimePageRoutingModule } from './fre-time-routing.module';

import { FreTimePage } from './fre-time.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FreTimePageRoutingModule,
    ComponentsModule
  ],
  declarations: [FreTimePage]
})
export class FreTimePageModule {}
