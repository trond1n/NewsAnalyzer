
export function getCurrentDate() {
  const date = new Date();
  const currentDate =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  return currentDate;
}


export function getWeekAgoDate() {
  const weekAgo = new Date(new Date() - 6 * 24 * 3600 * 1000);
  const weekAgoFormatDate =
    weekAgo.getFullYear() +
    "-" +
    (weekAgo.getMonth() + 1) +
    "-" +
    weekAgo.getDate();
  return weekAgoFormatDate;
}


export function getCurrentMonth() {
  const month = new Date();
  const options = {
    month: "long",
  };
  return month.toLocaleString("ru", options);
}


export function getFormatedCurrentday() {
  const formatedCurrentDay = new Date();
  const formatedDay = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"][formatedCurrentDay.getDay()];
  const formatedDate = formatedCurrentDay.getDate();
  const dayAndDate = formatedDate + ", " + formatedDay
  return dayAndDate;
}


export function getFormatedDate(day) {
  const findDay = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"][new Date(
    new Date() - day * 24 * 3600 * 1000
  ).getDay()]
  const findDate = new Date(
    new Date() - day * 24 * 3600 * 1000
  ).getDate()
  const dayAndDate = findDate + ", " + findDay
  return dayAndDate
}


export function getdayDateformat(day) {
  const findDay = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"][new Date(day).getDay()]
  const findDate = new Date(day).getDate()
  const dayAndDate = findDate + ", " + findDay
  return dayAndDate
}


export function getFormatedDateForCards(day) {
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
