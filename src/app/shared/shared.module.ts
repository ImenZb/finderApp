import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelPipe } from './pipes/level.pipe';
import { ColorPipe } from './pipes/color.pipe';
import { HeaderComponent } from './components/header/header.component';
import { IonicModule } from '@ionic/angular';

const PIPES = [LevelPipe, ColorPipe];

@NgModule({
  declarations: [...PIPES, HeaderComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ...PIPES, HeaderComponent
  ]
})
export class SharedModule { }
