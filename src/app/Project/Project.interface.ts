export interface ProjectInterface {
  area: any;
  date: Date;
  id: number;
  image: string;
  link: string;
  title: string;
  technologies: Array<Technology>;
}

export interface Technology {
  name: string;
  percent: number;
}
