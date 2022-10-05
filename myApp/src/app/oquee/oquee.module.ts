import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OqueePageRoutingModule } from './oquee-routing.module';

import { OqueePage } from './oquee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OqueePageRoutingModule
  ],
  declarations: [OqueePage]
})
export class OqueePageModule {}
