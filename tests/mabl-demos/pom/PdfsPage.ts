import {Locator, Page} from '@playwright/test';

export class PdfsPage {
  readonly page: Page;
  downloadImage: Locator;
  downloadPdf: Locator;
  embeddedPdf: Locator;
  generatedPdf: Locator;
  formGeneratedPdf: Locator;

  constructor(page: Page) {
    this.page = page;
    this.downloadImage = page.locator("a:has-text('download image')");
    this.downloadPdf = page.locator("a:has-text('download pdf')");
    this.embeddedPdf = page.locator("a:has-text('embedded pdf')");
    this.generatedPdf = page.locator("a:has-text('generated pdf')");
    this.formGeneratedPdf = page.locator("a:has-text('form generated pdf')");
  }
}
