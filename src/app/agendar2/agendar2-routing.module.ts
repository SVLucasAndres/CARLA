import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Agendar2Page } from './agendar2.page';

const routes: Routes = [
  {
    path: '',
    component: Agendar2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Agendar2PageRoutingModule {}
