import LoginPage from '../pageobjects/login.page.js'
import HomePage from '../pageobjects/home.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('fres.co from home page ', () => {
    it('should enter with clicking submit button', async () => {
        await
        
        await HomePage.open();
        await HomePage.enterSpacePage();
        await expect(SecurePage.conferenceMask).toBeExisting();

    }),
        it('should enter login page with clicking login button', async () => {
            await

            await HomePage.open();
            await HomePage.enterLoginPage();

        })
})


