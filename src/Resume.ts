export interface Resume {
  info: Info;
  learn: Array<LearnPlace>;
  work: Array<WorkPlace>;
}

export interface Info {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  color: string;
}

export interface LearnPlace {
  id: string;
  degree: string;
  university: string;
  city: string;
  country: string;
}

export interface WorkPlace {
  id: string;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}
