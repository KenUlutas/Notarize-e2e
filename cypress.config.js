const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity:false,
    defaultCommandTimeout:25000  
  },
  

});
