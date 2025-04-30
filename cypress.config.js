const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.youtube.com", // Set base URL to YouTube
    chromeWebSecurity: false, // Disable Chrome's strict security checks
    defaultCommandTimeout: 20000, // Increase timeout for slow elements
    retries: 2, // Retry failed tests up to 2 times
    setupNodeEvents(on, config) {
      // Add valid Node event listeners here if needed (e.g., logging, screenshots)
    },
  },
});
