import DateConverter from '../utils/DateConverter.js';

export default class Statistics {

  constructor(dataStorage, field, newsCounter, titleCounter, tableMonth) {
    this.dataStorage = dataStorage;
    this.field = field;
    this.newsCounter = newsCounter;
    this.titleCounter = titleCounter;
    this.tableMonth = tableMonth;
  }


  statCounter() {
    const keyWord = this.dataStorage.getStorageRequest();
    const convertedWord = keyWord.substr(0, 1).toUpperCase() + keyWord.substr(1).toLowerCase();
    this.field.textContent = `${convertedWord}`;

    const news = this.dataStorage.getStorageCards();
    const totalResults = news.totalResults;
    this.newsCounter.textContent = totalResults;

    const mentions = news.articles.filter((article) =>
      article.title.toLowerCase().includes(keyWord.toLowerCase())
    );

    this.titleCounter.textContent = mentions.length;
  }


  getMonth() {
    const month = DateConverter.getMonthForTable();
    this.tableMonth.textContent = `${month}`;
  }

}
