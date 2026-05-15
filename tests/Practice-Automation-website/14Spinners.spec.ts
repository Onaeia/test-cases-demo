
import { test, expect } from '@playwright/test';
 test('test 14 - Spinners', async ({ page }) => {
  test.setTimeout(60000);
  // Navigate to page
  await page.goto('https://practice-automation.com/');
  await page.getByRole('link', { name: 'Spinners' }).click();
  // Click hidden spinner text
  await page.getByText('spinner-hidden').click();
  // Navigate directly to spinners page
  await page.goto('https://practice-automation.com/spinners/');
});