import { ProjectInterface } from './Project.interface';

export const ProjectsData: Array<ProjectInterface> = [
  {
    area: 'p1',
    date: new Date("06/01/2017"),
    id: 1,
    image: 'http://maciejbakowicz.pl/img/galeria/sampph.png',
    link: '#',
    technologies: [
      {
        name: 'AngularJS',
        percent: 60
      },
      {
        name: 'PHP',
        percent: 30
      },
      {
        name: 'MySQL',
        percent: 10
      }
    ],
    title: 'SAM PPH'
  },
  {
    area: 'p2',
    date: new Date("09/28/2016"),
    id: 2,
    image: 'http://maciejbakowicz.pl/img/galeria/toms.png',
    link: '#',
    technologies: [
      {
        name: 'Photoshop',
        percent: 90
      },
      {
        name: 'User experience',
        percent: 10
      }
    ],
    title: 'Tom\'s Sneakers'
  },
  {
    area: 'p3',
    date: new Date("08/23/2016"),
    id: 3,
    image: 'http://maciejbakowicz.pl/img/galeria/witcher.png',
    link: '#',
    technologies: [
      {
        name: 'Photoshop',
        percent: 90
      },
      {
        name: 'User experience',
        percent: 10
      }
    ],
    title: 'Game development'
  },
  {
    area: 'p4',
    date: new Date("08/23/2016"),
    id: 3,
    image: 'http://maciejbakowicz.pl/img/galeria/witcher.png',
    link: '#',
    technologies: [
      {
        name: 'AngularJS',
        percent: 60
      },
      {
        name: 'PHP',
        percent: 30
      },
      {
        name: 'MySQL',
        percent: 10
      }
    ],
    title: 'Band website'
  }
];
