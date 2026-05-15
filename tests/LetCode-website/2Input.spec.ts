import { test, expect } from '@playwright/test';

test('Input', async ({ page }) => {
  await page.goto('https://letcode.in/test');
  await page.getByRole('link', { name: 'Edit' }).click();
  await page.getByRole('textbox', { name: 'Enter first & last name' }).click();
  await page.getByRole('textbox', { name: 'Enter first & last name' }).fill('Test Name');
  await page.locator('#join').click();
  await page.locator('#join').fill('I am good tester');
  await page.locator('#getMe').click();
  await page.locator('#getMe').fill('ortonikc ');
  await page.locator('#clearMe').click();
  await page.locator('#clearMe').fill('');
  await page.locator('#dontwrite').click();
});