import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'projects',
    templateUrl: 'projects.component.html',
    styleUrls: ['projects.component.scss']
})
export class ProjectsComponent implements OnInit {

    Projects: Array<Object>;

    constructor() {  }

  ngOnInit() {
      this.Projects = [
          {name: 'Cross app links', date: '5/12/2017', img: 1, technologies: [
              {name: 'HTML5'},
              {name: 'CSS3'},
              {name: 'SASS'},
              {name: 'AngularJS'},
              {name: 'Polymer'},
              {name: 'Flask'},
              {name: 'PostgreSQL'}
          ]},
          {name: 'WebCulator', date: '6/11/2016', img: 2, technologies: [
              {name: 'Angular 2'}
          ]},
          {name: 'Newsfeed system', date: '12/3/2016', img: 3, technologies: [
              {name: 'HTML5'},
              {name: 'CSS3'},
              {name: 'SASS'},
              {name: 'Angular 2'},
              {name: 'Django'}
          ]},
          {name: 'John lennon', date: '3/15/2017', img: 4, technologies: [
              {name: 'Angular 2'},
              {name: 'Django'}
          ]},
          {name: 'Cooper standards', date: '8/9/2016', img: 5, technologies: [
              {name: 'Angular 2'},
              {name: 'Django'}
          ]},
          {name: 'Logitech', date: '7/7/2017', img: 6, technologies: [
              {name: 'Angular 2'},
              {name: 'Django'}
          ]}
      ];
  }
}
