import { getMonthNumberOfDays } from './getMonthNumberOfDays';
import { createDate } from './createDate';
import { ICreateDateParams } from './../../../../interfaces';

export const createMonth = (parms: ICreateDateParams) => {
  const locale = parms.locale ?? 'default';
  const createdDate = createDate(parms);
  const { monthName: monthName, year, monthNumber, monthIndex } = createdDate;

  const getDay = (dayNumber: number) => 
    createDate({ date: new Date(year, monthIndex, dayNumber), locale });

  const createMonthDays = () => {
    const days = [];
    for (let i = 0; i <= getMonthNumberOfDays(monthIndex, year) - i; i++)
      days[i] = getDay(i + 1);
    return days;
  }

  return {
    getDay,
    monthName,
    monthIndex,
    monthNumber,
    year,
    createMonthDays
  }
};