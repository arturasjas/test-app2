import { test, expect } from '@playwright/test';

const pagePath = 'http://localhost:4200';

test(
  'added item should be visible at the end of the list',
  async ({
    page,
  }) => {
    await page.goto(pagePath);

    const value = 'some random text';

    await expect(page.locator('input')).toBeVisible();

    await page.locator('input').fill(value);

    await expect(page.locator('button')).toBeVisible();

    await page.locator('button').click();

    const date = new Date();

    await expect(page.locator('ul li:last-child .list-item-value')).toHaveText(value);

    await expect(page.locator('ul li:last-child .list-item-date')).toHaveText(date.toDateString());
  },
);
