import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataProvider} from "../../providers/data/data.service";
import {Schedule} from "../../models/schedule";

/**
 * Generated class for the SchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {

  schedule: Schedule = {
    date: null,
    duration: 0,
    priority: '',
    remark: '',
    technology: { name: '', category: ''}
  };

  categories: string[];
  priorities: string[];


  constructor(public navCtrl: NavController, private dataService: DataProvider) {

  }

  ionViewWillLoad() {
    this.categories = this.dataService.getAllCategories();
    this.priorities = this.dataService.getAllPriorities();
  }

  createSchedule() {
    this.dataService.createSchedule(this.schedule);
    this.resetSchedule();
  }

  resetSchedule() {
    this.schedule =  {
      date: null,
      duration: 0,
      priority: '',
      remark: '',
      technology: { name: '', category: ''}
    }
  }

}
