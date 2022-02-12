import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
import { Browser, chromium, devices } from 'playwright'
import path from 'path'


let browser: Browser;
afterAll(() => {
  return browser.close();
});

initStoryshots({
  test: imageSnapshot({
    storybookUrl: `file://${path.resolve(__dirname, '../storybook-static')}`,
    // MEMO: puppeteerパッケージを入れているとここで型エラーになる
    getCustomBrowser: async () => {
      browser = await chromium.launch()
      const context = await browser.newContext(devices['Pixel 5'])
      return context
    },
    getMatchOptions: (options) => {
      const { kind, story } = options.context

      const dir = path.resolve(__dirname, '__image_snapshots__', kind)
      const name = story.replaceAll(/\s/g, '')

      return {
        customSnapshotsDir: path.resolve(dir),
        customSnapshotIdentifier: name,
      };
    },
  })
});
