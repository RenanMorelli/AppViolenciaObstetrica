import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TiposdevoPageRoutingModule } from './tiposdevo-routing.module';

import { TiposdevoPage } from './tiposdevo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TiposdevoPageRoutingModule
  ],
  declarations: [TiposdevoPage]
})
export class TiposdevoPageModule {}
