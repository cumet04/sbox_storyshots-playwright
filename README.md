# sbox_storyshots-playwright
[storyshotsでスクショ撮るやつ](https://storybook.js.org/addons/@storybook/addon-storyshots-puppeteer)を[playwright](https://playwright.dev/)で動かすテスト

## これは何
addon-storyshots-puppeteerに[カスタムブラウザとしてplaywrightを突っ込んだら動いたよ](https://github.com/storybookjs/storybook/issues/10162#issuecomment-690423930)と言っている人を見かけたので、検証＆実ユースケース想定コードを作ってみるサンプルプロジェクト。

シンプルにCreate React Appにstorybookを導入した環境に対し、storyshots & 各ブラウザ with playwrightsで画像キャプチャが取得できるところまでを試した。

## 動かし方

```
npm ci
npm run build-storybook
npm test
ls src/__image_snapshots__/
```

備考
* そのまま`npm ci`すると各ブラウザバイナリのダウンロードが同時に実行される。`env PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 npm ci`としてスキップしつつ、別途`npx playwright install`でダウンロードする方が安心（プログレスバーが正しく動く的な意味で）。
* ブラウザバイナリは`$HOME/.cache/ms-playwright`にダウンロードされる
* WindowsやLinuxなどの環境では`npx playwright install-deps`が必要かもしれない。必要な場合はエラーメッセージにわかりやすく表示されるので、それに従えばok
