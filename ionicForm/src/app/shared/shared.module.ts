import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabComponent } from '../components/tab/tab.component'

@NgModule({
  declarations: [TabComponent],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule
  ],
  exports : [
    TabComponent
  ]
})
export class SharedModule { }
