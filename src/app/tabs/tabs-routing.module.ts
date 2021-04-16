import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsComponent } from './tabs.component';

const routes: Routes = [
  {path: '',component:TabsComponent, children:[
    {path: 'tab-search-page', loadChildren: () => import('./tab-search-page/tab-search-page.module').then(m => m.TabSearchPageModule)},
    {path: 'tab-list-page', loadChildren: () => import('./tab-list-page/tab-list-page.module').then(m => m.TabListPageModule)}  
  ]},
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
