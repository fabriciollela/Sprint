import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { KanbanPage } from './kanban';

@NgModule({
  declarations: [
    KanbanPage,
  ],
  imports: [
    IonicPageModule.forChild(KanbanPage), 
    TranslateModule.forChild()
  ],
  exports: [
    KanbanPage
  ]
})
export class KanbanPageModule { }
