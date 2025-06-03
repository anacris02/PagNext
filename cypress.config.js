const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "1aojca",
  e2e: {
    
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      
    
    },
  },
});
