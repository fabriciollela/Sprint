import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KanbanPage } from './kanban';

@NgModule({
  declarations: [
    KanbanPage,
  ],
  imports: [
    IonicPageModule.forChild(KanbanPage),
  ],
})
export class KanbanPageModule {}
