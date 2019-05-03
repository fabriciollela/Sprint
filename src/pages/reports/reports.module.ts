import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ReportsPage } from './reports';

@NgModule({
  declarations: [
    ReportsPage,
  ],
  imports: [
    IonicPageModule.forChild(ReportsPage), 
    TranslateModule.forChild()
  ],
  exports: [
    ReportsPage
  ]
})
export class ReportsPageModule { }
