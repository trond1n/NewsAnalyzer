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
const GITHUB_USER = "trond1n";
const GITHUB_REPO = "newsanalyzer";
const GITHUB_COMMITS_LIMIT = 20;
const COMMITS_CONTAINER = document.querySelector(".history__cards");
const COMMITS = document.querySelector(".history");



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
};


