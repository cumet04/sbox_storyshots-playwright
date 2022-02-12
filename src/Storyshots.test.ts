import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
import playwright from 'playwright'
import path from 'path'

let browser: playwright.Browser;
afterAll(() => {
  return browser.close();
});

initStoryshots({
  test: imageSnapshot({
    storybookUrl: `file://${path.resolve(__dirname, '../storybook-static')}`,
    // MEMO: puppeteerパッケージを入れているとここで型エラーになる
    getCustomBrowser: async () => {
      browser = await playwright.chromium.launch()
      return browser
    }
  })
});
