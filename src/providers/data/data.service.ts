import { Injectable } from '@angular/core';
import {Technology} from "../../models/technology";
import {Schedule} from "../../models/schedule";

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  categories: string[] = ['front','back','hybride'];
  priorities: string[] = ['basse','moyenne', 'haute'];
  schedules: Schedule[] = [];
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

  constructor() {
    //console.log('Hello DataProvider Provider');
  }

  getAllTechnologies() {

    return this.technologies;
}

getAllCategories(){
    return this.categories;
}

search(term: string){
   return this.technologies.filter(
     (tech) =>
      tech.name.toLocaleLowerCase().includes(term) // les accolades sont utilisés lorsque dans la fonction callback on doit effecter des valeurs dans des variables
    );
}

addTechno(technology: Technology) {
  this.technologies = [...this.technologies,technology];
  console.log(this.technologies);
}

  getAllPriorities(){
      return this.priorities;
  }
  createSchedule(schedule: Schedule){
      this.schedules = [...this.schedules,schedule];
  }
  getAllSchedules() {
      return this.schedules;
  }
}
