import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Toast, ToastController} from 'ionic-angular';
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

  toast: Toast;
  schedule: Schedule = {
    name:'',
    date: null,
    duration: 0,
    priority: '',
    remark: '',
    technology: { name: '', category: ''}
  };

  categories: string[];
  priorities: string[];


  constructor(public navCtrl: NavController, private dataService: DataProvider, private toastCtrl: ToastController) {

  }

  ionViewWillLoad() {
    this.categories = this.dataService.getAllCategories();
    this.priorities = this.dataService.getAllPriorities();
  }

  createSchedule() {
    this.dataService.createSchedule(this.schedule);
  this.toast = this.toastCtrl.create({
    message:'creation effectuée',
    duration:2000,
    cssClass: 'ok'
    }
  );
  this.toast.present();
    this.resetSchedule();
  }

  resetSchedule() {
    this.schedule =  {
      name:'',
      date: null,
      duration: 0,
      priority: '',
      remark: '',
      technology: { name: '', category: ''}
    }
  }

}
