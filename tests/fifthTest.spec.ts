import { test, expect } from '@playwright/test';


test('the Tables&Data', async ({ page }) => {
    test.setTimeout(60000);
await page.goto('http://localhost:4200/');
await page.getByRole('link', { name: 'Tables & Data' }).click();
await page.getByRole('link', { name: 'Smart Table' }).click();
await page.locator('thead').getByRole('link').filter({ hasText: /^$/ }).click();
await page.getByRole('textbox', { name: 'ID' }).first().click();
await page.getByRole('textbox', { name: 'ID' }).first().fill('4');
await page.getByRole('row', { name: '' }).getByPlaceholder('First Name').click();
await page.getByRole('row', { name: '' }).getByPlaceholder('First Name').fill('Test');
await page.getByRole('row', { name: '' }).getByPlaceholder('Last Name').click();
await page.getByRole('row', { name: ' 4 Test' }).getByPlaceholder('Last Name').fill('Test');
await page.getByRole('row', { name: ' 4 Test Tes' }).getByPlaceholder('Username').click();
await page.getByRole('row', { name: ' 4 Test Test' }).getByPlaceholder('Username').fill('Test');
await page.getByRole('row', { name: ' 4 Test Test Test' }).getByPlaceholder('E-mail').click();
await page.getByRole('row', { name: ' 4 Test Test Test' }).getByPlaceholder('E-mail').fill('Test');
await page.getByRole('row', { name: ' 4 Test Test Test Test' }).getByPlaceholder('Age').click();
await page.getByRole('row', { name: ' 4 Test Test Test Test' }).getByPlaceholder('Age').fill('22');
await page.locator('i').nth(1).click();
await page.locator('i').nth(1).click();
await page.locator('i').nth(2).click();
await page.getByRole('link', { name: '2' }).click();
await page.getByRole('link', { name: '3' }).click();
await page.getByRole('link', { name: '4' }).click();
await page.getByRole('link', { name: 'Tree Grid' }).click();
await page.getByRole('textbox', { name: 'Search:' }).click();
await page.getByRole('textbox', { name: 'Search:' }).fill('te');
await page.getByRole('gridcell', { name: 'secret-note.txt' }).click();
await page.getByRole('textbox', { name: 'Search:' }).click();
await page.getByRole('textbox', { name: 'Search:' }).fill('');
await page.getByRole('row', { name: 'expand Projects 1.8 MB dir' }).getByLabel('expand').click();
await page.getByRole('gridcell', { name: 'project-1.doc' }).click();
await page.getByRole('gridcell', { name: 'project-2.doc' }).click();
});