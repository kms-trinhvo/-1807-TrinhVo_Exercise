import { defineConfig } from "@playwright/test";

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  reporter: [['html'], ['list']],

  testDir: "./tests",

  // Time out
  timeout: 60 * 1000,
  expect: {
    timeout: 2 * 60 * 1000,
  },
  // fullyParallel: true,
  workers: 2,
  use: {
    actionTimeout: 60 * 1000,
    navigationTimeout: 3 * 60 * 1000,
    trace: "off",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
    },

    // {
    //   name: 'firefox',
    // },

    // {
    //   name: 'webkit',
    // },
  ],
});
