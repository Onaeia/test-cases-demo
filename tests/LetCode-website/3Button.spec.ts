import { test, expect } from '@playwright/test';

test('Buttons', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://letcode.in/test');
  await page.getByRole('link', { name: 'Click' }).click();

  // Button 1 - navigates to home and back
  await page.getByRole('button', { name: 'Goto Home and come back here' }).click();
  await page.waitForURL('https://letcode.in/');
  await page.goBack();
  await page.waitForURL('https://letcode.in/button');
  // Button 2 - Find Location
  await page.getByRole('button', { name: 'Find Location' }).click();
  // Button 3 - Find color
  await page.getByRole('button', { name: 'Find the color of the button' }).click();
  // Button 4 - dimensions
  await page.getByRole('button', { name: 'How tall & fat I am?' }).click();
  // Button 5 - Hold button needs mouse down and up with delay
  const holdButton = page.getByRole('button', { name: 'Button Hold!' });
  await holdButton.hover();
  await page.mouse.down();
  await page.waitForTimeout(3000); // hold for 3 seconds
  await page.mouse.up();
});