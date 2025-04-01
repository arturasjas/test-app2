import { test, expect } from '@playwright/test';

test('has input field', async ({ page }) => {
  await page.goto('localhost:4200');

  // Check if the input field is present.
  const inputField = page.locator('input'); // Adjust selector as needed
  await expect(inputField).toBeVisible();
});