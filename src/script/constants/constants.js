//ошибки
const ERROR_MESSAGES = {
  valueMissing: 'Это обязательное поле',
  tooShort: 'Должно быть от 2 до 30 символов',
};

//форма поиска
const SEARCH_FORM = document.querySelector('.search__container');
const SEARCH_INPUT = document.querySelector('.search__container_input');
const SEARCH_BUTTON = document.querySelector('.search__container_button');

//блок коммитов
const GITHUB_USER = 'trond1n';
const GITHUB_REPO = 'newsanalyzer';
const GITHUB_COMMITS_LIMIT = 20;
const COMMITS_CONTAINER = document.querySelector('.history__cards');
const COMMITS = document.querySelector('.history');

//АПИ новостей
const NEWS_API_URL = 'https://nomoreparties.co/news/v2/everything';
const NEWS_API_KEY = '126e7cb169674ebfb688eadae52e0241';
const NEWS_LIMIT = 100;
const NEWS_LANGUAGE = 'ru';
const DAYS_COUNTER = 3;
const WEEK = 7;

//блок новостей
const SEARCH_RESULT = document.querySelector('.search-result');
const SEARCH_RESULT_BUTTON = document.querySelector('.search-result__button');
const SEARCH_RESULT_CARDS = document.querySelector('.search-result__cards');
const SEARCH_PRELOADER = document.querySelector('.search-preloader');
const NOT_FOUND = document.querySelector('.not-found');
const BLANK_IMAGE = 'https://i.kym-cdn.com/entries/icons/original/000/000/063/Rage.jpg';


//блок аналитики
const RESUME_REQUEST_KEY = document.querySelector('.resume__request_key');
const RESUME_NEWS_COUNTER = document.querySelector('.resume__news-counter');
const RESUME_TITLE_COUNTER = document.querySelector('.resume__title-counter');
const TABLE_MONTH = document.querySelector('.analytics__table-header_month');


//экспорт
export {
  ERROR_MESSAGES as errorMessages,
  SEARCH_FORM as searchForm,
  SEARCH_INPUT as searchInput,
  SEARCH_BUTTON as searchButton,

  GITHUB_USER as githubUser,
  GITHUB_REPO as githubRepo,
  GITHUB_COMMITS_LIMIT as commitsLimit,
  COMMITS_CONTAINER as commitsContainer,
  COMMITS as commits,

  NEWS_API_URL as newsApiUrl,
  NEWS_API_KEY as newsApiKey,
  NEWS_LIMIT as newsLimit,
  NEWS_LANGUAGE as newsLanguage,
  DAYS_COUNTER as daysCounter,

  SEARCH_RESULT as searchResult,
  SEARCH_RESULT_BUTTON as searchResultButton,
  SEARCH_RESULT_CARDS as searchResultCards,
  SEARCH_PRELOADER as searchPreloader,
  NOT_FOUND as notFound,
  BLANK_IMAGE as blankImage,

  WEEK as week,
  RESUME_REQUEST_KEY as resumeRequestKey,
  RESUME_NEWS_COUNTER as resumeRequestCounter,
  RESUME_TITLE_COUNTER as resumeTitleKey,
  TABLE_MONTH as tableMonth,

};