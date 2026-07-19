const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    pageLoadTimeout: 90000,
    defaultCommandTimeout: 90000,
    chromeWebSecurity: false,
    video: true,

    setupNodeEvents(on, config) {
    },
  },
});