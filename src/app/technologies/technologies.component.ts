import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'technologies',
    templateUrl: 'technologies.component.html',
    styleUrls: ['technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {

    Technologies: Array<Object>;
    Tools: Array<Object>;
    constructor() {  }

  ngOnInit() {
      this.Technologies = [
          {name: 'SASS', progress: 5},
          {name: 'AngularJS', progress: 7},
          {name: 'Angular', progress: 2},
          {name: 'Polymer', progress: 5},
          {name: 'jQuery', progress: 5},
          {name: 'ES6', progress: 3},
          {name: 'TypeScript', progress: 4},
          {name: 'Flask', progress: 5},
          {name: 'PHP', progress: 6},
          {name: 'SQL', progress: 6}
      ];
      this.Tools = [
          {name: 'npm', size: 12},
          {name: 'bower', size: 2},
          {name: 'webpack', size: 2},
          {name: 'heroku', size: 3},
          {name: 'bootstrap', size: 8},
          {name: 'git', size: 10},
          {name: 'photoshop', size: 10},
          {name: 'wordpress', size: 4},
          {name: 'mybb', size: 4},
          {name: 'RWD', size: 8}
      ];
  }
}
