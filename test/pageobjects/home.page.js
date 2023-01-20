

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */

    get btnLogin(){
        return $('.landing-header__button');
    }

    get btnEnterSpace () {
        return $('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async enterSpacePage () {
        await this.btnEnterSpace.click();
    }

    async enterLoginPage () {
        await this.btnLogin.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

export default new HomePage();
