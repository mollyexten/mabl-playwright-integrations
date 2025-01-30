import {SandboxPage} from './pom/SandboxPage';
import {expect, test} from '../fixtures';

test('Validate PDFs downloaded from the mabl sandbox app can be tested against', async ({
  browser,
  page,
  mabl,
}) => {
  await page.goto('https://sandbox.mabl.com');
  const sandbox = new SandboxPage(page);
  await sandbox.maybeWaitForReady();
  const pdfPage = await sandbox.goToPdfsPage();

  // get ready for the download
  const downloadPromise = page.waitForEvent('download');

  // click to download PDF
  await pdfPage.downloadPdf.click();

  // wait for download to complete
  const download = await downloadPromise;

  const pdfPath = await download.path();

  // use the mabl tools to open the file in a new Page
  const pageForPdf = await browser.newPage();

  await mabl.openPdfFile(pdfPath, pageForPdf);

  const element = pageForPdf.locator('text=Journey run export');
  expect(await element.isVisible()).toBeTruthy();
});
