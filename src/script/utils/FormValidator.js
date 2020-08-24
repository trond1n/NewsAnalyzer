export default class FormValidate {

  constructor(form, input, button, errors) {
    this.form = form;
    this.input = input;
    this.button = button;
    this.errors = errors;
    this.notice = this.form.querySelector('.search__container_error');
  }


  //выводим ошибку
  checkInputValidity() {
    if (this.input.validity.patternMismatch) {
      this.input.setCustomValidity(this.errors.patternMismatch);
    } else if (this.input.validity.valueMissing) {
      this.input.setCustomValidity(this.errors.valueMissing);
    } else if (this.input.validity.tooShort) {
      this.input.setCustomValidity(this.errors.tooShort);
    } else {
      this.input.setCustomValidity('');
    }
    this.notice.textContent = this.input.validationMessage;
  }


  //состояния кнопки
  setSubmitButtonState() {
    if (!this.form.checkValidity()) {
      this.button.setAttribute('disabled', true);

    } else {
      this.button.removeAttribute('disabled');
    }
  }


  //создаем событие
  setEventListeners() {
    this.form.addEventListener('input', () => {
      this.checkInputValidity();
      this.setSubmitButtonState();
    });
  }
  //выключаем форму
}