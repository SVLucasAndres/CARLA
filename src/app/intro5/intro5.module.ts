import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Intro5PageRoutingModule } from './intro5-routing.module';

import { Intro5Page } from './intro5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Intro5PageRoutingModule
  ],
  declarations: [Intro5Page]
})
export class Intro5PageModule {}
