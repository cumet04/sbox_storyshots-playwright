import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
import playwright from 'playwright'

initStoryshots({
  test: imageSnapshot({
    getCustomBrowser: () => {
      return playwright.chromium.launch()
    }
  })
});
