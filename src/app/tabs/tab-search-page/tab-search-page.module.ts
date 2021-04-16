import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabSearchPageRoutingModule } from './tab-search-page-routing.module';
import { IonicModule } from '@ionic/angular';
import { TabSearchPageComponent } from './tab-search-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [TabSearchPageComponent],
  imports: [
    CommonModule,
    TabSearchPageRoutingModule,
    IonicModule,
    SharedModule
  ]
})
export class TabSearchPageModule { }
