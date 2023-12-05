import { createDate } from './createDate';

export const getMonthsNames = (locale: string = 'default') => {
  const monthsNames: {
    monthName: ReturnType<typeof createDate>['monthName'];
    monthShortName: ReturnType<typeof createDate>['monthShortName'];
    monthIndex: ReturnType<typeof createDate>['monthIndex'];
    date: ReturnType<typeof createDate>['date'];
  }[] = Array.from({ length: 12 });

  const createdDate = new Date();

  monthsNames.forEach((_, i) => {
    const { monthName, monthShortName, monthIndex, date} = createDate({
      locale,
      date: new Date(createdDate.getFullYear(), createdDate.getMonth() + i, 1),
    });
    monthsNames[monthIndex] = { monthName, monthIndex, monthShortName, date };
  });
  
  return monthsNames;
}