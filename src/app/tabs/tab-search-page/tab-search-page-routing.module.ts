import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabSearchPageComponent } from './tab-search-page.component';

const routes: Routes = [
  {path: '', component: TabSearchPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabSearchPageRoutingModule { }
