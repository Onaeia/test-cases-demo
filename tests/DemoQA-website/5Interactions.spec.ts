import {test} from '@playwright/test';

test('test Sortable', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://demoqa.com/sortable');
  await page.evaluate(() => window.scrollTo(0, 400));
  await page.waitForTimeout(1000);
  await page.getByLabel('List').getByText('One').click();
  await page.getByLabel('List').getByText('Two').click();
  await page.getByLabel('List').getByText('Three').click();
  await page.getByRole('tab', { name: 'Grid' }).click();
  await page.getByLabel('Grid').getByText('One').click();
  await page.getByLabel('Grid').getByText('Two').click();
  await page.getByLabel('Grid').getByText('Three').click();
});

test('test Selectable', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://demoqa.com/selectable');
  await page.evaluate(() => window.scrollTo(0, 400));
  await page.waitForTimeout(1000);
  await page.getByText('Cras justo odio').click();
  await page.getByText('Dapibus ac facilisis in').click();
  await page.getByText('Morbi leo risus').click();
  await page.getByText('Morbi leo risus').click();
  await page.getByText('Cras justo odio').click();
  await page.getByRole('tab', { name: 'Grid' }).click();
  await page.getByText('One').click();
  await page.getByText('Two').click();
  await page.getByText('Three').click();
  await page.getByText('Three').click();
  await page.getByText('One').click();
});

test('test Resizable', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://demoqa.com/resizable');
  await page.evaluate(() => window.scrollTo(0, 400));
  await page.waitForTimeout(1000);
  const restrictedHandle = page.locator('#resizableBoxWithRestriction .react-resizable-handle');
  const box = await restrictedHandle.boundingBox();
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  await page.mouse.move(box.x + 100, box.y + 100);
  await page.mouse.up();
  const freeHandle = page.locator('#resizable .react-resizable-handle');
  const box2 = await freeHandle.boundingBox();
  await page.mouse.move(box2.x + box2.width / 2, box2.y + box2.height / 2);
  await page.mouse.down();
  await page.mouse.move(box2.x + 150, box2.y + 150);
  await page.mouse.up();
});



// Note: these tests fail on Chrome due to ads blocking elements
// Run with Firefox: npx playwright test --project=firefox
test('test Droppable', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://demoqa.com/droppable');
  await page.evaluate(() => window.scrollTo(0, 400));
  await page.waitForTimeout(1000);
  const dragMe = page.locator('#draggable');
  const dropZone = page.locator('#droppable').first();
  await dragMe.dragTo(dropZone);
  await page.getByRole('tab', { name: 'Accept' }).click();
  const acceptable = page.locator('#acceptable');
  const acceptDropZone = page.locator('#droppable').first();
  await acceptable.dragTo(acceptDropZone);
});




// Note: these tests fail on Chrome due to ads blocking elements
// Run with Firefox: npx playwright test --project=firefox
test('test Draggable', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://demoqa.com/dragabble');
  await page.evaluate(() => window.scrollTo(0, 400));
  await page.waitForTimeout(1000);
  const simpleDrag = page.locator('#dragBox');
  const box = await simpleDrag.boundingBox();
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  await page.mouse.move(box.x + 200, box.y + 100);
  await page.mouse.up();
  await page.getByRole('tab', { name: 'Axis Restricted' }).click();
  const horizontalDrag = page.locator('#restrictedX');
  const box2 = await horizontalDrag.boundingBox();
  await page.mouse.move(box2.x + box2.width / 2, box2.y + box2.height / 2);
  await page.mouse.down();
  await page.mouse.move(box2.x + 200, box2.y);
  await page.mouse.up();
  const verticalDrag = page.locator('#restrictedY');
  const box3 = await verticalDrag.boundingBox();
  await page.mouse.move(box3.x + box3.width / 2, box3.y + box3.height / 2);
  await page.mouse.down();
  await page.mouse.move(box3.x, box3.y + 200);
  await page.mouse.up();
});