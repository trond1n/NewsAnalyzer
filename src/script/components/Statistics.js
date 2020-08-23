import DateConverter from '../utils/DateConverter.js';

export default class Statistics {

  constructor(dataStorage, input, newsCounter, titleCounter, tableMonth, persents) {
    this.dataStorage = dataStorage;
    this.input = input;
    this.newsCounter = newsCounter;
    this.titleCounter = titleCounter;
    this.tableMonth = tableMonth;
    this.persents = persents;
  }

  //заполняем шапку аналитики
  statCounter() {
    const keyWord = this.dataStorage.getStorageRequest();
    this.input.textContent = `${keyWord}`;

    const news = this.dataStorage.getStorageCards();
    const totalResults = news.totalResults;
    this.newsCounter.textContent = totalResults;

    const results = news.articles.filter((article) =>
      article.title.toLowerCase().includes(keyWord)
    );

    this.titleCounter.textContent = results.length;
  }


  //месяц для таблицы
  pullMonth() {
    const month = DateConverter.getMonthForTable();
    this.tableMonth.textContent = `${month}`;
  }

  //создаем строку таблицы
  createTableRow(day, score) {
    const tableRow = document.createElement('div');
    tableRow.classList.add('analytics__table-row');

    tableRow.insertAdjacentHTML(
      'afterbegin',
      `<p class="analytics__table_date"></p>
       <p class="analytics__table_score"></p>`
    );

    tableRow.querySelector('.analytics__table_date').textContent = day;
    tableRow.querySelector('.analytics__table_score').textContent = score;
    tableRow.querySelector('.analytics__table_score').setAttribute('style', `width: ${score}%`);

    return tableRow;
  }


  //даты для столбца дата
  showDates() {
    const dates = DateConverter.getDatesForTable();
    return dates;
  }

  //собираем результаты
  countResults() {
    const groupNews = this.groupNews();
    const keyWord = this.dataStorage.getStorageRequest();
    const regex = new RegExp(keyWord, 'gi');

    groupNews.forEach((group) => {
      const text = group.text.reduce((prevWord, word) => {
        return prevWord.concat(word);
      });
      const results = text.match(regex);
      const numberOfResults = results.length;
      group.results = numberOfResults;
    });

    return groupNews;
  }

  //группируем новости для выдачи
  groupNews() {
    const news = this.dataStorage.getStorageCards();
    const arr = news.articles;
    const groups = [];

    for (let article of arr) {
      const formedGroups = groups.filter((group) =>
        DateConverter.getDateForNewsSet(group.publishedAt) ===
        DateConverter.getDateForNewsSet(article.publishedAt));

      if (formedGroups.length > 0) {
        formedGroups[0].text.push(article.title, article.description);
      }
      else {
        const newGroup = {
          publishedAt: article.publishedAt,
          text: [article.title, article.description]
        };
        groups.push(newGroup);
      }
    }

    groups.sort(function (a, b) {
      const start = new Date(a.publishedAt);
      const finish = new Date(b.publishedAt);
      return start - finish;
    })

    groups.forEach(group => {
      group.publishedAt = DateConverter.getCorrectTableDate(group.publishedAt);
    });

    return groups;
  }

  //подставляем проценты
  percentageCounts() {
    let totalResults = 0;
    const newsSet = this.countResults();

    for (let groupNews of newsSet) {
      totalResults += groupNews.results;
    }

    for (let groupNews of newsSet) {
      const percentage = groupNews.results * this.persents / totalResults;
      groupNews.percentage = Math.round(percentage);
    }

    return newsSet;
  }
}
