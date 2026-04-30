


import { test, expect } from '@playwright/test';

test('test online JavaScript Delays', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://practice-automation.com/');
  // Navigate to page
  await page.getByRole('link', { name: 'JavaScript Delays' }).click();
  // Click start button
  await page.getByRole('button', { name: 'Start' }).click();
  // Verify the delayed message appears
  const message = page.getByText('Liftoff!');
  await expect(message).toBeVisible(); // Playwright waits automatically
});



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


test('test 3 - Popups', async ({ page }) => {
  test.setTimeout(60000);
// Navigate to page
await page.goto('https://practice-automation.com/popups/')
page.on('dialog', dialog => dialog.accept())
//Click on Button
await page.locator('#alert').click()
//Click on Button
await page.locator('#confirm').click()
//Click on Button
await page.locator('#prompt').click()
//Click on Button
await page.getByText('click me to see a tooltip').click()
await page.getByText('click me to see a tooltip').click()
});
 

test('test 4 - Sliders', async ({ page }) => {
test.setTimeout(60000);
await page.goto('https://practice-automation.com/');
//Change slider values
await page.getByRole('link', { name: 'Sliders' }).click();
await page.locator('#slideMe').fill('50');
await page.locator('.coolslider').click();
await page.locator('#slideMe').fill('75');
await page.locator('.coolslider').click();
await page.locator('#slideMe').fill('100');
await page.locator('.coolslider').click();
});


test('test 5 - Calendars', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://practice-automation.com/calendars/');
  // Type first date directly
  await page.getByRole('textbox', { name: /You are currently inside the/ }).fill('2026-08-28');
  // Clear and type second date
  await page.getByRole('textbox', { name: /You are currently inside the/ }).fill('2010-11-28');
  // Submit
  await page.getByRole('button', { name: 'Submit' }).click();
});


test('test 6 - Modals', async ({ page }) => {
  test.setTimeout(60000);
  // Navigate to page
  await page.goto('https://practice-automation.com/');
  // Click Modals button
  await page.getByRole('link', {name: 'Modals'}).click();
  // Click on Simple modal
  await page.getByRole('button', { name: 'Simple Modal' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  // Open Form Modal
  await page.getByRole('button', { name: 'Form Modal' }).click();
  // Fill in the form
  await page.getByRole('textbox', { name: 'Name' }).fill('Test Name');
  await page.getByRole('textbox', { name: 'Email' }).fill('test@email.com');
  await page.getByRole('textbox', { name: 'Message' }).fill('This is a test message...');
});


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

test('test 8 - Window Operations', async ({ page, context }) => {
  test.setTimeout(60000);
  // Navigate to page
  await page.goto('https://practice-automation.com/');
  await page.getByRole('link', { name: 'Window Operations' }).click();
  // Open New Tab
  const page7Promise = context.waitForEvent('page');
  await page.getByRole('button', { name: 'New Tab' }).click();
  const page7 = await page7Promise;
 // Replace Window - navigate directly back instead of goBack
await page.getByRole('button', { name: 'Replace Window' }).click();
await page.goto('https://practice-automation.com/window-operations/');
await page.waitForLoadState('domcontentloaded');
// Open New Window
const page8Promise = context.waitForEvent('page');
await page.getByRole('button', { name: 'New Window' }).click();
const page8 = await page8Promise;
});

test('test 9 - Hover', async ({ page }) => {
  test.setTimeout(60000);
  // Navigate to page
  await page.goto('https://practice-automation.com/');
  await page.getByRole('link', { name: 'Hover' }).click();
  // Hover over the element to reveal the heading
  await page.getByText('Mouse over me').hover();
  await page.getByRole('heading', { name: 'You did it!' }).click();
});

test('test 10 - Ads', async ({ page }) => {
  test.setTimeout(60000);
  // Navigate to page
  await page.goto('https://practice-automation.com/');
  await page.getByRole('link', { name: 'Ads' }).click();
  // Wait for the ad to appear after countdown
  await page.waitForTimeout(6000);
  // Interact with the ad
  await page.getByText('Hi', { exact: true }).click();
  await page.getByText('I am an ad.').click();
  // Close the ad
  await page.getByRole('button', { name: 'Close' }).click();
});

     test('test 11 - Gestures', async ({ page }) => {
  test.setTimeout(60000);
  // Navigate to page
  await page.goto('https://practice-automation.com/');
  await page.getByRole('link', { name: 'Gestures' }).click();
  await page.getByText('You can move me around').click();
  await page.getByText('Where shall we').click();
  await page.getByText('go from here?!').click();
  await page.locator('.mk-map-node-element').click();
  await page.locator('div').filter({ hasText: /^OrlandoOrlando, Florida, United States$/ }).first().click();
  await page.locator('.mk-map-node-element').click();
  });

 test('test 12 - File Download', async ({ page }) => {
  test.setTimeout(60000);
  // Navigate to page
  await page.goto('https://practice-automation.com/');
  await page.getByRole('link', { name: 'File Download' }).click();
  // Download third file
  const [download3] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('link', { name: 'Download' }).nth(2).click()
  ]);
  // Open password-protected download
  await page.getByRole('link', { name: 'Download' }).nth(4).click();
  // Enter wrong password
  const lockFrame = page.locator('#wpdm-lock-frame').contentFrame();
  await lockFrame.getByRole('textbox', { name: 'Enter Password' }).click();
  await lockFrame.getByRole('textbox', { name: 'Enter Password' }).fill('test');
  await lockFrame.getByRole('button', { name: 'Submit' }).click();
  // Try again with correct password
  await lockFrame.getByText('Try Again').click();
  await lockFrame.getByRole('textbox', { name: 'Enter Password' }).click();
  await lockFrame.getByRole('textbox', { name: 'Enter Password' }).fill('automateNow');
  // Submit and wait for popup and download simultaneously
  const [page5, download4] = await Promise.all([
  page.waitForEvent('popup'),
  page.waitForEvent('download'),
  lockFrame.getByRole('button', { name: 'Submit' }).click()
  ]);
  // Click download link and wait for popup and download simultaneously
  const [page6, download5] = await Promise.all([
    page.waitForEvent('popup'),
    page.waitForEvent('download'),
    lockFrame.getByRole('link', { name: 'Download' }).click()
  ]);
  // Close the lock frame
  await lockFrame.getByRole('button', { name: 'Close' }).click();
});


 test('test 13 - File Download', async ({ page }) => {
  test.setTimeout(60000);
  // Navigate to page
  await page.goto('https://practice-automation.com/');
  await page.getByRole('link', { name: 'Click Events' }).click();
  await page.getByRole('button', { name: 'Cat' }).click();
  await page.getByRole('button', { name: 'Pig' }).click();
  await page.getByRole('button', { name: 'Dog' }).click();
  await page.getByRole('button', { name: 'Cow' }).click();
  });

 test('test 14 - Spinners', async ({ page }) => {
  test.setTimeout(60000);
  // Navigate to page
  await page.goto('https://practice-automation.com/');
  await page.getByRole('link', { name: 'Spinners' }).click();
  // Click hidden spinner text
  await page.getByText('spinner-hidden').click();
  // Navigate directly to spinners page
  await page.goto('https://practice-automation.com/spinners/');
});

 test('test 15 - File Upload', async ({ page }) => {
  test.setTimeout(60000);
  // Navigate to page
  await page.goto('https://practice-automation.com/');
  await page.getByRole('link', { name: 'File Upload' }).click();
  // Upload file from desktop
  await page.getByRole('button', { name: 'Choose File' }).setInputFiles('tests/fixtures/TestDoc.txt');
  await page.getByRole('button', { name: 'Upload' }).click();
});