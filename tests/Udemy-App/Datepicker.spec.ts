
import {test} from '@playwright/test';

test('Forms -> Datepicker', async ({ page }) => {
    test.setTimeout(60000);
await page.goto('http://localhost:4200/');
await page.getByRole('link', { name: 'Forms' }).click();
await page.getByRole('link', { name: 'Datepicker' }).click();
await page.goto('http://localhost:4200/pages/forms/datepicker');
await page.getByRole('textbox', { name: 'Form Picker' }).click();
await page.getByText('13').click();
await page.getByRole('textbox', { name: 'Range Picker' }).click();
await page.getByText('15').click();
await page.getByRole('button').nth(4).click();
await page.getByRole('textbox', { name: 'Min Max Picker' }).click();
await page.getByText('13').click();
});