import {
    Component,
    AfterViewChecked,
    OnInit
}
from '@angular/core';


@Component ({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})

export class AppComponent implements AfterViewChecked, OnInit{
    searchValue: string;
    isDocumentReady: boolean = false;


    ngOnInit(){
    }

    ngAfterViewChecked(){
        this.isDocumentReady = true;
    }
}
