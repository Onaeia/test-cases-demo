import { test, expect } from '@playwright/test';

 test('test 12 - File Download', async ({ page }) => {
  test.setTimeout(60000);
  // Navigate to page
  await page.goto('https://practice-automation.com/');
  await page.getByRole('link', { name: 'File Download' }).click();
  // Download third file
  const [download3] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('link', { name: 'Download' }).nth(2).click()
  ]);
  // Open password-protected download
  await page.getByRole('link', { name: 'Download' }).nth(4).click();
  // Enter wrong password
  const lockFrame = page.locator('#wpdm-lock-frame').contentFrame();
  await lockFrame.getByRole('textbox', { name: 'Enter Password' }).click();
  await lockFrame.getByRole('textbox', { name: 'Enter Password' }).fill('test');
  await lockFrame.getByRole('button', { name: 'Submit' }).click();
  // Try again with correct password
  await lockFrame.getByText('Try Again').click();
  await lockFrame.getByRole('textbox', { name: 'Enter Password' }).click();
  await lockFrame.getByRole('textbox', { name: 'Enter Password' }).fill('automateNow');
  // Submit and wait for popup and download simultaneously
  const [page5, download4] = await Promise.all([
  page.waitForEvent('popup'),
  page.waitForEvent('download'),
  lockFrame.getByRole('button', { name: 'Submit' }).click()
  ]);
  // Click download link and wait for popup and download simultaneously
  const [page6, download5] = await Promise.all([
    page.waitForEvent('popup'),
    page.waitForEvent('download'),
    lockFrame.getByRole('link', { name: 'Download' }).click()
  ]);
  // Close the lock frame
  await lockFrame.getByRole('button', { name: 'Close' }).click();
});