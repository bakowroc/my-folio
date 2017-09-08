import { Component, Input, OnInit } from '@angular/core';

import { ProjectInterface } from '../Project/Project.interface';
import { ProjectsData } from '../Project/Projects.data';

@Component({
  selector: 'ProjectPreview',
  styleUrls: ['ProjectPreview.styles.scss'],
  templateUrl: 'ProjectPreview.template.html'
})

export class ProjectPreview implements OnInit {

  @Input() private activeProject: ProjectInterface;
  @Input() private onClose: () => void;
  @Input() private onNext: () => void;
  @Input() private onPrev: () => void;

  private Projects: Array<ProjectInterface>;

  public ngOnInit() {
    this.Projects = ProjectsData;
  }
}
