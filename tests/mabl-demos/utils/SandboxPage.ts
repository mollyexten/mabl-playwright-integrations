import {type Locator, type Page} from '@playwright/test';
import {MailboxPage} from './MailboxPage';
import {LoginPage} from './LoginPage';
import {PdfsPage} from './PdfsPage';

export class SandboxPage {
  readonly page: Page;
  mailboxButton: Locator;
  loginButton: Locator;
  pdfsButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.mailboxButton = page.locator("a:has-text('mailbox')");
    this.loginButton = page.locator("a:has-text('simulated login')");
    this.pdfsButton = page.locator("a:has-text('downloads and pdfs')");
  }

  async goToMailboxPage(): Promise<MailboxPage> {
    await this.mailboxButton.click();
    return new MailboxPage(this.page);
  }

  async goToLoginPage(): Promise<LoginPage> {
    await this.loginButton.click();
    return new LoginPage(this.page);
  }

  async goToPdfsPage(): Promise<PdfsPage> {
    await this.pdfsButton.click();
    return new PdfsPage(this.page);
  }

  async maybeWaitForReady(): Promise<void> {
    await this.page
      .waitForSelector('h3 >> text=Welcome to the mabl sandbox!')
      .catch(() => {
        // Do nothing
      });
  }
}
