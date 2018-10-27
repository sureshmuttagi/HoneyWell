exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'e2e/*.js'
  ],

  multiCapabilities:[{'browserName': 'chrome'}],

  // The address of a running selenium server.
  //seleniumAddress: 'http://localhost:4444/wd/hub',

  //framework: 'jasmine',

  //jasmineNodeOpts: {
  //  defaultTimeoutInterval: 30000
  //}
};
