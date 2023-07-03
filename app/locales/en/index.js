import { EN_COMMON } from './common';
import { EN_EMPLOYEE } from './employees';
import { EN_HEADER } from './header';
import { EN_LOGIN } from './login';
import { EN_SETTINGS } from './settings';
import { EN_SUPPORT } from './support';
import { EN_UNRECOGNISED } from './unrecognised';

export const TR_ENGLISH = {
  ...EN_COMMON,
  ...EN_HEADER,
  ...EN_EMPLOYEE,
  ...EN_UNRECOGNISED,
  ...EN_LOGIN,
  ...EN_SUPPORT,
  ...EN_SETTINGS,
};
