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
Create a temporary email address, send a test email, and verify that the email is received with the correct details

### GenAI testing
Evaluate the state of the page `https://www.mabl.com` with a [GenAI Assertion](https://help.mabl.com/hc/articles/28810650854292)

### Database testing
Run a database query step to retrieve 15 rows from a "pets" table column using a connection from your mabl workspace

### PDF testing
Download and validate the contents of a PDF from the mabl sandbox

### Multi-factor Authentication and credentials testing
TODO

