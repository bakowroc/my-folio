import { Component, Input } from '@angular/core';

import { ProjectInterface } from '../Project/Project.interface';

@Component({
  selector: 'ProjectPreview',
  styleUrls: ['ProjectPreview.styles.scss'],
  templateUrl: 'ProjectPreview.template.html'
})

export class ProjectPreview {
  @Input() private activeProject: ProjectInterface;
  @Input() private onClose: () => void;
}
