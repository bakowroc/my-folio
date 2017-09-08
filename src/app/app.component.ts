import { Component, OnInit } from '@angular/core';
import { head, isUndefined } from 'lodash';

import { ProjectInterface } from './Project/Project.interface';
import { ProjectsData } from './Project/Projects.data';

@Component ({
  selector: 'App',
  styleUrls: ['App.styles.scss'],
  templateUrl: 'App.template.html'
})

export class App implements OnInit {

  private Projects: Array<ProjectInterface>;
  private selectedProject: ProjectInterface;

  public ngOnInit() {
    this.Projects = ProjectsData;
  }

  private onPreviewSelect = (project: ProjectInterface): void => {
    this.selectedProject = project;
  }

  private onPreviewClose = (): void => {
    this.selectedProject = null;
  }

  private onPreviewNext = () => {
    this.selectedProject = head(this.Projects.filter((project: ProjectInterface) => {
      return this.selectedProject.id < this.Projects.length
      ? project.id === this.selectedProject.id + 1
      : project.id === 1;
    }));
  }

  private onPreviewPrev = () => {
    this.selectedProject = head(this.Projects.filter((project: ProjectInterface) => {
      return this.selectedProject.id === 1
      ? project.id === this.Projects.length
      : project.id === this.selectedProject.id - 1;

    }));
  }

}
