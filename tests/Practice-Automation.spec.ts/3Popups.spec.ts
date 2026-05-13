import { test, expect } from '@playwright/test';

test('test 3 - Popups', async ({ page }) => {
  test.setTimeout(60000);
// Navigate to page
await page.goto('https://practice-automation.com/popups/')
page.on('dialog', dialog => dialog.accept())
//Click on Button
await page.locator('#alert').click()
//Click on Button
await page.locator('#confirm').click()
//Click on Button
await page.locator('#prompt').click()
//Click on Button
await page.getByText('click me to see a tooltip').click()
await page.getByText('click me to see a tooltip').click()
});
 