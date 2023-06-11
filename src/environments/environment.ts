import { environment as prodEnvironment } from './environment.prod';
import { environment as devEnvironment } from './environment.dev';

export const environment = {
  ...prodEnvironment,
  ...devEnvironment
};