import { getMonthsNames } from './../../../static/utils/functions/date/getMonthsNames';
import { useMemo, useState } from 'react';
import { IUseCalendarParams } from '../../../interfaces';
import { createDate, createMonth } from '../../../static/utils/functions/date';

export const useCalendar = ({ locale = 'default', selectedDate: date}: IUseCalendarParams) => {
  const [mode, setMode] = useState<'days'|'months'|'years'>('days');
  const [selectedDate, setSelectedDate] = useState(createDate({date}));
  const [selectedMonth, setSelectedMonth] = useState(
    createMonth({date: new Date(selectedDate.year, selectedDate.monthIndex), locale}));

  const [selectedYear, setSelectedYear] = useState(selectedDate.year);
  const monthsNames = useMemo(() => getMonthsNames(locale), []);
}