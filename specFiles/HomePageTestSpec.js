var orangeHomePage = require('../Pages/HomePage.js');

describe('To verify login', function(){
    it('should verify login functionality', async function(){
        browser.ignoreSynchronization = true; 
        await orangeHomePage.get();
        await orangeHomePage.setName('admin');
        await orangeHomePage.setPassword('admin');
        await orangeHomePage.clickSignButton();
    });
})