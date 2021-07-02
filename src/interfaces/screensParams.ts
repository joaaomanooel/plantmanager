import { IPlants } from './plants';

export interface IConfirmationParams {
  title: string;
  subtitle: string;
  buttonText: string;
  icon: 'smile' | 'hug';
  nextScreen: string;
}

export interface IPlantSaveParams {
  plant: IPlants;
}
