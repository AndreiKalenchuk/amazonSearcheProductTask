export default class productInstances {
    constructor(element) {
        this.element = element;
    }

     get getTitle() {
        return this.element.$('.a-size-medium.a-color-base.a-text-normal').getText();
    }
}