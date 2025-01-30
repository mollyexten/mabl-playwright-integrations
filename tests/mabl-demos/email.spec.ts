import {SandboxPage} from './pom/SandboxPage';
import { expect, test } from "../fixtures";

test('Validate emails can be received using mabl sandbox app', async ({
  page,
  mabl,
}) => {
  await page.goto('https://sandbox.mabl.com');
  const sandbox = new SandboxPage(page);
  await sandbox.maybeWaitForReady();
  const mailboxPage = await sandbox.goToMailboxPage();
  const emailAddress = await mabl.createMailBoxAddress();
  console.log(`Email address: ${emailAddress}`);
  const subject = 'Test email';
  const body = 'This is a test email';
  await mailboxPage.fillOutAndSendEmail(emailAddress, subject, body);
  const mablEmail = await mabl.waitForEmail(emailAddress, page, {subject});
  await mablEmail.open();
  expect(await mablEmail.getToAddress()).toBe(emailAddress);
  expect(await mablEmail.getSubject()).toBe(subject);
  expect(await mablEmail.getBodyText()).toBe(body);
  expect(await mablEmail.getFromAddress()).toBe('test_mailer@m.mablmail.com');
});
