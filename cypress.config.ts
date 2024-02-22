import { defineConfig } from "cypress";

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: { 
    baseUrl:  "http://localhost:3000/",
      defaultCommandTimeout: 20000,
      responseTimeout: 200000,
      requestTimeout: 20000,
      pageLoadTimeout: 50_0000,
      numTestsKeptInMemory: 2,
      experimentalMemoryManagement: true,
      viewportWidth: 1920,
      viewportHeight: 1080, 
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on); 
    },

    specPattern: "**/*.cy.ts" 
  },
});
