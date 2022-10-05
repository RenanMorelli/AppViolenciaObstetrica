import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuempodePage } from './quempode.page';

const routes: Routes = [
  {
    path: '',
    component: QuempodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuempodePageRoutingModule {}
