import { IEnvironments } from './environments';
import { IFrequency } from './frequency';

export interface IPlants {
  id: number;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: IEnvironments[];
  frequency: IFrequency[];
}
