import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RickPageRoutingModule } from './rick-routing.module';

import { RickPage } from './rick.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RickPageRoutingModule
  ],
  declarations: [RickPage]
})
export class RickPageModule {}
