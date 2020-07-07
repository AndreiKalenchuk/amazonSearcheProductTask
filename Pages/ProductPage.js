import BasePage from "./BasePage";

class ProductPage extends BasePage{

    get productTitle(){
        return $('#productTitle');
    }
}
export default new ProductPage();