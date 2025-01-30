import {expect, test} from '../fixtures';
import {SandboxPage} from './pom/SandboxPage';

const MFA_CREDENTIALS_ID = process.env.MABL_CREDENTIALS_ID!;

test('Validate that we can get an MFA token from mabl', async ({
  page,
  mabl,
}) => {
  await page.goto('https://sandbox.mabl.com');
  const mfaToken = await mabl.getMfaCode(MFA_CREDENTIALS_ID);
  expect(mfaToken).toBeTruthy();
  expect(mfaToken.length).toBe(6);
});

test('Validate that we can get and use credentials from mabl', async ({
  page,
  mabl,
}) => {
  await page.goto('https://sandbox.mabl.com');
  const sandbox = new SandboxPage(page);
  await sandbox.maybeWaitForReady();
  const loginPage = await sandbox.goToLoginPage();
  const creds = await mabl.getCredentials(MFA_CREDENTIALS_ID);
  // NOTE: the login function validates the login was successful
  await loginPage.fillOutAndSubmitLoginForm(creds.username, creds.password);
});
