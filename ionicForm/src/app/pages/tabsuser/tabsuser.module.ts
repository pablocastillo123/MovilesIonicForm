import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsuserPageRoutingModule } from './tabsuser-routing.module';

import { TabsuserPage } from './tabsuser.page';

import {SharedModule} from '../../shared/shared.module'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsuserPageRoutingModule,
    SharedModule
  ],
  declarations: [TabsuserPage]
})
export class TabsuserPageModule {}
