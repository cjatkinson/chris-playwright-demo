import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';

// See https://playwright.dev/docs/test-configuration
export default defineConfig({
  testDir: './tests',

  // Run tests in files in parallel
  fullyParallel: true,

  // Fail the build on CIRCLECI if you accidentally left test.only in the source code
  forbidOnly: !!process.env.CIRCLECI,

  // Retry on CI only
  retries: process.env.CIRCLECI ? Number(process.env.RETRIES) : 0,

  // Opt out of parallel tests on CI
  workers: process.env.CIRCLECI ? 1 : 2,

  // Reporter to use. See https://playwright.dev/docs/test-reporters
  reporter: process.env.CIRCLECI
    ? [
        [
          'junit',
          {
            outputFile: 'results.xml'
          }
        ]
      ]
    : [
        [
          'html',
          {
            open: 'on-failure'
          }
        ]
      ],

  // Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions
  use: {
    // Base URL to use in actions like `await page.goto('/')`
    baseURL: process.env.BASE_URL,

    // Capture screenshot after each test failure.jhnuj
    screenshot: 'only-on-failure',

    // Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer
    trace: 'on-first-retry'
  },

  // Configure projects for major browsers
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] }
    }

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] }
    // }

    // Test against mobile viewports

    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ]
});
