import { test, expect } from '@playwright/test';


const pagePath = 'http://localhost:4200';

test(
  '(AJAS)Items list is visible',
  async ({
    page,
  }) => {
    await page.goto(pagePath);

    await expect(page.locator('li')).toBeTruthy()  },
);

test(
  '(AJAS)Input is visible',
  async ({
    page,
  }) => {
    await page.goto(pagePath);

    await expect(page.locator('input')).toBeVisible()  },
);

test(
  '(AJAS)"ADD ITEM" button is visible',
  async ({
    page,
  }) => {
    await page.goto(pagePath);

    await expect(page.getByRole('button') ).toHaveText('ADD ITEM')  
  },
);

