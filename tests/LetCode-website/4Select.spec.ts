import { test, expect } from '@playwright/test';

test('Select', async ({ page }) => {
  await page.goto('https://letcode.in/test');
  await page.getByRole('link', { name: 'Drop-Down' }).click();
  await page.locator('#fruits').selectOption('0');
  await page.locator('#fruits').selectOption('2');
  await page.locator('#fruits').selectOption('3');
  await page.locator('#superheros').selectOption('am');
  await page.locator('#superheros').selectOption('cm');
  await page.locator('#superheros').selectOption('sm');
  await page.locator('#lang').selectOption('py');
  await page.locator('#lang').selectOption('sharp');
  await page.locator('#country').selectOption('India');
});