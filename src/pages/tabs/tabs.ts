import { Component } from '@angular/core';

import { BacklogPage } from'../backlog/backlog';
import { SprintsPage } from '../sprints/sprints';
import { KanbanPage } from '../kanban/kanban';
import { RelatoriosPage } from '../relatorios/relatorios';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = BacklogPage;
  tab3Root = SprintsPage;
  tab4Root = KanbanPage;
  tab5Root = RelatoriosPage;

  constructor() {

  }
}
