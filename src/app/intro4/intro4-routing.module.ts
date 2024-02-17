import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Intro4Page } from './intro4.page';

const routes: Routes = [
  {
    path: '',
    component: Intro4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Intro4PageRoutingModule {}
