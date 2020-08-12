export default class SearchInput {

    constructor(searchForm, callback) {
        this.searchForm = searchForm;
        this.callback = callback;
    }

    setSubmitListener() {
        this.searchForm.addEventListener('submit', this.callback);
    }
}
