import { test, expect } from '@playwright/test';


test('the Auth Login test', async ({ page }) => {
    test.setTimeout(60000);
await page.goto('http://localhost:4200/');
await page.getByRole('link', { name: 'Auth' }).click();
await page.getByRole('link', { name: 'Login' }).click();
await page.getByRole('textbox', { name: 'Email address:' }).click();
await page.getByRole('textbox', { name: 'Email address:' }).fill('TestEmail@yahoo.com');
await page.getByRole('textbox', { name: 'Password:' }).click();
await page.getByRole('textbox', { name: 'Password:' }).fill('Test123');
await page.locator('span').nth(1).click();
await page.getByRole('button', { name: 'Log In' }).click();
await page.locator('.user-picture').first().click();
await page.getByTitle('Profile').click();
await page.locator('.user-picture').first().click();
await page.getByTitle('Log out').click();
});

test('the Auth Register test', async ({ page }) => {
    test.setTimeout(60000);
await page.goto('http://localhost:4200/');
await page.getByRole('link', { name: 'Auth' }).click();
await page.getByRole('link', { name: 'Login' }).click();
await page.getByRole('link', { name: 'Register' }).click();
await page.getByRole('textbox', { name: 'Full name:' }).click();
await page.getByRole('textbox', { name: 'Full name:' }).fill('Test Full Name');
await page.getByRole('textbox', { name: 'Full name:' }).press('Tab');
await page.getByRole('textbox', { name: 'Email address:' }).fill('TestMail@yahoo.com');
await page.getByRole('textbox', { name: 'Email address:' }).press('Tab');
await page.getByRole('textbox', { name: 'Password:', exact: true }).fill('123123');
await page.getByRole('textbox', { name: 'Password:', exact: true }).press('Tab');
await page.getByRole('textbox', { name: 'Repeat password:' }).fill('123123');
await page.locator('span').first().click();
await page.getByRole('button', { name: 'Register' }).click();
});


test('the Auth Request/Reset password test', async ({ page }) => {
    test.setTimeout(60000);
await page.goto('http://localhost:4200/');
await page.getByRole('link', { name: 'Auth' }).click();
await page.getByRole('link', { name: 'Login' }).click();
await page.getByRole('link', { name: 'Request Password' }).click();
await page.getByRole('textbox', { name: 'Enter your email address:' }).click();
await page.getByRole('textbox', { name: 'Enter your email address:' }).fill('test@yahoo.com');
await page.getByRole('button', { name: 'Request password' }).click();
await page.getByRole('link', { name: 'Reset Password' }).click();
await page.getByRole('textbox', { name: 'New Password:' }).click();
await page.getByRole('textbox', { name: 'New Password:' }).fill('test444');
await page.getByRole('textbox', { name: 'Confirm Password:' }).click();
await page.getByRole('textbox', { name: 'Confirm Password:' }).fill('test444');
await page.getByRole('button', { name: 'Change password' }).click();
});