const transformDate = (date: string): string => {
  if (!date) return '0.0.0';

  const dateInsnatce = new Date(date);
  const presentDate = new Date();

  const presentDay = presentDate.getDate();
  const presentMount = presentDate.getMonth();
  const presentYear = presentDate.getFullYear();

  // input date
  const inputDay = dateInsnatce.getDate();
  const inputMount = dateInsnatce.getMonth();
  const inputYear = dateInsnatce.getFullYear();
  const inpurHour = dateInsnatce.getHours();
  const inputMinutes = dateInsnatce.getMinutes();

  const mimutes = inputMinutes < 10 ? '0' + inputMinutes : inputMinutes;

  if (
    presentDay === inputDay &&
    presentMount === inputMount &&
    presentYear === inputYear
  ) {
    return `Сегодня в ${inpurHour.toString()}:${mimutes}`;
  }

  if (
    presentDay - 1 === inputDay  &&
    presentMount === inputMount &&
    presentYear === inputYear
  ) {
    return `Вчера в ${inpurHour.toString()}:${mimutes}`;
  }

  return new Intl.DateTimeFormat('ru-RU').format(dateInsnatce);
};

export default transformDate;
