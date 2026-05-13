import { test, expect } from '@playwright/test';

 test('test 13 - Click Events', async ({ page }) => {
  test.setTimeout(60000);
  // Navigate to page
  await page.goto('https://practice-automation.com/');
  await page.getByRole('link', { name: 'Click Events' }).click();
  await page.getByRole('button', { name: 'Cat' }).click();
  await page.getByRole('button', { name: 'Pig' }).click();
  await page.getByRole('button', { name: 'Dog' }).click();
  await page.getByRole('button', { name: 'Cow' }).click();
  });