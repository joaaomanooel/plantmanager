import api from './api';
import { IServicesGetProps } from '@/interfaces';

const baseURL = '/plants';

const getAll = ({ sort = 'name', order = 'asc' }: IServicesGetProps) =>
  api.get(`${baseURL}?_sort=${sort}&order=${order}`);

export default { getAll };
