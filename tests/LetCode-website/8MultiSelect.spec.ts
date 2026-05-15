import { test, expect } from '@playwright/test';

test('MultiSelect', async ({ page }) => {
  await page.goto('https://letcode.in/test');
  await page.getByRole('link', { name: 'AUI - 4' }).click();
  await page.getByText('Playwright', { exact: true }).click();
  await page.getByText('Kurimurai').click();
  await page.getByText('Selenium').click();
  await page.getByText('Protractor').click();
  await page.getByText('Appium').click();
  await page.getByText('TestNg').click();
  await page.getByText('Postman').click();
  await page.getByText('Cypress').click();
  await page.getByText('Webdriver.io').click();
  await page.getByText('LetCode', { exact: true }).click();
});