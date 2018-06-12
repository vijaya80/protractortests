var OrangeHRMDashboardPage = function(){
    var firstLevelMenu = element.all(by.xpath('//b'));
    var textOfFirstLevelMenuItems;
    var options;
   // var selectOption = element(by.xpath("//b[text()='Admin']"));

    
   this.getAllFirstLevelMenuItems = async function(valueText){
       await firstLevelMenu.map(function(ele){
           return ele.getText();

       }).then(function(textOfFirstLevelMenuItems){
          console.log("Element in the Header : " + textOfFirstLevelMenuItems);
          if(textOfFirstLevelMenuItems.includes(valueText))
          {
            browser.actions().mouseMove(element(by.linkText(valueText))).perform();  
            console.log('Able to click');     
          }
          else{
              console.log('Unable to click')
          }
       })
   }

  /*  this.mouseHoverActions = async function(){

       if(textOfFirstLevelMenuItems.includes("Admin"))
       {
       
       } */
      
  // }

}

module.exports = new OrangeHRMDashboardPage();