import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Intro4PageRoutingModule } from './intro4-routing.module';

import { Intro4Page } from './intro4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Intro4PageRoutingModule
  ],
  declarations: [Intro4Page]
})
export class Intro4PageModule {}
