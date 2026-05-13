
import { test, expect } from '@playwright/test';

 test('test 15 - File Upload', async ({ page }) => {
  test.setTimeout(60000);
  // Navigate to page
  await page.goto('https://practice-automation.com/');
  await page.getByRole('link', { name: 'File Upload' }).click();
  // Upload file from desktop
  await page.getByRole('button', { name: 'Choose File' }).setInputFiles('tests/fixtures/TestDoc.txt');
  await page.getByRole('button', { name: 'Upload' }).click();
});