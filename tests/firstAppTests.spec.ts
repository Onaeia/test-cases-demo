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

test('the Extra Components test', async ({ page }) => {
    test.setTimeout(60000);
await page.goto('http://localhost:4200/');
await page.getByRole('link', { name: 'Extra Components' }).click();
await page.getByRole('link', { name: 'Calendar' }).click();
await page.getByRole('button').nth(4).click();
await page.getByRole('button').nth(3).click();
await page.getByText('4').nth(1).click();
await page.getByRole('button', { name: 'April' }).first().click();
await page.getByText('2026', { exact: true }).click();
await page.getByText('Apr', { exact: true }).click();
await page.locator('nb-calendar-range').getByRole('button', { name: 'April' }).click();
await page.getByText('2027', { exact: true }).click();
await page.getByText('Feb').click();
await page.getByText('4', { exact: true }).nth(1).click();
await page.getByRole('button').filter({ hasText: /^$/ }).nth(3).click();
await page.getByRole('button').filter({ hasText: /^$/ }).nth(4).click();
await page.getByRole('button', { name: 'April' }).nth(1).click();
await page.getByText('2025').click();
await page.getByText('Nov').click();
await page.getByRole('button').filter({ hasText: /^$/ }).nth(5).click();
await page.locator('div:nth-child(3) > nb-calendar > .has-navigation > nb-card > .calendar-navigation > nb-calendar-pageable-navigation > .next-month').click();
await page.getByRole('button', { name: 'November' }).click();
await page.getByText('2026', { exact: true }).click();
await page.getByText('Apr', { exact: true }).click();
await page.getByText('4', { exact: true }).nth(3).click();
await page.locator('body').press('ControlOrMeta+s');
});

test('the Charts test', async ({ page }) => {
    test.setTimeout(60000);
await page.goto('http://localhost:4200/');
await page.getByRole('link', { name: 'Charts', exact: true }).click();
await page.getByRole('link', { name: 'Echarts' }).click();
await page.locator('ngx-echarts-pie canvas').click({
    position: {
      x: 217,
      y: 117
    }
  });
await page.locator('ngx-echarts-pie canvas').click({
    position: {
      x: 137,
      y: 141
    }
  });
await page.locator('ngx-echarts-pie canvas').click({
    position: {
      x: 317,
      y: 165
    }
  });
await page.locator('ngx-echarts-bar canvas').click({
    position: {
      x: 315,
      y: 154
    }
  });
await page.locator('ngx-echarts-line canvas').click({
    position: {
      x: 304,
      y: 108
    }
  });
await page.locator('ngx-echarts-line canvas').click({
    position: {
      x: 347,
      y: 185
    }
  });
await page.locator('ngx-echarts-multiple-xaxis canvas').click({
    position: {
      x: 164,
      y: 154
    }
  });
await page.locator('ngx-echarts-multiple-xaxis canvas').click({
    position: {
      x: 358,
      y: 265
    }
  });
await page.locator('ngx-echarts-area-stack canvas').click({
    position: {
      x: 323,
      y: 74
    }
  });
await page.locator('ngx-echarts-area-stack canvas').click({
    position: {
      x: 163,
      y: 260
    }
  });
await page.locator('ngx-echarts-bar-animation canvas').click({
    position: {
      x: 300,
      y: 130
    }
  });
await page.locator('ngx-echarts-radar > .echart > div > canvas').click({
    position: {
      x: 99,
      y: 71
    }
  });
});


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