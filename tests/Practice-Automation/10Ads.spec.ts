import { test, expect } from '@playwright/test';

test('test 10 - Ads', async ({ page }) => {
  test.setTimeout(60000);
  // Navigate to page
  await page.goto('https://practice-automation.com/');
  await page.getByRole('link', { name: 'Ads' }).click();
  // Wait for the ad to appear after countdown
  await page.waitForTimeout(6000);
  // Interact with the ad
  await page.getByText('Hi', { exact: true }).click();
  await page.getByText('I am an ad.').click();
  // Close the ad
  await page.getByRole('button', { name: 'Close' }).click();
});