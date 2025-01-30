import { expect, test } from "../fixtures";

test('Evaluate a GenAI assertion to validate the state of a page', async ({
  page,
  mabl,
}) => {
  await page.goto('https://www.mabl.com');

  const prompt =
    'Please validate that the web page you are looking at is a marketing page for a company named mabl which does automated UI testing';
  const result = await mabl.evaluateGenAiAssertion(page, prompt);
  console.log('GEN AI EXPLANATION');
  console.log(result.explanation);
  expect(result.success).toBe(true);
});
