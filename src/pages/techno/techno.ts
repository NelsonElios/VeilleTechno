import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataProvider} from "../../providers/data/data.service";
import {Technology} from "../../models/technology";

/**
 * Generated class for the TechnoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-techno',
  templateUrl: 'techno.html',
})
export class TechnoPage {

  categories: string[];

  technology: Technology = {name:'',category:''};
  constructor(public navCtrl: NavController, public navParams: NavParams,public dataService: DataProvider) {
  }

  ionViewWillLoad() {
   this.categories = this.dataService.getAllCategories();
    console.log('ionViewDidLoad TechnoPage');
  }

  addTechnology() {
    this.dataService.addTechno(this.technology);
    this.technology = {name:'',category:''};
  }


  //prochain chapitre sur les schedule
}
