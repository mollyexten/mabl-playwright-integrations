# mabl-playwright-integrations
This repository provides examples, tools, and utilities for integrating Mabl and Playwright.

# Installation

## In your mabl workspace

### Create an API key

TODO

### Get your workspace ID

Go to **Settings > Workspace** in the mabl app to get your workspace ID. Alternatively, run `mabl workspaces list` in the mabl CLI.

### Create a Database configuration

TODO

Note: This demo project assumes that the database has a `pets` table.

### Create credentials

TODO

## Create .env file

The best way to use this demo project is to create a `.env` file in the root of the project with the following content:

```
MABL_API_KEY=your_api_key
MABL_WORKSPACE_ID=your_workspace_id
DATABASE_ID=your_database_id
MABL_CREDENTIALS_ID=your_credentials_id
```
