import "../pages/index.css";
import FormValidator from '../script/utils/FormValidator.js';

const searchForm = document.querySelector('.search__container');
const searchInput = document.querySelector('.search__container_input');
const searchButton = document.querySelector('.search__container_button');
const validateForm = new FormValidator(searchForm, searchInput, searchButton);
validateForm.setEventListeners();