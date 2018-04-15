import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataProvider} from "../../providers/data/data.service";
import {Technology} from "../../models/technology";

/**
 * Generated class for the AccueilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
})
export class AccueilPage {

technologies: Technology[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: DataProvider) {

  }

  /*ionViewWillLoad() { // cette fontion n'est chargé q'une seule fois ! donc a chaque mis à jour les données ne sont pas mis à jour
    this.technologies = this.dataService.getAllTechnologies();
    //return this.technologies;

  }*/

  ionViewWillEnter() { // pour faire une mise à jour constante de la page on utilise ionViewWillEnter
    this.technologies = this.dataService.getAllTechnologies();
   //return this.technologies;

  }

  getItems(event) {

      this.technologies = this.dataService.search(event.target.value);
  }

}

