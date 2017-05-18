import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'technologies',
    templateUrl: 'technologies.component.html',
    styleUrls: ['technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {

    Technologies: Array<Object>;
    Tools: Array<string>;
    constructor() {  }

  ngOnInit() {
      this.Technologies = [
          {name: 'SASS', progress: 5},
          {name: 'AngularJS', progress: 7},
          {name: 'Angular', progress: 2},
          {name: 'Polymer', progress: 5},
          {name: 'ES6', progress: 3},
          {name: 'TypeScript', progress: 4},
          {name: 'Flask', progress: 5},
          {name: 'PHP', progress: 6},
          {name: 'SQL', progress: 6}
      ];
      this.Tools = ['npm', 'bower', 'webpack', 'heroku', 'bootstrap', 'git', ''];
  }
}
