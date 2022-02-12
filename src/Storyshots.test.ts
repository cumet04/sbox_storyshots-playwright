import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
import playwright from 'playwright'
import path from 'path'

initStoryshots({
  test: imageSnapshot({
    storybookUrl: `file://${path.resolve(__dirname, '../storybook-static')}`,
    getCustomBrowser: () => {
      return playwright.chromium.launch()
    }
  })
});
