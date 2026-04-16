import { test, expect } from '@playwright/test';


test('the 2nd test', async ({ page }) => {
    test.setTimeout(60000);
await page.goto('http://localhost:4200/');
await page.getByRole('link', { name: 'Modal & Overlays' }).click();
await page.getByRole('link', { name: 'Dialog' }).click();
await page.getByRole('button', { name: 'Open Dialog with component' }).click();
await page.getByRole('button', { name: 'Dismiss Dialog' }).click();
await page.getByRole('button', { name: 'Open Dialog with template' }).click();
await page.getByRole('button', { name: 'Close Dialog' }).click();
await page.getByRole('button', { name: 'Open Dialog with backdrop', exact: true }).click();
await page.getByRole('button', { name: 'Dismiss Dialog' }).click();
await page.getByRole('button', { name: 'Open Dialog without backdrop' }).click();
await page.getByRole('button', { name: 'Close Dialog' }).click();
await page.getByRole('button', { name: 'Open Dialog with esc close' }).click();
await page.getByRole('button', { name: 'Dismiss Dialog' }).click();
await page.getByRole('button', { name: 'Open Dialog without esc close' }).click();
await page.getByRole('button', { name: 'Close Dialog' }).click();
await page.getByRole('button', { name: 'Open Dialog with backdrop click' }).click();
await page.getByRole('button', { name: 'Dismiss Dialog' }).click();
await page.getByRole('button', { name: 'Open without backdrop click' }).click();
await page.getByRole('button', { name: 'Close Dialog' }).click();
await page.getByRole('button', { name: 'Enter Name' }).click();
await page.getByRole('textbox', { name: 'Name' }).fill('TestName');
await page.getByRole('button', { name: 'Submit' }).click();
});



test('the 3rd test', async ({ page }) => {
    test.setTimeout(60000);
await page.goto('http://localhost:4200/');
await page.getByRole('link', { name: 'Modal & Overlays' }).click();
await page.getByRole('link', { name: 'Popover' }).click();
await page.getByRole('link', { name: 'Popover' }).press('ControlOrMeta+z');
await page.getByRole('button', { name: 'Top' }).click();
await page.getByRole('button', { name: 'Bottom' }).click();
await page.getByRole('button', { name: 'Right' }).click();
await page.getByRole('button', { name: 'on click' }).click();
await page.getByRole('button', { name: 'on hover' }).click();
await page.getByRole('button', { name: 'on hint' }).click();
await page.getByRole('button', { name: 'With tabs' }).first().click();
await page.getByRole('button', { name: 'With form' }).first().click();
await page.getByRole('textbox', { name: 'Recipients' }).click();
await page.getByRole('textbox', { name: 'Recipients' }).fill('Test');
await page.getByRole('textbox', { name: 'Subject' }).click();
await page.getByRole('textbox', { name: 'Subject' }).fill('Test');
await page.getByRole('textbox', { name: 'Message' }).click();
await page.getByRole('textbox', { name: 'Message' }).fill('Test');
await page.getByRole('button', { name: 'Send' }).click();
await page.getByRole('button', { name: 'With tabs' }).nth(1).click();
await page.getByRole('button', { name: 'With form' }).nth(1).click();
await page.getByRole('textbox', { name: 'Recipients' }).click();
await page.getByRole('textbox', { name: 'Recipients' }).fill('Test');
await page.getByRole('textbox', { name: 'Subject' }).click();
await page.getByRole('textbox', { name: 'Subject' }).fill('Test');
await page.getByRole('textbox', { name: 'Message' }).click();
await page.getByRole('textbox', { name: 'Message' }).fill('Test');
await page.getByRole('button', { name: 'Send' }).click();
await page.getByRole('button', { name: 'With card' }).nth(1).click();
await page.getByRole('button', { name: 'show hint' }).first().click();
await page.getByRole('button', { name: 'show hint' }).nth(1).click();
await page.getByRole('button', { name: 'show hint' }).nth(2).click();
await page.getByRole('button', { name: 'show hint' }).nth(3).click();
await page.getByRole('button', { name: 'show hint' }).nth(4).click();
await page.getByRole('button', { name: 'show hint' }).nth(5).click();
await page.locator('button:nth-child(8)').click();
await page.locator('button:nth-child(8)').click();
await page.locator('button:nth-child(8)').click();
await page.locator('button:nth-child(11)').click();
await page.locator('button:nth-child(11)').click();
await page.locator('button:nth-child(13)').click();
await page.locator('button:nth-child(14)').click();
await page.locator('button:nth-child(15)').click();
await page.locator('button:nth-child(16)').click();
await page.locator('button:nth-child(17)').click();
});


test('the 4th test', async ({ page }) => {
    test.setTimeout(60000);
await page.goto('http://localhost:4200/');
await page.getByRole('link', { name: 'Modal & Overlays' }).click();
await page.getByRole('link', { name: 'Modal & Overlays' }).click();
await page.getByRole('link', { name: 'Toastr' }).click();
await page.getByRole('button', { name: 'top-right' }).click();
await page.getByText('top-left').click();
await page.getByRole('button', { name: 'top-left' }).click();
await page.getByText('bottom-left').click();
await page.locator('input[name="title"]').click();
await page.locator('input[name="content"]').click();
await page.locator('input[name="content"]').fill('I\'m cool toasTestter!');
await page.getByRole('spinbutton').click();
await page.getByRole('spinbutton').click();
await page.getByRole('spinbutton').click();
await page.getByRole('spinbutton').click();
await page.getByRole('spinbutton').fill('1999');
await page.getByRole('spinbutton').dblclick();
await page.getByRole('spinbutton').click();
await page.getByRole('spinbutton').click();
await page.getByRole('spinbutton').click();
await page.getByRole('spinbutton').click();
await page.getByRole('spinbutton').click();
await page.getByRole('spinbutton').click();
await page.getByRole('button', { name: 'Show toast' }).click();
await page.getByRole('button', { name: 'Random toast' }).click();
await page.getByRole('button', { name: 'primary' }).click();
await page.getByText('success').click();
await page.locator('.custom-checkbox-icon > svg').first().click();
await page.locator('.custom-checkbox-icon > svg').first().click();
await page.locator('.status-basic.ng-untouched > .label > .custom-checkbox').first().click();
await page.locator('div:nth-child(4) > .status-basic > .label > .custom-checkbox').click();
await page.locator('.custom-checkbox').first().click();
});


test('the 5th test', async ({ page }) => {
    test.setTimeout(60000);
await page.goto('http://localhost:4200/');
await page.getByRole('link', { name: 'Modal & Overlays' }).click();
await page.getByRole('link', { name: 'Tooltip' }).click();
await page.getByRole('button', { name: 'Show Tooltip' }).first().click();
await page.getByRole('button', { name: 'Show Tooltip' }).nth(1).click();
await page.getByRole('button', { name: 'Top' }).click();
await page.getByRole('button', { name: 'Right' }).click();
await page.getByRole('button', { name: 'Bottom' }).click();
await page.getByRole('button', { name: 'Left' }).click();
await page.getByRole('button', { name: 'Default' }).click();
await page.getByRole('button', { name: 'Primary' }).click();
await page.getByRole('button', { name: 'Success' }).click();
await page.getByRole('button', { name: 'Danger' }).click();
await page.getByRole('button', { name: 'Info' }).click();
await page.getByRole('button', { name: 'Warning' }).click();
});