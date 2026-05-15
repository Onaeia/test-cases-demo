import { test, expect } from '@playwright/test';

test('test 8 - Window Operations', async ({ page, context }) => {
  test.setTimeout(60000);
  // Navigate to page
  await page.goto('https://practice-automation.com/');
  await page.getByRole('link', { name: 'Window Operations' }).click();
  // Open New Tab
  const page7Promise = context.waitForEvent('page');
  await page.getByRole('button', { name: 'New Tab' }).click();
  const page7 = await page7Promise;
 // Replace Window - navigate directly back instead of goBack
await page.getByRole('button', { name: 'Replace Window' }).click();
await page.goto('https://practice-automation.com/window-operations/');
await page.waitForLoadState('domcontentloaded');
// Open New Window
const page8Promise = context.waitForEvent('page');
await page.getByRole('button', { name: 'New Window' }).click();
const page8 = await page8Promise;
});