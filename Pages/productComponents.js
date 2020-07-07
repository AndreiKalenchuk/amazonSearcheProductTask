export default class ProductComponents {
    constructor(element) {
        this.element = element;
    }

    get getBeforeSalePrice() {
        const el = this.element.$('.a-price.a-text-price');
        if (el.isExisting()) {
            return el.getText().slice(1);
        }
        return undefined;
    }

    get getWholePrice() {
        const priceWhole = this.element.$('.a-price-whole').getText();
        const priceFraction = this.element.$('.a-price-fraction').getText();
        return `${priceWhole}.${priceFraction}`;
    }

    get getUrl() {
        return this.element.$('.a-link-normal').getAttribute('href');
    }

    get getTitle() {
        return this.element.$('.a-size-medium.a-color-base.a-text-normal').getText();
    }
}

