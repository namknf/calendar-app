import { ICreateDateParams } from '../../../../interfaces';
import { getWeekNumber } from './getWeekNumber';

export const createDate = (parms?: ICreateDateParams) => {
  const locale = parms?.locale ?? 'default';
  const dateVal = parms?.date ?? new Date();
  const dayName = dateVal.toLocaleDateString(locale, { weekday: 'long' });
  const dayShortName = dateVal.toLocaleDateString(locale, { weekday: 'short' });
  const dayWeekNumber = dateVal.getDay() + 1;
  const dayNumber = dateVal.getDate();
  const year = dateVal.getFullYear();
  const yearShort = dateVal.toLocaleDateString(locale, { year: '2-digit' });
  const monthName = dateVal.toLocaleDateString(locale, { month: 'long'});
  const monthShortName = dateVal.toLocaleDateString(locale, { month: 'short'});
  const monthNumber = dateVal.getMonth() + 1;
  const monthIndex = dateVal.getMonth();
  const timeStamp = dateVal.getTime();
  const week = getWeekNumber(dateVal);

  return {
    date: dateVal,
    dayNumber,
    dayName,
    dayWeekNumber,
    dayShortName,
    year,
    yearShort,
    monthName,
    monthShortName,
    monthNumber,
    monthIndex,
    timeStamp,
    week
  };
};