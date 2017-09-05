import { Component, Input } from '@angular/core';

import { ProjectInterface } from './Project.interface';

@Component({
  selector: 'Project',
  styleUrls: ['Project.styles.scss'],
  templateUrl: 'Project.template.html'
})

export class Project {
  @Input() private projectData: string;
}
