import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Agendar2PageRoutingModule } from './agendar2-routing.module';

import { Agendar2Page } from './agendar2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Agendar2PageRoutingModule
  ],
  declarations: [Agendar2Page]
})
export class Agendar2PageModule {}
