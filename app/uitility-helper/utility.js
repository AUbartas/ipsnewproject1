// write-down the shared components such as form validatior,utility functions etc.

import { Checkbox } from 'antd';
import { TR_ENGLISH } from '../locales/en';
import { TR_LITHUNIAN } from '../locales/lt';

//update object immutably
export const updateObject = (oldState, updatedProperties) => {
  return {
    ...oldState,
    ...updatedProperties,
  };
};

// outpur modification for boolean values
export function modifieddata(data) {
  const modProperties = {};
  Object.keys(data).forEach((key) => {
    if (typeof data[key] == 'boolean') {
      modProperties[key] = <Checkbox checked={data[key]} />;
    }
    if (key == 'subdivision') {
      modProperties[key] = data[key]['name'];
    }
  });
  return {
    ...data,
    ...modProperties,
  };
}

// get current local file
export function localeData(locale) {
  // let t;
  // if (locale == "en") {
  //   t = en;
  // } else if (locale == "lt") {
  //   t = lt;
  // }

  const langOptions = {
    en: TR_ENGLISH,
    lt: TR_LITHUNIAN,
  };
  const t = langOptions[locale];
  return t;
}

export function dateFormatter(date) {
  return (
    date.getFullYear() +
    '-' +
    ('0' + (date.getMonth() + 1)).slice(-2) +
    '-' +
    ('0' + date.getDate()).slice(-2)
  );
}

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
