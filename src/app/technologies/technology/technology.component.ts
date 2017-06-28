import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter
} from '@angular/core';

@Component({
    selector: 'technology',
    templateUrl: 'technology.component.html',
    styleUrls: ['technology.component.scss']
})
export class TechnologyComponent implements OnInit {

    @Input()
        technology: Object;
    @Input()
        inputIndex: number;

    @Output()
        hideAllShowMe:EventEmitter<number> = new EventEmitter;

    showMoreInfo: boolean = false;

    constructor() {  }

    ngOnInit() {}

    moreInfo(){
        this.hideAllShowMe.emit(this.inputIndex);
    }
}
