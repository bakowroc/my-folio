import {
    Component,
    OnInit,
    Input
} from '@angular/core';
@Component({
    selector: 'tool',
    templateUrl: 'tool.component.html',
    styleUrls: ['tool.component.scss']
})
export class ToolComponent implements OnInit {
    @Input()
        tool: string;
    constructor() {  }

  ngOnInit() {}
}
