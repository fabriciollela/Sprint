import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { SprintsPage } from './sprints';

@NgModule({
  declarations: [
    SprintsPage,
  ],
  imports: [
    IonicPageModule.forChild(SprintsPage), 
    TranslateModule.forChild()
  ],
  exports: [
    SprintsPage
  ]
})
export class SprintsPageModule { }
