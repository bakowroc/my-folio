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
          {name: 'Cross app links', date: '5/12/2017', img: 'crossapp', technologies: [
              {name: 'HTML5'},
              {name: 'CSS3'},
              {name: 'SASS'},
              {name: 'Bootstrap'},
              {name: 'AngularJS'},
              {name: 'Polymer'},
              {name: 'Flask'},
              {name: 'PostgreSQL'}
          ],
            github: 'https://github.com/bakowroc/innovativeproject-cross-app-links',
            demo: 'http://cross-app-links.herokuapp.com/'
        },
          {name: 'Newsfeed system', date: 'In progress', img: 3, technologies: [
              {name: 'HTML5'},
              {name: 'CSS3'},
              {name: 'SASS'},
              {name: 'Bootstrap'},
              {name: 'Angular 2'},
              {name: 'Django'}
          ],
            github: 'https://github.com/bakowroc/newsfeed-system',
            demo: '#'
        },
          {name: 'Curriculum vitae', date: '3/5/2017', img: 'folio', technologies: [
              {name: 'HTML5'},
              {name: 'CSS3'},
              {name: 'SASS'},
              {name: 'Bootstrap'},
          ],
            github: 'https://github.com/bakowroc/my-curriculum-vitae',
            demo: '#'
      }
      ];
  }
}
