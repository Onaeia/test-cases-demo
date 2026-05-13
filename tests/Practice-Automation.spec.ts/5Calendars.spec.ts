

import { test, expect } from '@playwright/test';
test('test 5 - Calendars', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://practice-automation.com/calendars/');
  // Type first date directly
  await page.getByRole('textbox', { name: /You are currently inside the/ }).fill('2026-08-28');
  // Clear and type second date
  await page.getByRole('textbox', { name: /You are currently inside the/ }).fill('2010-11-28');
  // Submit
  await page.getByRole('button', { name: 'Submit' }).click();
});