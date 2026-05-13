
import { test, expect } from '@playwright/test';

test('test online JavaScript Delays', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://practice-automation.com/');
  // Navigate to page
  await page.getByRole('link', { name: 'JavaScript Delays' }).click();
  // Click start button
  await page.getByRole('button', { name: 'Start' }).click();
  // Verify the delayed message appears
  const message = page.getByText('Liftoff!');
  await expect(message).toBeVisible(); // Playwright waits automatically
});