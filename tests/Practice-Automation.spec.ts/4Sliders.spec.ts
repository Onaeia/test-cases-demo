import { test, expect } from '@playwright/test';

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