import type { Locator, Page } from '@playwright/test';

export class SusiCookieBanner {
  constructor(private page: Page) {}

  // locators //

  public acceptAllButton: Locator = this.page.getByRole('button', { name: 'Accept All' });

  // page object methods //

  async clickAcceptAllButtonIfVisible() {
    if (await this.acceptAllButton.isVisible()) {
      await this.acceptAllButton.click();
    }
  }
}
