import BasePage from "./BasePage";
import productComponents from "./productComponents";

class SearchListPage extends BasePage {

    get acerCheckBox() {
        return $$('#brandsRefinements .a-icon.a-icon-checkbox')[0];
    }

    get gb4CheckBox() {
        return $('[aria-label="4 GB"] div');
    }

    get inputCheckBox() {
        return $('[aria-label="4 GB"] input');
    }

    setMinPrice() {
        const el = $('#low-price');
        el.waitForDisplayed();
        el.setValue(150);
    }

    setMaxPrice() {
        const el = $('#high-price')
        el.waitForDisplayed();
        el.setValue(550);
    }

    get submitBtn() {
        return $('.a-button-input');
    }

    get nextBtn() {
        return $('li.a-last>a');
    }

    get listOfProducts() {
        return $$('[data-component-type="s-search-result"]');
    }

    onSaleProduct(index) { // 0
        return $(`[data-index="${index}"] .a-price.a-text-price`);
    }

    getBeforeSalePrice(index) {
        return this.onSaleProduct(index).getText().slice(1) *1;
    }

    getSalePrice(index) {
        const priceWhole = $(`[data-index="${index}"] .a-price-whole`).getText();
        const priceFraction = $(`[data-index="${index}"] .a-price-fraction`).getText();
        return `${priceWhole}.${priceFraction}` *1;
    }

    getProductUrl(index) {
        return $(`[data-index="${index}"] .a-link-normal`).getAttribute('href');
    }

    getProductTitle(index) {
        return $(`[data-index="${index}"] .a-size-medium.a-color-base.a-text-normal`).getText();
    }

    /*    productModals(index) {
            return new productComponents(this.productWraperList[index]);
        }*/
}

export default new SearchListPage();