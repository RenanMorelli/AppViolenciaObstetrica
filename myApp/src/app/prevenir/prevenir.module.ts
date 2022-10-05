import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrevenirPageRoutingModule } from './prevenir-routing.module';

import { PrevenirPage } from './prevenir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrevenirPageRoutingModule
  ],
  declarations: [PrevenirPage]
})
export class PrevenirPageModule {}
