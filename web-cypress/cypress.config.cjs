const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = defineConfig({
  video: true,
  screenshotOnRunFailure: true,
  retries: 0,
  viewportWidth: 1366,
  viewportHeight: 900,
  defaultCommandTimeout: 15000,
  pageLoadTimeout: 90000,
  requestTimeout: 30000,
  responseTimeout: 30000,
  reporter: 'junit',
  reporterOptions: { mochaFile: 'reports/junit-[hash].xml', toConsole: false },
  e2e: {
    baseUrl: 'https://automationexercise.com',
    specPattern: 'cypress/e2e/features/**/*.feature',
    supportFile: 'cypress/support/e2e.js',
    testIsolation: true,
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on('file:preprocessor', createBundler({ plugins: [createEsbuildPlugin(config)] }));
      return config;
    }
  }
});
