import {test} from '@playwright/test';

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