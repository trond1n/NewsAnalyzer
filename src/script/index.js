//импорты
import "../pages/index.css";
import FormValidate from '../script/utils/FormValidator.js';
import SearchInput from '../script/components/SearchInput.js';
import NewsCard from '../script/components/NewsCard.js';
import NewsCardList from '../script/components/NewsCardList.js';
import NewsApi from '../script/modules/NewsApi.js';
import DataStorage from '../script/modules/DataStorage.js';
import {
    errorMessages,
    searchForm,
    searchInput,
    searchButton,
    newsApiUrl,
    newsApiKey,
    newsLimit,
    newsLanguage,
    newsCounter,
    searchResult,
    searchResultButton,
    searchResultCards,
    searchPreloader,
    notFound,

} from '../script/constants/constants.js';

//константы
const formValidation = new FormValidate(searchForm, searchInput, searchButton, errorMessages);
const newsApi = new NewsApi(newsApiUrl, newsApiKey, newsLimit, newsLanguage);
const dataStorage = new DataStorage();
const createCard = () => new NewsCard();
const newsCardList = new NewsCardList(createCard, searchResultCards, dataStorage, searchForm, searchResultButton, newsCounter);
const searchInputSender = new SearchInput(searchForm, render);

//создаем карточки
function render() {
    event.preventDefault();

    localStorage.clear();
    searchPreloader.classList.remove('section__hide');
    searchResult.classList.add('section__hide');
    notFound.classList.add('section__hide');


    newsApi.getNews(searchInput.value)
        .then((result) => {


            if (result.articles.length === 0) {
                searchPreloader.classList.add('section__hide');
                notFound.classList.remove('section__hide');
            }
            else {
                searchResult.classList.remove('section__hide');
                newsCardList.renderCards(result.articles);
                dataStorage.createDataStorage(result, searchInput.value);
                searchPreloader.classList.add('section__hide');
            };
        })
        .catch((err) => {
            console.log(err);
            searchPreloader.classList.add('section__hide');

        });
}
//тянем карточки из сторожа
function pullCards() {
    const storageCards = dataStorage.getStorageCards();
    const storageRequest = dataStorage.getStorageRequest();

    if (storageCards !== null) {
        searchResult.classList.remove('section__hide');
        newsCardList.renderCards(storageCards.articles);
        searchInput.value = storageRequest;
    }
}

pullCards();

formValidation.setEventListeners();
searchInputSender.submit();