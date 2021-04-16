import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IemPageComponent } from './iem-page/iem-page.component';
import { TabListPageComponent } from './tab-list-page.component';

const routes: Routes = [
  {path: '', component: TabListPageComponent},
  {path:'item/:id', component: IemPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabListPageRoutingModule { }
