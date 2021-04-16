import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabListPageRoutingModule } from './tab-list-page-routing.module';
import { TabListPageComponent } from './tab-list-page.component';
import { IonicModule } from '@ionic/angular';
import { IemPageComponent } from './iem-page/iem-page.component';
import { ModalModule } from 'src/app/modal/modal.module';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [TabListPageComponent, IemPageComponent],
  imports: [
    CommonModule,
    TabListPageRoutingModule,
    SharedModule,
    IonicModule,
    ModalModule
  ]
})
export class TabListPageModule { }
