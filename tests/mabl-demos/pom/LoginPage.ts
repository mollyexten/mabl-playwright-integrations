import {Locator, Page} from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly bodyInput: Locator;
  readonly sendButton: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("[name='email']");
    this.passwordInput = page.locator("[name='password']");
    this.loginButton = page.locator("span:has-text('log in')");
  }

  enterEmail(email: string): Promise<void> {
    return this.usernameInput.fill(email);
  }

  enterPassword(password: string): Promise<void> {
    return this.passwordInput.fill(password);
  }

  async fillOutAndSubmitLoginForm(
    email: string,
    password: string,
  ): Promise<void> {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.loginButton.click();
    await this.page.waitForSelector(`span:has-text('log out')`).catch(() => {
      throw new Error('Login failed');
    });
  }
}
