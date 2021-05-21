import api from './api';
import { IServicesGet } from '@/interfaces';

const baseURL = '/plants';

const getAll = ({ sort = 'name', order = 'asc', page = 1, limit = 8 }: IServicesGet) =>
  api.get(`${baseURL}?_sort=${sort}&order=${order}&_page=${page}&_limit=${limit}`);

export default { getAll };
