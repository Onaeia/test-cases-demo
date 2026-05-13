import { test, expect } from '@playwright/test';

test('test 9 - Hover', async ({ page }) => {
  test.setTimeout(60000);
  // Navigate to page
  await page.goto('https://practice-automation.com/');
  await page.getByRole('link', { name: 'Hover' }).click();
  // Hover over the element to reveal the heading
  await page.getByText('Mouse over me').hover();
  await page.getByRole('heading', { name: 'You did it!' }).click();
});
