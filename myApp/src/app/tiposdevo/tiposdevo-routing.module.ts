import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TiposdevoPage } from './tiposdevo.page';

const routes: Routes = [
  {
    path: '',
    component: TiposdevoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiposdevoPageRoutingModule {}
