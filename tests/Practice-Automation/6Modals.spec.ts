import { test, expect } from '@playwright/test';

test('test 6 - Modals', async ({ page }) => {
  test.setTimeout(60000);
  // Navigate to page
  await page.goto('https://practice-automation.com/');
  // Click Modals button
  await page.getByRole('link', {name: 'Modals'}).click();
  // Click on Simple modal
  await page.getByRole('button', { name: 'Simple Modal' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  // Open Form Modal
  await page.getByRole('button', { name: 'Form Modal' }).click();
  // Fill in the form
  await page.getByRole('textbox', { name: 'Name' }).fill('Test Name');
  await page.getByRole('textbox', { name: 'Email' }).fill('test@email.com');
  await page.getByRole('textbox', { name: 'Message' }).fill('This is a test message...');
});