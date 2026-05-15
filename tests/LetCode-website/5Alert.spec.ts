import { test, expect } from '@playwright/test';

test('Dialogs', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://letcode.in/test');
  await page.getByRole('link', { name: 'Dialog' }).click();
  page.once('dialog', dialog => {
    console.log(`Simple Alert message: ${dialog.message()}`);
    dialog.accept();
  });
  await page.getByRole('button', { name: 'Simple Alert' }).click();
  page.once('dialog', dialog => {
    console.log(`Confirm Alert message: ${dialog.message()}`);
    dialog.accept();
  });
  await page.getByRole('button', { name: 'Confirm Alert' }).click();
  page.once('dialog', dialog => {
    console.log(`Confirm Alert dismissed: ${dialog.message()}`);
    dialog.dismiss();
  });
  await page.getByRole('button', { name: 'Confirm Alert' }).click();
  page.once('dialog', dialog => {
    console.log(`Prompt Alert message: ${dialog.message()}`);
    dialog.accept('Lumbie'); 
  });
  await page.getByRole('button', { name: 'Prompt Alert' }).click();
  await page.getByRole('button', { name: 'Modern Alert' }).click();
  await page.waitForTimeout(2000);
 
  const closeButton = page.getByRole('button', { name: 'OK' });
  if (await closeButton.isVisible()) {
    await closeButton.click();
  }
});