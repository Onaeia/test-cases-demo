import { test, expect } from '@playwright/test';

test('Frame', async ({ page }) => {
  await page.goto('https://letcode.in/test');
  await page.getByRole('link', { name: 'Inner HTML' }).click();
  await page.locator('iframe[name="firstFr"]').contentFrame().getByRole('textbox', { name: 'Enter name' }).click();
  await page.locator('iframe[name="firstFr"]').contentFrame().getByRole('textbox', { name: 'Enter name' }).fill('TestFirst Name');
  await page.locator('iframe[name="firstFr"]').contentFrame().getByRole('textbox', { name: 'Enter name' }).press('Tab');
  await page.locator('iframe[name="firstFr"]').contentFrame().getByRole('textbox', { name: 'Enter email' }).fill('TestLast Name');
  await page.locator('iframe[name="firstFr"]').contentFrame().locator('app-frame-content iframe').contentFrame().getByRole('textbox', { name: 'Enter email' }).click();
  await page.locator('iframe[name="firstFr"]').contentFrame().locator('app-frame-content iframe').contentFrame().getByRole('textbox', { name: 'Enter email' }).fill('testmail@gmail.com');
  await page.locator('iframe[name="firstFr"]').contentFrame().locator('app-frame-content iframe').contentFrame().getByRole('textbox', { name: 'Enter email' }).press('Enter');
});