export default class SearchInput {

    constructor(form, request) {
        this.form = form;
        this.request = request;
    }

    setSubmitListener() {
        this.searchForm.addEventListener('submit', this.request);
    }
}