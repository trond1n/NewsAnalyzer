export default class SearchInput {

  constructor(form, callback) {
    this.form = form;
    this.callback = callback;
  }

  submit() {
    this.form.addEventListener('submit', this.callback);
  }
}