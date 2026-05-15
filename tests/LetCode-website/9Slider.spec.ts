import { test, expect } from '@playwright/test';

test('Slider', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://letcode.in/slider');
  await page.evaluate(() => window.scrollTo(0, 400));
  await page.waitForTimeout(1000);

  // Set slider to 30 and get countries
  await page.locator('#generate').fill('30');
  await page.getByRole('button', { name: 'Get Countries' }).click();
  await page.waitForTimeout(500);

  // Set slider to 50 and get countries
  await page.locator('#generate').fill('40');
  await page.getByRole('button', { name: 'Get Countries' }).click();
  await page.waitForTimeout(500);

  // Set slider to 100 and get countries
  await page.locator('#generate').fill('50');
  await page.getByRole('button', { name: 'Get Countries' }).click();
  await page.waitForTimeout(500);
});