export interface IEnvironments {
  title: string;
  key: string;
}

export interface IFrequency {
  repeat_every: string;
  times: number;
}

export interface IPlants {
  id: number;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: IEnvironments[];
  frequency: IFrequency[];
}

export interface IServicesGetProps {
  sort?: string;
  order?: string;
  page?: number;
  limit?: number;
  start?: number;
  end?: number;
}
