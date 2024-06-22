export const generateDayOfWeek = (dt: number) => {
  const date = new Date(dt * 1000);
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const dayOfWeek = daysOfWeek[date.getUTCDay()];
  return dayOfWeek;
};
