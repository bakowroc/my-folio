import {
    Component,
    OnInit,
    Input
} from '@angular/core';

@Component({
    selector: 'technology',
    templateUrl: 'technology.component.html',
    styleUrls: ['technology.component.scss']
})
export class TechnologyComponent implements OnInit {
    @Input()
        technology: Object;

    constructor() {  }

    ngOnInit() {}
}
