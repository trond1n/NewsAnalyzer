export default class NewsCardList {

  constructor(createCard, contaiter, dataStorage, searchForm, button, counter) {

    this.createCard = createCard;
    this.contaiter = contaiter;
    this.dataStorage = dataStorage;
    this.searchForm = searchForm;
    this.button = button;
    this.counter = counter;
    this._counterScore = this.counter;
    this._counter = 0;

    this.button.addEventListener('click', this.showMore.bind(this));
    this.searchForm.addEventListener('submit', this.reset.bind(this));
  }
  addCard(card) {
    this.contaiter.appendChild(card);
  }
  clearCardList() {
    while (this.contaiter.firstChild) {
      this.contaiter.removeChild(this.contaiter.firstChild);
    };
  }

  //результаты поиска
  renderCards(articles) {
    this.clearCardList();
    this.button.classList.remove('section__hide');

    for (let i = 0; i < this.counter; i++) {

      const searchResultItem = this.createCard(articles[i]);
      const card = searchResultItem.createCard(articles[i]);

      this.addCard(card);
      this._counter++;

      if (this._counter === articles.length) {
        this.button.classList.add('section__hide');
        break;
      };
    }
  }
  reset() {
    this._counterScore = this.counter;
    this._counter = 0;
  }

  //еще карточек?
  showMore() {
    const cardsFromStorage = this.dataStorage.getStorageCards().articles;

    for (let i = this._counterScore; i < (this._counterScore + this.counter); i++) {

      if (this._counter === cardsFromStorage.length) {
        this.button.classList.add('section__hide');
        break;
      };

      const searchResultItem = this.createCard(cardsFromStorage[i]);
      const card = searchResultItem.createCard(cardsFromStorage[i]);

      this.addCard(card);
      this._counter++;
    }

    this._counterScore += this.counter;

    if (this._counter === cardsFromStorage.length) {
      this.button.classList.add('section__hide');
    };
  }









}
