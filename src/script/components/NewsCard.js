import DateConverter from '../utils/DateConverter.js';
import { blankImage } from '../constants/constants.js';
export default class NewsCard {

  createNewsCard(article) {
    const newsCard = document.createElement('a');
    newsCard.classList.add('search-result__item');
    newsCard.setAttribute('href', `${article.url}`);
    newsCard.setAttribute('target', '_blank');

    newsCard.insertAdjacentHTML(
      'afterbegin',
      `<img class="search-result__item-image">
<p class="search-result__item-date"></p>
<h3 class="search-result__item-title"></h3>
<p class="search-result__item-description"></p>
<p class="search-result__item-link"></p>
`
    );

    newsCard.querySelector('.search-result__item-image').setAttribute('src', `${article.urlToImage}`);
    newsCard.querySelector('.search-result__item-title').textContent = article.title;
    newsCard.querySelector('.search-result__item-link').textContent = article.source.name;

    const dateToConvert = article.publishedAt;
    const newsDate = DateConverter.сardDateConverter(dateToConvert);
    newsCard.querySelector('.search-result__item-date').textContent = newsDate;

    if (article.urlToImage === null) {
      newsCard.querySelector('.search-result__item-image').setAttribute('src', blankImage);
    } else {
      newsCard.querySelector('.search-result__item-image').setAttribute('src', `${article.urlToImage}`);
    }

    return newsCard;
  }
}
