export default class BasePage {
    open(path) {
        browser.url('');
        browser.maximizeWindow();
        browser.deleteAllCookies();
    }
}