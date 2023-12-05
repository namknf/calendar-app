export const getWeekNumber = (date: Date) => {
  const firstYearDay = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date.getTime() - firstYearDay.getTime()) / 86400000;
  return Math.ceil((pastDaysOfYear + firstYearDay.getDay() + 1) / 7);
};