import {test} from '@playwright/test';

test('test Text box', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://demoqa.com/tool-tips');
  // Click Elements dropdown
await page.getByText('Elements').click();
  // Click Text box
await page.getByRole('link', { name: 'Text Box' }).click();
  // Click Full name field
await page.getByRole('textbox', { name: 'Full Name' }).click();
  // Fill Full name field
await page.getByRole('textbox', { name: 'Full Name' }).fill('TestFullName');
  // Click Email field
await page.getByRole('textbox', { name: 'name@example.com' }).click();
  // Fill Email field
await page.getByRole('textbox', { name: 'name@example.com' }).fill('test@yahoo.com');
  // Click Current Address field
await page.getByRole('textbox', { name: 'Current Address' }).click();
  // Fill Current Address field
await page.getByRole('textbox', { name: 'Current Address' }).fill('Test Address Current');
  // Click Permanent Address field
await page.locator('#permanentAddress').click();
  // Fill Permanent Address field
await page.locator('#permanentAddress').fill('Test Permanent Address ');
  // Click Submit button
await page.getByRole('button', { name: 'Submit' }).click();
});


 test('test Check box', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://demoqa.com/tool-tips');
  await page.getByText('Elements').click();
  await page.getByRole('link', { name: 'Check Box' }).click();
  await page.locator('.rc-tree-switcher').click();
  await page.getByRole('checkbox', { name: 'Select Home' }).click();
  await page.getByRole('checkbox', { name: 'Select Home' }).click();
  await page.locator('.rc-tree-switcher.rc-tree-switcher_close').first().click();
  await page.getByRole('checkbox', { name: 'Select Desktop' }).click();
  await page.getByRole('checkbox', { name: 'Select Home' }).click();
  await page.locator('.rc-tree-switcher').first().click();

});

 test('test Radio button', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://demoqa.com/tool-tips');
  await page.getByText('Elements').click();
  await page.getByRole('link', { name: 'Radio Button' }).click();
  await page.getByRole('radio', { name: 'Yes' }).check();
  await page.getByRole('radio', { name: 'Impressive' }).check();
  await page.locator('div').filter({ hasText: /^No$/ }).click();
  });


  test('test Web tables', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://demoqa.com/tool-tips');
  await page.getByText('Elements').click();
  await page.getByRole('link', {name: 'Web tables'}).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Test Name');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Test Last Name');
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('test emai');
  await page.getByRole('textbox', { name: 'name@example.com' }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('test@yahoo.com');
  await page.getByRole('textbox', { name: 'Age' }).click();
  await page.getByRole('textbox', { name: 'Age' }).fill('22');
  await page.getByRole('textbox', { name: 'Salary' }).click();
  await page.getByRole('textbox', { name: 'Salary' }).fill('16000');
  await page.getByRole('textbox', { name: 'Department' }).click();
  await page.getByRole('textbox', { name: 'Department' }).fill('IT');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('columnheader', { name: 'First Name' }).click();
  await page.getByRole('columnheader', { name: 'Last Name' }).click();
  await page.locator('#delete-record-1 > svg > path').click();
  await page.locator('#edit-record-2 > svg > path').click();
  await page.getByRole('button', { name: 'Submit' }).click();
  });

  test('test Buttons', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://demoqa.com/tool-tips');
  await page.getByText('Elements').click();
  await page.getByRole('link', { name: 'Buttons' }).click(); 
  await page.getByRole('button', { name: 'Double Click Me' }).dblclick(); 
  await page.getByRole('button', { name: 'Right Click Me' }).click({ button: 'right' }); 
  await page.getByRole('button', { name: 'Click Me', exact: true }).click();
});

