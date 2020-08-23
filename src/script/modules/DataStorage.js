export default class DataStorage {
  //создали
  createDataStorage(result, request) {
    localStorage.setItem('cards', JSON.stringify(result));
    localStorage.setItem('request', JSON.stringify(request));
  }
  //карточки
  getStorageCards() {
    const cards = localStorage.getItem('cards');
    return JSON.parse(cards);
  }
  //искомое значение
  getStorageRequest() {
    const request = localStorage.getItem('request');
    return JSON.parse(request);
  }

}
