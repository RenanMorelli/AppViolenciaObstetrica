import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuempodePageRoutingModule } from './quempode-routing.module';

import { QuempodePage } from './quempode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuempodePageRoutingModule
  ],
  declarations: [QuempodePage]
})
export class QuempodePageModule {}
