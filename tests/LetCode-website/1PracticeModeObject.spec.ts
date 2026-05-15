import { test, expect } from '@playwright/test';

test('Practice Mode Object', async ({ page }) => {
  await page.goto('https://letcode.in/test');
  await page.getByRole('link', { name: 'Page Object Model' }).click();
  await page.getByRole('button', { name: '₹ 109.95' }).click();
  await page.getByRole('button', { name: ' Add to Cart' }).click();
  await page.getByRole('button', { name: ' Add to Cart' }).click();
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('table').getByRole('button').filter({ hasText: /^$/ }).click();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
});