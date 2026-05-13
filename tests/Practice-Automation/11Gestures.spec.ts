import { test, expect } from '@playwright/test';

   test('test 11 - Gestures', async ({ page }) => {
  test.setTimeout(60000);
  // Navigate to page
  await page.goto('https://practice-automation.com/');
  await page.getByRole('link', { name: 'Gestures' }).click();
  await page.getByText('You can move me around').click();
  await page.getByText('Where shall we').click();
  await page.getByText('go from here?!').click();
  await page.locator('.mk-map-node-element').click();
  await page.locator('div').filter({ hasText: /^OrlandoOrlando, Florida, United States$/ }).first().click();
  await page.locator('.mk-map-node-element').click();
  });
