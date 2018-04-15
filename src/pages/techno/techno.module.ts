import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TechnoPage } from './techno';

@NgModule({
  declarations: [
    TechnoPage,
  ],
  imports: [
    IonicPageModule.forChild(TechnoPage),
  ],
})
export class TechnoPageModule {}
