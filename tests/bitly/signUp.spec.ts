import { test, expect } from '@playwright/test';
import { SusiSignUp } from '../../pages/bitly/susi.signUp.page';
import { AppHome } from '../../pages/bitly/app.home.page';
import { generateRandomEmailAddress, generateRandomPassword } from '../../utils/staticDataGenerator';

// group dependent tests to ensure they will always run together and in order
test.describe.configure({ mode: 'serial' });

test('Validate page title is correct and expected elements are displayed', async ({ page }) => {
  const signUp = new SusiSignUp(page);
  await signUp.goto();
  await expect(page).toHaveTitle('Sign up for the Bitly Connections Platform');
  const expectedElements = [
    signUp.logoImage,
    signUp.logInLink,
    signUp.logInWithSsoLink,
    signUp.emailInput,
    signUp.passwordInput,
    signUp.createFreeAccountButton,
    signUp.continueWithGoogleButton,
    signUp.termsOfServiceLink,
    signUp.PrivacyPolicyLink,
    signUp.AcceptableUsePolicyLink
  ];
  for (const element of expectedElements) {
    await expect(element).toBeVisible();
  }
});
test('Validate front-end error handling', async ({ page }) => {
  const signUp = new SusiSignUp(page);
  await signUp.goto();
  await signUp.createFreeAccountButton.click();
  const expectedElements = [
    signUp.emailInputFeErr,
    signUp.passwordInputOneLetterFeErr,
    signUp.passwordInputOneNumberFeErr,
    signUp.passwordInputOneSpecCharFeErr,
    signUp.passwordInputNineOrMoreCharFeErr
  ];
  for (const element of expectedElements) {
    await expect(element).toBeVisible();
  }
});
test('Validate back-end error handling', async ({ page }) => {
  const signUp = new SusiSignUp(page);
  const appHome = new AppHome(page);
  await signUp.goto();
  await signUp.emailInput.fill('test@test.com');
  await signUp.passwordInput.fill(generateRandomPassword(10));
  await signUp.createFreeAccountButton.click();
  await expect(signUp.enterValidEmailBeErr).toBeVisible();
});
test('Validate new user can create an account and be routed to the app', { tag: '@smoke' }, async ({ page }) => {
  const signUp = new SusiSignUp(page);
  const appHome = new AppHome(page);
  await signUp.goto();
  await signUp.emailInput.fill(generateRandomEmailAddress(5));
  await signUp.passwordInput.fill(generateRandomPassword(10));
  await signUp.createFreeAccountButton.click();
  await expect(appHome.header).toBeVisible();
});
