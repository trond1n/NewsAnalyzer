//формат даты для карточки коммита
export function commitDateFormater(day) {
  const date = new Date(day);
  const year = date.getFullYear();
  const month = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ][date.getMonth()];
  const dayOfMonth = date.getDate();
  const formatedDate = dayOfMonth + " " + month + ", " + year;
  return formatedDate;
}
