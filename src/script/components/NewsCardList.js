export default class NewsCardList {

  constructor(createNewsCard, contaiter, dataStorage, searchForm, button, counter) {

    this.createNewsCard = createNewsCard;
    this.contaiter = contaiter;
    this.dataStorage = dataStorage;
    this.searchForm = searchForm;
    this.button = button;
    this.counter = counter;
    this._counterScore = this.counter;
    this._counter = 0;

    this.button.addEventListener('click', this.showMoreCards.bind(this));
    this.searchForm.addEventListener('submit', this.resetCounters.bind(this));
  }
  addCard(newsCard) {
    this.contaiter.appendChild(newsCard);
  }
  clearCardList() {
    while (this.contaiter.firstChild) {
      this.contaiter.removeChild(this.contaiter.firstChild);
    };
  }
  renderCards(articles) {
    this.clearCardList();
    this.button.classList.remove('section__hide');

    for (let i = 0; i < this.counter; i++) {

      const searchResultItem = this.createNewsCard(articles[i]);
      const newsCard = searchResultItem.createNewsCard(articles[i]);

      this.addCard(newsCard);
      this._counter++;

      if (this._counter === articles.length) {
        this.button.classList.add('section__hide');
        break;
      };
    }
  }
  resetCounters() {
    this._counterScore = this.counter;
    this._counter = 0;
  }

  showMoreCards() {
    const articlesFromStorage = this.dataStorage.getStorageCards().articles;

    for (let i = this._counterScore; i < (this._counterScore + this.counter); i++) {

      if (this._counter === articlesFromStorage.length) {
        this.button.classList.add('section__hide');
        break;
      };

      const searchResultItem = this.createNewsCard(articlesFromStorage[i]);
      const newsCard = searchResultItem.createNewsCard(articlesFromStorage[i]);

      this.addCard(newsCard);
      this._counter++;
    }

    this._counterScore += this.counter;

    if (this._counter === articlesFromStorage.length) {
      this.button.classList.add('section__hide');
    };
  }









}
