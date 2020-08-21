export default class DataStorage {

  createDataStorage(result, request) {
    localStorage.setItem('cards', JSON.stringify(result));
    localStorage.setItem('request', JSON.stringify(request));
  }

  getStorageCards() {
    const cards = localStorage.getItem('cards');
    return JSON.parse(cards);
  }

  getStorageRequest() {
    const request = localStorage.getItem('request');
    return JSON.parse(request);
  }

}
