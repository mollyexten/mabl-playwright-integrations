import {Locator, Page} from '@playwright/test';

export class MailboxPage {
  readonly page: Page;
  readonly toAddressInput: Locator;
  readonly subjectInput: Locator;
  readonly bodyInput: Locator;
  readonly sendButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.toAddressInput = page.locator("[name='to']");
    this.subjectInput = page.locator("[name='subject']");
    this.bodyInput = page.locator("[name='body']");
    this.sendButton = page.locator('button').filter({hasText: 'Send'});
  }

  async fillOutAndSendEmail(
    toAddress: string,
    subject: string,
    body: string,
  ): Promise<MailboxPage> {
    await this.toAddressInput.fill(toAddress);
    await this.subjectInput.fill(subject);
    await this.bodyInput.fill(body);
    await this.sendButton.click();
    return new MailboxPage(this.page);
  }
}
