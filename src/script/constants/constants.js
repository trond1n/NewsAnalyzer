//ошибки
const ERROR_MESSAGES = {
    valueMissing: 'Это обязательное поле',
    tooShort: 'Должно быть от 2 до 30 символов',
};
//форма поиска
const SEARCH_FORM = document.querySelector('.search__container');
const SEARCH_INPUT = document.querySelector('.search__container_input');
const SEARCH_BUTTON = document.querySelector('.search__container_button');

//экспорт
export { ERROR_MESSAGES as errorMessages, SEARCH_FORM as searchForm, SEARCH_INPUT as searchInput, SEARCH_BUTTON as searchButton };