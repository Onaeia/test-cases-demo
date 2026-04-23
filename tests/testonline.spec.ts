
import { test, expect } from '@playwright/test';
test('test online', async ({ page }) => {
    test.setTimeout(60000);
await page.goto('https://practice-automation.com/');
await page.getByLabel('entries per page').selectOption('25');
await page.getByRole('searchbox', { name: 'Search:' }).click();
await page.getByRole('searchbox', { name: 'Search:' }).fill('niger');
await page.getByRole('cell', { name: 'Nigeria' }).click();
await page.getByRole('link', { name: 'Next' }).click();
})