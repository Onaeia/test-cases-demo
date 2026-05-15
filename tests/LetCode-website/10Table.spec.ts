import { test, expect } from '@playwright/test';

test('Table', async ({ page }) => {
  await page.goto('https://letcode.in/test');
  await page.getByRole('link', { name: 'Advance table' }).click();
  await page.getByLabel('entries per page').selectOption('10');
  await page.getByLabel('entries per page').selectOption('25');
  await page.getByLabel('entries per page').selectOption('5');
  await page.getByRole('link', { name: '2' }).click();
  await page.getByRole('link', { name: 'Next' }).click();
  await page.getByRole('link', { name: 'Last' }).click();
  await page.getByText('UNIVERSITY NAME').click();
  await page.getByText('COUNTRY').click();
  await page.getByRole('columnheader', { name: 'WEBSITE WEBSITE: Activate to' }).click();
});