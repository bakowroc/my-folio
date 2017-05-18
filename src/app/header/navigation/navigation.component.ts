import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'navigation',
    templateUrl: 'navigation.component.html',
    styleUrls: ['navigation.component.scss']
})
export class NavigationComponent implements OnInit {

    Menu: Array<Object>;

    constructor() {  }

  ngOnInit() {
      this.Menu = [
          {name: 'GH'},
          {name: 'LI'},
          {name: 'CV'}
      ];
  }
}
