import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OqueePage } from './oquee.page';

const routes: Routes = [
  {
    path: '',
    component: OqueePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OqueePageRoutingModule {}
