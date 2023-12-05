import { createMonth } from './createMonth';
import { createDate } from './createDate';
import { ICreateYearParams } from './../../../../interfaces';


export const createYear = (parms: ICreateYearParams) => {
  const locale = parms.locale ?? 'default';

  const monthCount = 12;
  const today = createDate();

  const year = parms.year ?? today.year;
  const monthNumber = parms.monthNumber ?? today.monthNumber;

  const month = createMonth({ date: new Date(year, monthNumber), locale });

  const getMonthDays = (monthIndex: number) =>
    createMonth({ date: new Date(year, monthIndex), locale}).createMonthDays();

  const createYearMonths = () => {
    const months = [];
    for(let i = 0; i <= monthCount - 1; i++)
      months[i] = getMonthDays(i);
    return months;
  };

  return {
    createYearMonths,
    month,
    year
  }
}