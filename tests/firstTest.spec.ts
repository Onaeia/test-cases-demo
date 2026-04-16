import {test} from '@playwright/test';

test('the first test', async ({ page }) => {
    test.setTimeout(60000);
await page.goto('http://localhost:4200/');
await page.getByRole('link', { name: 'Forms' }).click();
await page.getByRole('link', { name: 'Form Layouts' }).click();
await page.getByRole('textbox', { name: 'Jane Doe' }).click();
await page.getByRole('textbox', { name: 'Jane Doe' }).fill('Test');
await page.locator('form').filter({ hasText: 'Remember meSubmit' }).getByPlaceholder('Email').click();
await page.locator('form').filter({ hasText: 'Remember meSubmit' }).getByPlaceholder('Email').fill('Test@yahoo.com');
await page.locator('form').filter({ hasText: 'Remember meSubmit' }).getByRole('button').click();
await page.locator('.custom-checkbox').first().click();
await page.locator('form').filter({ hasText: 'Remember meSubmit' }).getByRole('button').click();
})

test('the second test', async ({ page }) => {
    test.setTimeout(60000);
await page.goto('http://localhost:4200/');
await page.getByRole('link', { name: 'Forms' }).click();
await page.getByRole('link', { name: 'Form Layouts' }).click();
await page.locator('#inputEmail1').click();
await page.locator('#inputEmail1').fill('test2@Yahoo.com');
await page.locator('#inputPassword2').click();
await page.locator('#inputPassword2').fill('test123');
await page.locator('.inner-circle').first().click();
await page.locator('nb-radio:nth-child(2) > label > .inner-circle').click();
await page.locator('nb-card').filter({ hasText: 'Using the' }).getByRole('button').click();
});

test('the third test', async ({ page }) => {
    test.setTimeout(60000);
await page.goto('http://localhost:4200/');
await page.getByRole('link', { name: 'Forms' }).click();
await page.getByRole('link', { name: 'Form Layouts' }).click();
await page.getByRole('textbox', { name: 'Email address' }).fill('Test3@yahoo.com');
await page.getByRole('textbox', { name: 'Email address' }).click();
await page.locator('#exampleInputPassword1').click();
await page.locator('#exampleInputPassword1').fill('test123123');
await page.locator('.form-group > .status-basic > .label > .custom-checkbox').click();
await page.locator('.form-group > .status-basic > .label > .custom-checkbox > .custom-checkbox-icon > svg').click();
await page.locator('nb-card').filter({ hasText: 'Basic formEmail' }).getByRole('button').click();
});

test('the fourth test', async ({ page }) => {
    test.setTimeout(60000);
await page.goto('http://localhost:4200/');
await page.getByRole('link', { name: 'Forms' }).click();
await page.getByRole('link', { name: 'Form Layouts' }).click();
await page.getByRole('textbox', { name: 'Recipients' }).click();
await page.getByRole('textbox', { name: 'Recipients' }).fill('Test Recipients');
await page.getByRole('textbox', { name: 'Subject' }).click();
await page.getByRole('textbox', { name: 'Subject' }).fill('Test Subject');
await page.getByRole('textbox', { name: 'Message' }).click();
await page.getByRole('textbox', { name: 'Message' }).fill('Test Message');
await page.getByRole('button', { name: 'Send' }).click();
});

test('the fifth test', async ({ page }) => {
    test.setTimeout(60000);
await page.goto('http://localhost:4200/');
await page.getByRole('link', { name: 'Forms' }).click();
await page.getByRole('link', { name: 'Form Layouts' }).click();
await page.getByRole('textbox', { name: 'First Name' }).click();
await page.getByRole('textbox', { name: 'First Name' }).fill('First Name');
await page.getByRole('textbox', { name: 'First Name' }).click();
await page.getByRole('textbox', { name: 'First Name' }).fill('FirstName');
await page.getByRole('textbox', { name: 'Last Name' }).click();
await page.getByRole('textbox', { name: 'Last Name' }).fill('LastName');
await page.locator('#inputEmail').click();
await page.locator('#inputEmail').fill('test5@email.com');
await page.getByRole('textbox', { name: 'Website' }).click();
await page.getByRole('textbox', { name: 'Website' }).fill('www.google.com');
await page.getByRole('button', { name: 'Submit' }).nth(2).click();
});

test('the sixth test', async ({ page }) => {
    test.setTimeout(60000);
await page.goto('http://localhost:4200/');
await page.getByRole('link', { name: 'Forms' }).click();
await page.getByRole('link', { name: 'Form Layouts' }).click();
await page.locator('#inputEmail3').click();
await page.locator('#inputEmail3').fill('email6@yahoo.com');
await page.locator('#inputPassword3').click();
await page.locator('#inputPassword3').fill('test6');
await page.locator('.checkbox > .status-basic > .label > .custom-checkbox').click();
await page.locator('.custom-checkbox-icon > svg').click();
await page.getByRole('button', { name: 'Sign in' }).nth(1).click();
});


test('the seventh test', async ({ page }) => {
    test.setTimeout(60000);
await page.goto('http://localhost:4200/');
await page.getByRole('link', { name: 'Forms' }).click();
await page.getByRole('link', { name: 'Datepicker' }).click();
await page.getByRole('textbox', { name: 'Form Picker' }).click();
await page.getByText('2').nth(3).click();
await page.getByRole('textbox', { name: 'Form Picker' }).click();
await page.getByRole('button').nth(4).click();
await page.getByRole('button').nth(3).click();
await page.getByText('4', { exact: true }).click();
await page.getByRole('textbox', { name: 'Range Picker' }).click();
await page.getByRole('button').nth(3).click();
await page.getByRole('button').nth(4).click();
await page.getByText('4', { exact: true }).click();
await page.getByRole('textbox', { name: 'Min Max Picker' }).click();
await page.getByText('6', { exact: true }).click();
});

