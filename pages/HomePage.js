var OrangeHRMHomePage = function(){
    var userName = element(by.id('txtUsername'));
    var passWord = element(by.id('txtPassword'));
    var signInbtn = element(by.id('btnLogin'));
    /*
     Asynchronous process - process which does not depend on other outcome.
     Result of Asynchronous operation is known as promise.
    */
   this.get = async function(){
       await  browser.get('http://opensource.demo.orangehrmlive.com/index.php/auth/login');
   }

   this.setName = async function(name){
       await userName.sendKeys(name);
   }

    this.setPassword = async function(pass){
        await passWord.sendKeys(pass);
    }
    
    this.clickSignButton = async function(){
        await signInbtn.click();
    }
}

module.exports = new OrangeHRMHomePage();