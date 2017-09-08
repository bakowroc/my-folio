import { SkillName } from '../consts/SkillNames';
import { SkillSize } from '../consts/SkillSizes';
import { Skill } from './Skills.interface';

export const SkillsData: Array<Skill> = [
  {
    bold: false,
    name: SkillName.REACT,
    size: SkillSize.LARGE
  },
  {
    bold: true,
    name: SkillName.REDUX,
    size: SkillSize.SMALL
  },
  {
    bold: false,
    name: SkillName.ANGULAR,
    size: SkillSize.MEDIUM
  },
  {
    bold: false,
    name: SkillName.PYTHON,
    size: SkillSize.MEDIUM
  },
  {
    bold: true,
    name: SkillName.NODE,
    size: SkillSize.SMALL
  },
  {
    bold: false,
    name: SkillName.MONGO,
    size: SkillSize.SMALL
  },
  {
    bold: false,
    name: SkillName.UX,
    size: SkillSize.MEDIUM
  },
  {
    bold: false,
    name: SkillName.PS,
    size: SkillSize.LARGE
  },
  {
    bold: false,
    name: SkillName.SQL,
    size: SkillSize.SMALL
  }
];
