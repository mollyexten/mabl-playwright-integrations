import {expect, test} from './utils/fixtures';

const MABL_DATABASE_CONNECTION = process.env.MABL_DATABASE_ID!;

test('Evaluate a mabl database query', async ({page, mabl}) => {
  await page.goto('https://www.mabl.com');

  const dbQuery = 'SELECT * from pets LIMIT 15';
  const result = await mabl.executeQuery(MABL_DATABASE_CONNECTION, dbQuery, []);
  expect(result.metadata?.status).toBe('success');
  expect(result.columns?.length).toEqual(5);
  expect(result.rows?.length).toEqual(15);
});
