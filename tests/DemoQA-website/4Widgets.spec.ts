import {test} from '@playwright/test';

test('test Accordian', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://demoqa.com/tool-tips');
  await page.getByText('Widgets').click();
  await page.getByRole('link', { name: 'Accordian' }).click();
  await page.getByRole('button', { name: 'What is Lorem Ipsum?' }).click();
  await page.getByRole('button', { name: 'Where does it come from?' }).click();
  await page.getByRole('button', { name: 'Where does it come from?' }).click();
  await page.getByRole('button', { name: 'Why do we use it?' }).click();
  await page.getByRole('button', { name: 'Why do we use it?' }).click();
  });


test('test Auto Complete', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://demoqa.com/tool-tips');
    await page.getByText('Widgets').click(); 
  await page.getByRole('link', { name: 'Auto Complete' }).click();
  await page.locator('.auto-complete__input-container').first().click();
  await page.locator('#autoCompleteMultipleInput').fill('a');
  await page.getByRole('option', { name: 'Black' }).click();
  await page.locator('#autoCompleteMultipleInput').fill('b');
  await page.getByRole('option', { name: 'Blue' }).click();
  await page.locator('#autoCompleteMultipleInput').fill('w');
  await page.getByRole('option', { name: 'Yellow' }).click();
  await page.getByRole('button', { name: 'Remove Yellow' }).click();
  await page.getByRole('button', { name: 'Remove Blue' }).click();
  await page.locator('#autoCompleteMultipleInput').fill('w');
  await page.getByRole('option', { name: 'White' }).click();
  await page.locator('#autoCompleteMultipleInput').fill('w');
  await page.getByRole('option', { name: 'Yellow' }).click();
  await page.locator('.auto-complete__value-container.css-hlgwow > .auto-complete__input-container').click();
  await page.locator('#autoCompleteSingleInput').fill('red');
  await page.getByRole('option', { name: 'Red' }).click();
  await page.locator('.auto-complete__indicator > .css-8mmkcg > path').click();
   });

test('test Date Picker', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://demoqa.com/tool-tips');
  await page.getByText('Widgets').click();
  await page.getByRole('link', { name: 'Date Picker' }).click();
  // Date picker - type date directly
  await page.locator('#datePickerMonthYearInput').click();
  await page.locator('#datePickerMonthYearInput').press('Control+a');
  await page.locator('#datePickerMonthYearInput').fill('04/05/2014');
  await page.locator('#datePickerMonthYearInput').press('Enter');
  // Date and time picker - type date directly
  await page.locator('#dateAndTimePickerInput').click();
  await page.locator('#dateAndTimePickerInput').press('Control+a');
  await page.locator('#dateAndTimePickerInput').fill('June 4, 2026 11:15 AM');
  await page.locator('#dateAndTimePickerInput').press('Enter');
});


     test('test Slider', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://demoqa.com/tool-tips');
  await page.getByText('Widgets').click();
  await page.getByRole('link', { name: 'Slider' }).click();
  await page.locator('#slider').fill('100');
  await page.locator('#slider').fill('80');
  await page.locator('#slider').fill('20');
  await page.locator('#slider').fill('40');
    });


 test('test Progress Bar', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://demoqa.com/tool-tips');
  await page.getByText('Widgets').click();
  await page.getByRole('link', { name: 'Progress Bar' }).click();
  await page.evaluate(() => window.scrollTo(0, 400));
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Start' }).click();
  await page.waitForTimeout(2000); 
  await page.getByRole('button', { name: 'Stop' }).click();
  await page.getByRole('button', { name: 'Start' }).click();
  await page.waitForTimeout(2000); 
  await page.getByRole('button', { name: 'Stop' }).click();
  await page.getByRole('button', { name: 'Start' }).click();
  await page.waitForTimeout(15000);
  await page.getByRole('button', { name: 'Reset' }).click();
});


          test('test Tabs', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://demoqa.com/tool-tips');
  await page.getByText('Widgets').click();
  await page.getByRole('link', { name: 'Tabs' }).click();
  await page.getByRole('tab', { name: 'Origin' }).click();
  await page.getByRole('tab', { name: 'Use' }).click();
  await page.locator('li').filter({ hasText: 'More' }).click();
  await page.getByRole('tab', { name: 'What' }).click();
  await page.getByRole('tab', { name: 'Origin' }).click();
  await page.locator('li').filter({ hasText: 'More' }).click();
  await page.getByRole('tab', { name: 'Use' }).click();
    });

 test('test Tool Tips', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://demoqa.com/tool-tips');
  await page.getByText('Widgets').click();
  await page.getByRole('link', { name: 'Tool Tips' }).click();
  // Hover over the button
  await page.getByRole('button', { name: 'Hover me to see' }).hover();
  // Hover over the input field
  await page.getByPlaceholder('Hover me to see').hover();
  // Hover over the links
  await page.getByRole('link', { name: 'Contrary' }).hover();
  await page.getByRole('link', { name: '1.10.32' }).hover();
});


test('test Menu', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://demoqa.com/tool-tips');
  await page.getByText('Widgets').click();
  await page.getByRole('link', { name: 'Menu', exact: true }).click();
  await page.getByRole('link', { name: 'Main Item 1' }).hover();
  await page.getByRole('link', { name: 'Main Item 2' }).hover();
  await page.getByRole('link', { name: 'Sub Item' }).first().hover();
  await page.getByRole('link', { name: 'Sub Sub List' }).hover();
  await page.getByRole('link', { name: 'Sub Sub Item 1' }).hover();
  await page.getByRole('link', { name: 'Sub Sub Item 2' }).hover();
  await page.getByRole('link', { name: 'Main Item 3' }).hover();
});


test('test Select Menu', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://demoqa.com/select-menu');
  // scroll past the ad
  await page.evaluate(() => window.scrollTo(0, 400));
  await page.waitForTimeout(1000);
  // Select Value dropdown
  await page.locator('#withOptGroup').click();
  await page.getByRole('option', { name: 'Group 1, option 2' }).click();
  // Select One dropdown
  await page.locator('#selectOne').click();
  await page.getByRole('option', { name: 'Mr.' }).click();
  // Old Style Select Menu
  await page.locator('#oldSelectMenu').selectOption('2');
  // Multiselect dropdown - using specific IDs from error message
  await page.locator('#react-select-4-input').click();
  await page.locator('#react-select-4-option-0').click(); // Green
  await page.locator('#react-select-4-input').click();
  await page.locator('#react-select-4-option-1').click(); // Blue
  await page.locator('#react-select-4-input').click();
  await page.locator('#react-select-4-option-2').click(); // Black
  // Standard multi select
  await page.locator('#cars').selectOption(['volvo', 'saab', 'opel']);
});