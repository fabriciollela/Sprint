import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { RelatoriosPage } from './relatorios';

@NgModule({
  declarations: [
    RelatoriosPage,
  ],
  imports: [
    IonicPageModule.forChild(RelatoriosPage), 
    TranslateModule.forChild()
  ],
  exports: [
    RelatoriosPage
  ]
})
export class RelatoriosPageModule { }
