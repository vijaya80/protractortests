var orangeHomePage = require('../Pages/HomePage.js');
var orangeDashboardPage = require('../Pages/DashboardPage');
//Import excel JS package
var Excel = require('exceljs');
var wb = new Excel.Workbook();
wb.xlsx.readFile("./testData/test.xlsx").then(function(){
    var sh = wb.getWorksheet("Sheet1");
    var dataFromExcel = sh.getRow(2).getCell(6).value;
    console.log("value frome excel: " + dataFromExcel)
});

describe('To verify login', function(){
    it('should verify login functionality', async function(){
        browser.ignoreSynchronization = true; 

        await orangeHomePage.get();
        await orangeHomePage.setName('admin');
        await orangeHomePage.setPassword('admin');
        await orangeHomePage.clickSignButton();
        //
        browser.sleep(3000);
        await orangeDashboardPage.getAllFirstLevelMenuItems('Leave');
        browser.sleep(2000);
      //  await orangeDashboardPage.mouseHoverActions();
     
    });
});
