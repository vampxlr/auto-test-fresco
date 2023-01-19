import LoginPage from '../pageobjects/login.page.js'
import HomePage from '../pageobjects/home.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('fres.co ', () => {
    it('should enter with clicking submit button', async () => {
        await 
       
        // await LoginPage.open()

        // await LoginPage.login('tomsmith', 'SuperSecretPassword!')
         await HomePage.open();
         await HomePage.submit();
        // await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.conferenceMask).toBeExisting();
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!')
    })
})


