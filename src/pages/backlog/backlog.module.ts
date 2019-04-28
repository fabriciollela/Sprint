import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { BacklogPage } from './backlog';

@NgModule({
  declarations: [
    BacklogPage,
  ],
  imports: [
    IonicPageModule.forChild(BacklogPage), 
    TranslateModule.forChild()
  ],
  exports: [
    BacklogPage
  ]
})
export class BacklogPageModule { }
