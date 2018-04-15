import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Technology} from "../../models/technology";

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

    technologies: Technology[] = [
      {
        name: 'Angular',
        category: 'Front'
      },

      {
        name: 'PWA',
        category: 'Hybride'
      },
      {
        name: 'ionic',
        category: 'Hybride'
      },
      {
        name: 'node',
        category: 'backend'
      }
    ];

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  getAllTechnologies() {
    return this.technologies;
}

}
