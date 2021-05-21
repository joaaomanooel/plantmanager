import { IFrequency } from './frequency';

export interface IPlants {
  id: number;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: IFrequency[];
}
