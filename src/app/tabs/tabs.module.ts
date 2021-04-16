import { ApplicationModule, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsRoutingModule } from './tabs-routing.module';

import { IonicModule } from '@ionic/angular';
import { TabsComponent } from './tabs.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [TabsComponent],
  imports: [
    CommonModule,
    TabsRoutingModule,
    IonicModule,
    SharedModule
  ]
})
export class TabsModule { }
