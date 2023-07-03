import { LT_COMMON } from './common';
import { LT_EMPLOYEE } from './employees';
import { LT_HEADER } from './header';
import { LT_LOGIN } from './login';
import { LT_SETTINGS } from './settings';
import { LT_SUPPORT } from './support';
import { LT_UNRECOGNISED } from './unrecognised';

export const TR_LITHUNIAN = {
  ...LT_COMMON,
  ...LT_HEADER,
  ...LT_EMPLOYEE,
  ...LT_UNRECOGNISED,
  ...LT_LOGIN,
  ...LT_SUPPORT,
  ...LT_SETTINGS,
};
