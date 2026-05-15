import { test, expect } from '@playwright/test';

test('Radio', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://letcode.in/test');
  await page.getByRole('link', { name: 'Toggle' }).click();
  await page.evaluate(() => window.scrollTo(0, 400));
  await page.waitForTimeout(1000);

  // Simple yes/no radios
  await page.locator('#yes').check();
  await page.locator('#no').check();

  // Confirm only one radio - yes/no
  await page.locator('#one').check();
  await page.locator('#two').check();

  // Find the bug radios
  await page.locator('#nobug').check();
  await page.locator('#bug').check();

  // Foo/Bar radios
  await page.getByRole('radio', { name: 'Foo' }).check();
  await page.getByRole('radio', { name: 'Bar' }).check();

  // Going/Not going radios
  await page.getByRole('radio', { name: 'Going', exact: true }).check();
  await page.getByRole('radio', { name: 'Not going' }).check();

  // Maybe is disabled - assert it
  await expect(page.locator('#maybe')).toBeDisabled();

  // Scroll further down to push ad out of the way
  await page.evaluate(() => window.scrollTo(0, 800));
  await page.waitForTimeout(1000);


  await page.getByRole('checkbox', { name: 'Remember me' }).check({ force: true });
  await page.locator('text=Accept the T&C').locator('..').locator('input[type="checkbox"]').check({ force: true });
  await page.locator('text=I agree to the FAKE terms and conditions').locator('..').locator('input[type="checkbox"]').check({ force: true });
});