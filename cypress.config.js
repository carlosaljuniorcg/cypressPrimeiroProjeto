const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'cbtat9',
  e2e: {
    baseUrl: 'https://alura-fotos.herokuapp.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


