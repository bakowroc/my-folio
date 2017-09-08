import { Component } from '@angular/core';

import { SkillsData } from './Skills.data';
import { Skill } from './Skills.interface';

@Component({
  selector: 'Skills',
  styleUrls: ['Skills.styles.scss'],
  templateUrl: 'Skills.template.html'
})

export class Skills {

  private Skills: Array<Skill>;

  public ngOnInit() {
    this.Skills = SkillsData;
  }
}
