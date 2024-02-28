import type { Locator, Page } from '@playwright/test';

export class SusiSignUp {
  constructor(private page: Page) {}

  // locators //

  public logoImage: Locator = this.page.locator('xpath=(//img[@alt="Bitly"])[1]');

  public logInLink: Locator = this.page.locator('xpath=//a[text()="Log in"]');

  public logInWithSsoLink: Locator = this.page.locator('xpath=//a[text()="Log in with SSO"]');

  public emailInput: Locator = this.page.locator('xpath=//input[@type="email"]');

  public emailInputFeErr: Locator = this.page.locator('//div[text()="Please enter your email address"]');

  public passwordInput: Locator = this.page.locator('xpath=//input[@type="password"]');

  public passwordInputOneLetterFeErr: Locator = this.page.locator('xpath=//span[text()="One letter"]');

  public passwordInputOneNumberFeErr: Locator = this.page.locator('xpath=//span[text()="One letter"]');

  public passwordInputOneSpecCharFeErr: Locator = this.page.locator('xpath=//span[text()="One letter"]');

  public passwordInputNineOrMoreCharFeErr: Locator = this.page.locator('xpath=//span[text()="9 or more characters"]');

  public createFreeAccountButton: Locator = this.page.getByRole('button', {
    name: 'Create free account'
  });

  public continueWithGoogleButton: Locator = this.page.locator('xpath=(//a[@data-testid="google-button"])[1]');

  public termsOfServiceLink: Locator = this.page.getByRole('link', { name: 'Terms of Service' });

  public PrivacyPolicyLink: Locator = this.page.getByRole('link', { name: 'Privacy Policy' });

  public AcceptableUsePolicyLink: Locator = this.page.getByRole('link', { name: 'Acceptable Use Policy' });

  public enterValidEmailBeErr: Locator = this.page.locator('xpath=//div[text()="Please enter a valid email address"]');

  // page object methods //

  async goto(): Promise<void> {
    await this.page.goto('/a/sign_up');
  }
}
