import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {AccueilPage} from "../accueil/accueil";
import {TechnoPage} from "../techno/techno";
import {SchedulePage} from "../schedule/schedule";
import {ScheduleListPage} from "../schedule-list/schedule-list";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AccueilPage;
  tab2Root = TechnoPage;
  tab3Root = SchedulePage;
  tab4Root = ScheduleListPage;

  constructor() {

  }
}
