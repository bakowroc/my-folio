import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './App.component';
import { Contact } from './Contact/Contact.component';
import { Logo } from './Logo/Logo.component';
import { Name } from './Name/Name.component';
import { Project } from './Project/Project.component';
import { ProjectPreview } from './ProjectPreview/ProjectPreview.component';
import { Skills } from './Skills/Skills.component';

@NgModule({
  bootstrap: [App],
  declarations: [
    App,
    Contact,
    Logo,
    Name,
    Project,
    ProjectPreview,
    Skills
  ],
  imports: [
    BrowserModule
  ]
})

export default class AppModule {}
