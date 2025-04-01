import { test, expect } from '@playwright/test';

const pagePath = 'http://localhost:4200';

// test(
//   'main should be visible',
//   async ({
//     page,
//   }) => {
//     await page.goto(pagePath);

//     await expect(page.locator('main')).toBeVisible();
//   },
// );

// test(
//   'list should be visible',
//   async ({
//     page,
//   }) => {
//     await page.goto(pagePath);

//     await expect(page.locator('ul.List')).toBeVisible();
//   },
// );

// test(
//   'input should be visible',
//   async ({
//     page,
//   }) => {
//     await page.goto(pagePath);

//     await expect(page.locator('input.ListItem-input')).toBeVisible();
//   },
// );

// test(
//   'add button should be visible',
//   async ({
//     page,
//   }) => {
//     await page.goto(pagePath);

//     await expect(page.locator('button.ListItem-add')).toBeVisible();
//   },
// );

test(
  'added item should be visible at the end of the list',
  async ({
    page,
  }) => {
    await page.goto(pagePath);

    const value = 'some random text';

    await expect(page.locator('input')).toBeVisible();

    await page.locator('input').fill(value);

    await expect(page.getByRole('button')).toBeVisible();

    await page.getByRole('button').click();

    await expect(page.locator('ul li:last-child')).toHaveText(value);
  },
);
