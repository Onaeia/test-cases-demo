import {test} from '@playwright/test';

test('test Browser Windows', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://demoqa.com/tool-tips');
  await page.getByText('Alerts, Frame & Windows').click();
  await page.getByRole('link', { name: 'Browser Windows' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'New Tab' }).click();
  const page1 = await page1Promise;
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'New Window', exact: true }).click();
  const page2 = await page2Promise;
  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'New Window Message' }).click();
  const page3 = await page3Promise;
});

test('test Alerts', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://demoqa.com/tool-tips');
  await page.getByText('Alerts, Frame & Windows').click();
  await page.getByRole('link', { name: 'Alerts' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.locator('#alertButton').click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.locator('#timerAlertButton').click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.locator('#confirmButton').click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.locator('#promtButton').click();
  });


  test('test Modal Dialogs', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://demoqa.com/tool-tips');
    await page.getByText('Alerts, Frame & Windows').click();
    await page.getByRole('link', { name: 'Modal Dialogs' }).click();
    await page.getByRole('button', { name: 'Small modal' }).click();
    await page.getByText('Close').click();
    await page.getByRole('button', { name: 'Small modal' }).click();
    await page.getByLabel('Close').click();
    await page.getByRole('button', { name: 'Large modal' }).click();
    await page.getByText('Close').click();
    await page.getByRole('button', { name: 'Large modal' }).click();
    await page.getByLabel('Close').click();
      });