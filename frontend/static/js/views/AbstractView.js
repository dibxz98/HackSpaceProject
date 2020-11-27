export default class {
    constructor(params) {
        this.params = params;
        
    }

    //while change the view, then change the title 
    setTitle(title) {
        document.title = title;
    }

    async getHtml() {
        return "";
    }
}