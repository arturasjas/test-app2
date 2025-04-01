import { defineConfig, devices } from '@playwright/test';
const baseUrl = 'http://localhost:4200';
/**
* Read environment variables from file.
* https://github.com/motdotla/dotenv
*/
// require('dotenv').config();

/**
* See https://playwright.dev/docs/test-configuration.
*/
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env['CI'],

  retries: 2,

  /* Opt out of parallel tests on CI. */
  workers: 5,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: process.env.CI ? [['junit', { outputFile: 'playwright-result.xml' }], ['html']] : 'html',
  reporter: 'list',

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: baseUrl,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    viewport: {
      width: 1920,
      height: 720,
    },
    screenshot: 'only-on-failure',
  },

  /* Configure projects for major browsers */
  projects: process.env['CI']
    ? [{ name: 'GoogleChrome', use: { ...devices['Desktop Chrome'] } }]
    : [
        { name: 'GoogleChrome', use: { ...devices['Desktop Chrome'] } },
        // { name: 'webkit', use: { ...devices['Desktop Safari'] } },
        // { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
      ],

  /* Run your local dev server before starting the tests */
  webServer: {
    // Run on a production build when running in CI
    command: 'ng serve',
    url: baseUrl,
    reuseExistingServer: false,
    timeout: 180000,
  },
});