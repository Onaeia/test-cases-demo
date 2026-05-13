import { test, expect } from '@playwright/test';

test('test 7 - Tables', async ({ page }) => {
  test.setTimeout(60000);
  // Navigate to page
  await page.goto('https://practice-automation.com/');
  await page.getByRole('link', { name: 'Tables' }).click();
  // Change entries per page
  await page.getByLabel('entries per page').selectOption('25');
  await page.getByLabel('entries per page').selectOption('50');
  await page.getByLabel('entries per page').selectOption('100');
  // Search and clear
  await page.getByRole('searchbox', { name: 'Search:' }).click();
  await page.getByRole('searchbox', { name: 'Search:' }).fill('china');
  await page.getByRole('searchbox', { name: 'Search:' }).click();
  await page.getByRole('searchbox', { name: 'Search:' }).fill('');
  // Sort columns
  await page.getByRole('button', { name: 'Rank: Activate to sort' }).click();
  await page.getByRole('button', { name: 'Country: Activate to sort' }).click();
  await page.getByRole('button', { name: 'Population (million):' }).click();
});