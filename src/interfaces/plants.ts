import { IFrequency } from './frequency';

export interface IPlants {
  id: number;
  uuid: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: IFrequency;

  dateTimeNotification: Date;
  notificationId: string;
  hour: string;
}

export interface IStoragePlant {
  [id: string]: {
    date: IPlants;
  };
}
