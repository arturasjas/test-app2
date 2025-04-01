import { test, expect } from '@playwright/test';


const pagePath = 'http://localhost:4200';

test(
  'page should be visible',
  async ({
    page,
  }) => {
    await page.goto(pagePath);

    await expect(page.locator('main')).toBeVisible();
  },
);

test(
  'page should be visible',
  async ({
    page,
  }) => {
    await page.goto(pagePath);

    await expect(page.locator('main')).toBeVisible();
  },
);
