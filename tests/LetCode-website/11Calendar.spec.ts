import { test, expect } from '@playwright/test';

test('Calendar', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://letcode.in/test');
  await page.getByRole('link', { name: 'Date & Time' }).click();
  await page.evaluate(() => window.scrollTo(0, 400));
  await page.waitForTimeout(1000);

  // Date 1
  await page.getByRole('textbox', { name: 'Select your Birthday:' }).fill('1990-05-15');
  await page.locator('section').filter({ hasText: 'Select your Birthday:' }).click();
  await page.waitForTimeout(500);

  // Date 2
  await page.getByRole('textbox', { name: 'Select your Birthday:' }).fill('2000-12-25');
  await page.locator('section').filter({ hasText: 'Select your Birthday:' }).click();
  await page.waitForTimeout(500);

  // Date 3
  await page.getByRole('textbox', { name: 'Select your Birthday:' }).fill('1985-07-04');
  await page.locator('section').filter({ hasText: 'Select your Birthday:' }).click();
  await page.waitForTimeout(500);
});