import { test, expect } from '@playwright/test';

test('test 2 - online Form fields', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://practice-automation.com/');
  // Navigate to page
  await page.getByRole('link', { name: 'Form Fields' }).click();
  // Fill Name and Password
  await page.getByTestId('name-input').fill('Test');
  await page.getByRole('textbox', { name: 'Password' }).fill('Test1234');
  // Favorite drinks checkboxes
  await page.getByRole('checkbox', { name: 'Water' }).check();
  await page.getByRole('checkbox', { name: 'Milk' }).check();
  await page.getByRole('checkbox', { name: 'Coffee' }).check();
  await page.getByRole('checkbox', { name: 'Wine' }).check();
  await page.getByRole('checkbox', { name: 'Ctrl-Alt-Delight' }).check();
  // Favorite color - cycle through all radio buttons
await page.getByRole('radio', { name: 'Red' }).check();
await page.getByRole('radio', { name: 'Blue' }).check();
await page.getByRole('radio', { name: 'Yellow' }).check();
await page.getByRole('radio', { name: 'Green' }).check();
await page.getByRole('radio', { name: '#FFC0CB' }).check();
  // Dropdown
  const dropdown = page.getByTestId('automation');
  await dropdown.selectOption('yes');
  await dropdown.selectOption('no');
  await dropdown.selectOption('undecided');
  // Email and Message
  await page.getByTestId('email').click();
  await page.getByTestId('email').fill('TestEmail');
  await page.getByTestId('message').click();
  await page.getByTestId('message').fill('Test message');
  // Submit
  await page.getByRole('button', { name: 'Submit' }).click();
});