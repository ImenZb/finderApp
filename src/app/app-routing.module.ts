import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsModule } from './Tabs/tabs.module';

const routes: Routes = [
  {path: 'tabs', loadChildren: () => import('./Tabs/tabs.module').then(m => m.TabsModule)},
  {
    path: '**', redirectTo: '/tabs', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
