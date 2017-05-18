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
          {name: 'Cross app links',img: 1, technologies: [
              {name: 'HTML5'},
              {name: 'CSS3'},
              {name: 'SASS'},
              {name: 'AngularJS'},
              {name: 'Polymer'},
              {name: 'Flask'},
              {name: 'PostgreSQL'}
          ]},
          {name: 'WebCulator',img: 2, technologies: [
              {name: 'Angular 2'}
          ]},
          {name: 'Newsfeed system',img: 3, technologies: [
              {name: 'HTML5'},
              {name: 'CSS3'},
              {name: 'SASS'},
              {name: 'Angular 2'},
              {name: 'Django'}
          ]},
          {name: 'John lennon',img: 4, technologies: [
              {name: 'Angular 2'},
              {name: 'Django'}
          ]},
          {name: 'Cooper standards',img: 5, technologies: [
              {name: 'Angular 2'},
              {name: 'Django'}
          ]},
          {name: 'Logitech',img: 6, technologies: [
              {name: 'Angular 2'},
              {name: 'Django'}
          ]}
      ];
  }
}
