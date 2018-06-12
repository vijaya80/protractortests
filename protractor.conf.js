// An example configuration file.
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {

//  seleniumAddress: 'http://localhost:4444/wd/hub',

  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['./specFiles/MouseHoverSpec.js'],

  onPrepare: function(){
    jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
        savePath:'./testReport/report'
    })
  );
  },
  

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 300000
  }
};
