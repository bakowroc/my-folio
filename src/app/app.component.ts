import { Component, OnInit } from '@angular/core';
import { ProjectInterface } from './Project/Project.interface';
import { ProjectsData } from './Project/Projects.data';

@Component ({
  selector: 'App',
  styleUrls: ['App.styles.scss'],
  templateUrl: 'App.template.html'
})

export class App {

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
}
