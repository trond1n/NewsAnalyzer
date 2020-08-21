import { daysCounter } from '../constants/constants.js';

export default class DateConverter {

  static сardDateConverter(day) {
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

  static setApiDate() {
    const date = new Date();
    const weekAgoDay = new Date(date);
    weekAgoDay.setDate(date.getDate() - daysCounter + 1);
    const dateTo = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    const dateFrom = `${weekAgoDay.getFullYear()}-${weekAgoDay.getMonth() + 1}-${weekAgoDay.getDate()}`;

    return { dateFrom, dateTo };
  }

}
