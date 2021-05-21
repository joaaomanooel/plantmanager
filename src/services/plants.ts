import api from './api';
import { IServicesGet } from '@/interfaces';

const baseURL = '/plants';

const getAll = ({ sort = 'name', order = 'asc' }: IServicesGet) =>
  api.get(`${baseURL}?_sort=${sort}&order=${order}`);

export default { getAll };
