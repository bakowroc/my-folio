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
          {name: 'Cross app links'},
          {name: 'WebCulator'}
      ];
  }
}
