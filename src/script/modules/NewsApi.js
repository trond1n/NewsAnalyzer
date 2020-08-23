import DateConverter from '../utils/DateConverter.js';

export default class NewsApi {

  constructor(url, key, limit, language) {
    this.url = url;

    this.key = key;
    this.limit = limit;
    this.language = language;
  }

  getNews(request) {
    const { startDate, finishDate } = DateConverter.setApiDate();

    return fetch(
      `${this.url}?` +
      `q=${request}&` +
      `from=${startDate}&` +
      `to=${finishDate}&` +
      `pageSize=${this.limit}&` +
      `language=${this.language}&` +
      `apiKey=${this.key}`
    )
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  };
}
