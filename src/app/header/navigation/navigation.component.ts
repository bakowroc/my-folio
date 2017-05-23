import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'navigation',
    templateUrl: 'navigation.component.html',
    styleUrls: ['navigation.component.scss', 'navigation.media.component.scss']
})
export class NavigationComponent implements OnInit {

    Menu: Array<Object>;

    constructor() {  }

  ngOnInit() {
      this.Menu = [
          {icon: 'folder-o', link: '#home'},
          {icon: 'image', link: '#projects'},
           {icon: 'user-o', link: '#about'},
          {icon: 'code', link: '#skills'}

      ];
  }
}
