import { CreateDateParams } from './../../../../interfaces/CreateDateParams';
import { getWeekNumber } from './getWeekNumber';

export const createDate = (parms?: CreateDateParams) => {
  const locale = parms?.locale ?? 'default';
  const dateVal = parms?.date ?? new Date();
  const day = dateVal.toLocaleDateString(locale, { weekday: 'long' });
  const dayShort = dateVal.toLocaleDateString(locale, { weekday: 'short' });
  const dayWeekNumber = dateVal.getDay() + 1;
  const dayNumber = dateVal.getDate();
  const year = dateVal.getFullYear();
  const yearShort = dateVal.toLocaleDateString(locale, { year: '2-digit' });
  const month = dateVal.toLocaleDateString(locale, { month: 'long'});
  const monthShort = dateVal.toLocaleDateString(locale, { month: 'short'});
  const monthNumber = dateVal.getMonth() + 1;
  const monthIndex = dateVal.getMonth();
  const timeStamp = dateVal.getTime();
  const week = getWeekNumber(dateVal);

  return {
    date: dateVal,
    dayNumber,
    day,
    dayWeekNumber,
    dayShort,
    year,
    yearShort,
    month,
    monthShort,
    monthNumber,
    monthIndex,
    timeStamp,
    week
  };
}