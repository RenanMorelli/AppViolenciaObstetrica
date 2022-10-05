import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrevenirPage } from './prevenir.page';

const routes: Routes = [
  {
    path: '',
    component: PrevenirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrevenirPageRoutingModule {}
