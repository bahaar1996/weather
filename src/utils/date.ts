import { format } from "date-fns-jalali";

export function FormatToJalali(date: string, dateFormat: string) {
  const newDate = new Date(date.replace(" ", "T"));
  return format(newDate, dateFormat);
}
