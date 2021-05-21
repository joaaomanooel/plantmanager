import api from './api';
import { IServicesGetProps } from '@/interfaces';

const baseURL = '/plants_environments';

const getAll = ({ sort = 'title', order = 'asc' }: IServicesGetProps) =>
  api.get(`${baseURL}?_sort=${sort}&order=${order}`);

export default { getAll };
