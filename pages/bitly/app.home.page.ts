import type { Locator, Page } from '@playwright/test';

export class AppHome {
  constructor(private page: Page) {}

  // locators //

  public header: Locator = this.page.getByRole('heading', { name: 'Your Connections Platform' });

  // page object methods //
}
