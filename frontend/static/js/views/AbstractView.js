export default class {
    constructor(params) {
        this.params = params;
    }

    setTitle(title) {
        document.title = title + " | Look Signs";
    }

    async getHtml() {
        return "";
    }
}
