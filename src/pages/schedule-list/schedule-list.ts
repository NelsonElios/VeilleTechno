import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Schedule} from "../../models/schedule";
import {DataProvider} from "../../providers/data/data.service";

/**
 * Generated class for the ScheduleListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedule-list',
  templateUrl: 'schedule-list.html',
})
export class ScheduleListPage {

  schedules: Schedule[]= [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private dataService: DataProvider) {
  }

  ionViewWillEnter() {
    this.schedules = this.dataService.getAllSchedules();
    console.log('ionViewDidLoad ScheduleListPage');
  }

}
