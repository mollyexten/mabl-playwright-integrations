# mabl-playwright-integrations
This repository provides examples, tools, and utilities for integrating Mabl and Playwright.

## Project setup
To install the `@mablhq/playwright-tools` package, you will need:
- [Playwright 1.43.1 or greater](https://playwright.dev/docs/intro#system-requirements)
- [Your mabl workspace ID](https://help.mabl.com/hc/articles/17782745983636)
- A [mabl API key](https://help.mabl.com/hc/articles/17776006239764) of type "Command Line Interface"
- [Credential ID](https://help.mabl.com/hc/articles/17782745983636) - create [mabl credentials](https://help.mabl.com/hc/articles/24758878555412) and get the ID
- [Database ID](https://help.mabl.com/hc/articles/17782745983636) - create a [database connection](https://help.mabl.com/hc/articles/27563281835284) and get the ID


> Note: This example project assumes that the database has a `pets` table.

## Create .env file

The best way to use this demo project is to create a `.env` file in the root of the project with the following content:

```
MABL_API_KEY=your_api_key
MABL_WORKSPACE_ID=your_workspace_id
DATABASE_ID=your_database_id
MABL_CREDENTIALS_ID=your_credentials_id
```
## Usage
### Email testing
Create a temporary email address, send a test email, and open it to verify that the email is received with the correct details:
```typescript
  const emailAddress = await mabl.createMailBoxAddress();
  console.log(`Email address: ${emailAddress}`);
  const subject = 'Test email';
  const body = 'This is a test email';
  await mailboxPage.fillOutAndSendEmail(emailAddress, subject, body);
  const mablEmail = await mabl.waitForEmail(emailAddress, page, {subject});
  await mablEmail.open();
```
[snippet source](https://github.com/mablhq/mabl-playwright-integrations/blob/10ad92514d993016a479f39b9e2063c3dc39eaf9/tests/mabl-demos/email.spec.ts#L12C3-L18C26)

### GenAI testing
Evaluate the state of the page `https://www.mabl.com` with a [GenAI Assertion](https://help.mabl.com/hc/articles/28810650854292):
```typescript
  await page.goto('https://www.mabl.com');
  const prompt =
    'Please validate that the web page you are looking at is a marketing page for a company named mabl which does automated UI testing';
  const result = await mabl.evaluateGenAiAssertion(page, prompt);
```
[snippet source](https://github.com/mablhq/mabl-playwright-integrations/blob/10ad92514d993016a479f39b9e2063c3dc39eaf9/tests/mabl-demos/genAi.spec.ts#L7C3-L11C66)

### Database testing
Run a database query step to retrieve 15 rows from a "pets" table column using a connection from your mabl workspace:
```typescript
  const dbQuery = 'SELECT * from pets LIMIT 15';
  const result = await mabl.executeQuery(MABL_DATABASE_CONNECTION, dbQuery, []);
  expect(result.metadata?.status).toBe('success');
  expect(result.columns?.length).toEqual(5);
  expect(result.rows?.length).toEqual(15);
```
[snippet source](https://github.com/mablhq/mabl-playwright-integrations/blob/10ad92514d993016a479f39b9e2063c3dc39eaf9/tests/mabl-demos/database.spec.ts#L8C3-L12C43)

### PDF testing
Download and validate the contents of a PDF from the mabl sandbox
```typescript
// use the mabl tools to open the file in a new Page
  const pageForPdf = await browser.newPage();

  await mabl.openPdfFile(pdfPath, pageForPdf);

  const element = pageForPdf.locator('text=Journey run export');
  expect(await element.isVisible()).toBeTruthy();
```
[snippet source](https://github.com/mablhq/mabl-playwright-integrations/blob/10ad92514d993016a479f39b9e2063c3dc39eaf9/tests/mabl-demos/pdf.spec.ts#L25C3-L31C50)

### MFA testing
Log in with mabl MFA credentials
```typescript
  const loginPage = await sandbox.goToLoginPage();
  const creds = await mabl.getCredentials(MFA_CREDENTIALS_ID);
  // NOTE: the login function validates the login was successful
  await loginPage.fillOutAndSubmitLoginForm(creds.username, creds.password);
```
[snippet source](https://github.com/mablhq/mabl-playwright-integrations/blob/10ad92514d993016a479f39b9e2063c3dc39eaf9/tests/mabl-demos/credentials.spec.ts#L23C3-L26C77)

