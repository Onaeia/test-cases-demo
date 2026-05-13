import {test} from '@playwright/test';

test('test Login', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://demoqa.com/tool-tips');
  await page.getByText('Book Store Application').click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'UserName' }).click();
  await page.getByRole('textbox', { name: 'UserName' }).fill('Test1234!');
  await page.getByRole('textbox', { name: 'UserName' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Test1234!');
  await page.getByRole('button', { name: 'New User' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Test');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Test');
  await page.getByRole('textbox', { name: 'UserName' }).click();
  await page.getByRole('textbox', { name: 'UserName' }).fill('Test1234!');
  await page.getByRole('textbox', { name: 'UserName' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Test1234!');
  await page.getByRole('button', { name: 'Register' }).click();
  await page.getByRole('button', { name: 'Back to Login' }).click();
  await page.getByRole('textbox', { name: 'UserName' }).click();
  await page.getByRole('textbox', { name: 'UserName' }).fill('Test1234!');
  await page.getByRole('textbox', { name: 'UserName' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Test1234!');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Type to search' }).click();
  await page.getByRole('textbox', { name: 'Type to search' }).fill('git');
  await page.getByRole('button').filter({ hasText: /^$/ }).click();
  await page.getByRole('button', { name: 'Go To Book Store' }).click();
  await page.locator('div').filter({ hasText: /^Git Pocket Guide$/ }).click();
  await page.getByRole('link', { name: 'Git Pocket Guide' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Add To Your Collection' }).click();
  });


  test('test Book Store', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://demoqa.com');
  await page.getByRole('link', { name: 'Book Store Application' }).click();
  await page.getByRole('listitem').filter({ hasText: /^Book Store$/ }).click();
  await page.getByRole('columnheader', { name: 'Title' }).click();
  await page.getByRole('columnheader', { name: 'Author' }).click();
  await page.getByText('Publisher').click();
  await page.getByRole('textbox', { name: 'Type to search' }).click();
  await page.getByRole('textbox', { name: 'Type to search' }).fill('java');
  await page.getByRole('button').filter({ hasText: /^$/ }).click();
  
   });
