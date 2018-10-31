import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms/src/directives';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
modules; 
nbSwitch: any;
  constructor() { }

  ngOnInit() {
    this.nbSwitch = 0;

    this.modules = [
      {
        title:'Module 1: Les prérequis (12 jours)',
        content: [
          'Initiation ludique aux concepts algorithmiques et orienté objet',
          'Initiation à la programmation avec Javascript',
          'Initiation à la gestion de projet avec Scrum'
                ]
      },
      {
        title:'Module 2: Les bases (11 jours)',
        content:['HTML & CSS','HTML5/CSS3','SASS']
      },
      {
        title:'Module 3: Les aspects UX (5 jours)',
        content: ['Utilisation des outils moderne pour le maquettage et la mise en place d’interface UX','Les facettes du Responsive design et ses inconvénient']
      },
      {
        title:'Module 4: La programmation (49 jours)',
        content: ['Javascript (ES5, ES6, ES2015, ESNEXT)', 'JQuery vs VanillaJS', 'TypeScript', 'Angular', 'Ember','Node JS Base','Node JS Avancé (ExpressJS, HapiJS, Mongoose)','MongoDB with Node JS','Javascript Tooling with node (babel, gulp, webpack,...)','Github']
      },
      {
        title:'Module 5: projet (20 jours)',
        content: ['Atelier autour d’un projet de groupe intégrant les différentes matières vues au cours de cette formation']
      },
      {
        title:'Module 6: Accompagnement (9 jours)',
        content:['Communication']
      }
    ]
  }
  addnbSwitch(){
    if(this.nbSwitch === 5){
      return this.nbSwitch = 0;
    }
    return this.nbSwitch++;
  }
  lessnbSwitch(){
    if(this.nbSwitch === 0 ){
      return this.nbSwitch = 5;
    }
    return this.nbSwitch--;
  }
}
