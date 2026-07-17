const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    chromeWebSecurity: false,
    video: true,

    setupNodeEvents(on, config) {
    },
  },
});