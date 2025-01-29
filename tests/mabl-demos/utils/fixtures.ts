import {test as base} from '@playwright/test';
import { createMablFixtures, MablFixtures } from "@mablhq/playwright-tools";

export const test = base.extend<MablFixtures>({
  ...createMablFixtures({
    apiKey: process.env.MABL_API_KEY ?? "",
    test: base,
  }),
});

export {expect} from '@playwright/test';
