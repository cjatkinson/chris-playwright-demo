import { test, expect } from '@playwright/test';
import { SusiSignUp } from '../../pages/bitly/susi.signUp.page';
import { SusiCookieBanner } from '../../pages/bitly/susi.cookieBanner.page';
import { AppHome } from '../../pages/bitly/app.home.page';
import { generateRandomEmailAddress, generateRandomPassword } from '../../utils/staticDataGenerator';

// group dependent tests to ensure they will always run together and in order
test.describe.configure({ mode: 'serial' });

test.describe(
  'signUp',
  {
    annotation: { type: 'url', description: 'https://bitly.com/a/sign_up' }
  },
  () => {
    test('Validate page title is correct and expected elements are displayed', async ({ page }) => {
      const susiSignUp = new SusiSignUp(page);
      await susiSignUp.goto();
      await expect(page).toHaveTitle('Sign up for the Bitly Connections Platform');
      const expectedElements = [
        susiSignUp.logoImage,
        susiSignUp.logInLink,
        susiSignUp.logInWithSsoLink,
        susiSignUp.emailInput,
        susiSignUp.passwordInput,
        susiSignUp.createFreeAccountButton,
        susiSignUp.continueWithGoogleButton,
        susiSignUp.termsOfServiceLink,
        susiSignUp.PrivacyPolicyLink,
        susiSignUp.AcceptableUsePolicyLink
      ];
      for (const element of expectedElements) {
        await expect(element).toBeVisible();
      }
    });
    test('Validate front-end error handling', async ({ page }) => {
      const susiSignUp = new SusiSignUp(page);
      await susiSignUp.goto();
      await susiSignUp.createFreeAccountButton.click();
      const expectedElements = [
        susiSignUp.emailInputFeErr,
        susiSignUp.passwordInputOneLetterFeErr,
        susiSignUp.passwordInputOneNumberFeErr,
        susiSignUp.passwordInputOneSpecCharFeErr,
        susiSignUp.passwordInputNineOrMoreCharFeErr
      ];
      for (const element of expectedElements) {
        await expect(element).toBeVisible();
      }
    });
    test('Validate back-end error handling', async ({ page }) => {
      const susiSignUp = new SusiSignUp(page);
      const susiCookieBanner = new SusiCookieBanner(page);
      await susiSignUp.goto();
      await susiCookieBanner.clickAcceptAllButtonIfVisible();
      await susiSignUp.emailInput.fill('test@test.com');
      await susiSignUp.passwordInput.fill(generateRandomPassword(10));
      await susiSignUp.createFreeAccountButton.click();
      await expect(susiSignUp.enterValidEmailBeErr).toBeVisible();
    });
    test('Validate new user can create an account and be routed to the app', { tag: '@smoke' }, async ({ page }) => {
      const susiSignUp = new SusiSignUp(page);
      const susiCookieBanner = new SusiCookieBanner(page);
      const appHome = new AppHome(page);
      await susiSignUp.goto();
      await susiCookieBanner.clickAcceptAllButtonIfVisible();
      await susiSignUp.emailInput.fill(generateRandomEmailAddress(5));
      await susiSignUp.passwordInput.fill(generateRandomPassword(10));
      await susiSignUp.createFreeAccountButton.click();
      // This will not work because the @edify.com domain is blocked by Bitly abuse mitigation
      // It was included to demonstrate the framework's fail state
      await expect(appHome.header).toBeVisible();
    });
  }
);
