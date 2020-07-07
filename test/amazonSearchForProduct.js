import HomePage from '../Pages/HomePage';
import SearchListPage from "../Pages/SearchListPage";
import {searchFor, acer, acer2} from "../data/dataExpected";
import productPage from "../Pages/ProductPage";


describe('AMAZON', () => {
    it('open page verify title', () => {
        HomePage.open();
        browser.waitUntil(() =>
                HomePage.selectYourAddress.isDisplayed(),
            5000, 'Element not displayed');
    });

    it('set searching product, click on search BTN', () => {
        HomePage.searchInputField.setValue(searchFor);
        HomePage.searchBtn.click();
    });

    it('should verify page title', () => {
        expect(browser).toHaveTitleContaining(searchFor);
    });
    /*
        it('should sort by Customer review', () => {
            HomePage.sortByDropDown.waitForDisplayed();
            HomePage.sortByDropDown.selectByAttribute('value', 'review-rank');[value="review-rank"]
       browser.pause(2000)
        });*/

    it('check brand Acer ', () => {
        SearchListPage.acerCheckBox.waitForClickable();
        SearchListPage.acerCheckBox.click();
    });

    it('check brand 4GB ', () => {
        SearchListPage.gb4CheckBox.waitForClickable();
        SearchListPage.gb4CheckBox.click();
        expect(SearchListPage.inputCheckBox.isSelected()).toBe(true);
    });
    /*
            it('set price range', () => {
                SearchListPage.setMinPrice();
                SearchListPage.setMaxPrice();
                SearchListPage.submitBtn.click();
            });
        */


    it('looking for sale price ', () => {
        let beforeSalePrice, salePrice, difference = 0, url, productTitle;
        do {
            const length = SearchListPage.listOfProducts.length;
    console.log(length + '  length................................')
            for (let i = 0; i < length; i++) {
                if (SearchListPage.onSaleProduct(i).isExisting()) {
                    beforeSalePrice = SearchListPage.getBeforeSalePrice(i);
                    salePrice = SearchListPage.getSalePrice(i);
    console.log(salePrice + '  salePrice................................')
    console.log(beforeSalePrice + '  beforeSalePrice................................')
                    const temp = 100 - (beforeSalePrice / salePrice) * 100;
                    if (difference < temp) {
                        difference = temp;
                        url = SearchListPage.getProductUrl(i);
                        productTitle = SearchListPage.getProductTitle(i);
    console.log(url + '  url................................')
    console.log(productTitle + '  productTitle................................')
                    }
                }
            }
            SearchListPage.nextBtn.click();
            browser.pause(500);
        } while (SearchListPage.nextBtn.isExisting());

        browser.url(url);
        expect(browser).toHaveTitleContaining(productTitle);
        expect(productPage.productTitle).toHaveText(productTitle);
    });
});