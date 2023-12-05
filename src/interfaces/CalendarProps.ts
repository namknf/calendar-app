export interface ICalendarProps {
  locale?: string;
  selectDate: (date: Date) => void;
  selectedDate: Date;
}