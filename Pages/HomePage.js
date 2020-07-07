import BasePage from "./BasePage";

class HomePage extends BasePage {
    open(path) {
        super.open(path);
    }

    get selectYourAddress() {
        return $('#glow-ingress-line2');
    }

    get searchInputField() {
        return $('#twotabsearchtextbox');
    }

    get searchBtn() {
        return $('input[type="submit"]');
    }

}

export default new HomePage();