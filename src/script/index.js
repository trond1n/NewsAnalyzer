//импорты
import "../pages/index.css";
import FormValidate from '../script/utils/FormValidator.js';
import { errorMessages, searchForm, searchInput, searchButton } from '../script/constants/constants.js';

//валидируем форму
const formValidation = new FormValidate(searchForm, searchInput, searchButton, errorMessages);

//вешаем обработчик
formValidation.setEventListeners();
