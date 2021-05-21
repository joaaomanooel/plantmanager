import api from './api';
import { IServicesGet } from '@/interfaces';

const baseURL = '/plants_environments';

const getAll = ({ sort = 'title', order = 'asc' }: IServicesGet) =>
  api.get(`${baseURL}?_sort=${sort}&order=${order}`);

export default { getAll };
