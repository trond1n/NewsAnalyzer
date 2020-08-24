import { newsCounter } from '../constants/constants.js';
import { week } from '../constants/constants.js';
export default class DateConverter {


  //дата для карточек
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
    const trueDate = dayOfMonth + " " + month + ", " + year;
    return trueDate;
  }


  //границы дат
  static setApiDate() {
    const date = new Date();
    const weekAgo = new Date(date);
    weekAgo.setDate(date.getDate() - newsCounter + 1);
    const startDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    const finishDate = `${weekAgo.getFullYear()}-${weekAgo.getMonth() + 1}-${weekAgo.getDate() - 5}`;
    // console.log(finishDate, startDate);
    return { finishDate, startDate };
  }


  //дата для пачки новостей
  static getDateForNewsSet(date) {
    const trueDate = new Date(date).toDateString();
    return trueDate;
  }


  //месяц для таблицы
  static getMonthForTable() {
    const date = new Date();
    const pastWeekDay = new Date(date);
    pastWeekDay.setDate(date.getDate() - week + 1);
    const month = pastWeekDay.toLocaleString('ru', {
      month: 'long',
    });
    return month;
  }


  //дата для строк таблицы 
  static getDatesForTable() {
    const dates = [];
    const correctDates = [];
    const date = new Date();

    for (let i = 0; i < week; i++) {
      const dateCopy = new Date(date);
      dateCopy.setDate(date.getDate() - i);
      dates.unshift(dateCopy);
    }

    dates.forEach((date) => {
      const correctDateAndWeek = DateConverter.getCorrectTableDate(date);
      correctDates.push(correctDateAndWeek);
    });

    return correctDates;
  }


  //корректная дата для таблички
  static getCorrectTableDate(date) {
    const trueDate = new Date(date);
    const day = trueDate.toLocaleString('ru', {
      day: 'numeric',
      weekday: 'short',
    });
    const dayForm = day.split(', ');
    const correctDate = `${dayForm[1]}, ${dayForm[0]}`;

    return correctDate;
  }

}
