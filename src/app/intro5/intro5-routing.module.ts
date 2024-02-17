import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Intro5Page } from './intro5.page';

const routes: Routes = [
  {
    path: '',
    component: Intro5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Intro5PageRoutingModule {}
