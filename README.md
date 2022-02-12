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
* そのまま`npm ci`すると各ブラウザバイナリのダウンロードが同時に実行される。`env PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 npm ci`としてスキップしつつ、別途`npx playwright install`でダウンロードする方が安心（プログレスバーが正しく動く的な意味で）
* ブラウザバイナリは`$HOME/.cache/ms-playwright`にダウンロードされる
* WindowsやLinuxなどの環境では`npx playwright install-deps`が必要かもしれない。必要な場合はエラーメッセージにわかりやすく表示されるので、それに従えばok

## 参考にする場合
ReactやStorybookの基本以外で書く部分は`src/Storyshots.test.ts`がほぼ全て。`npx create-react-app`と`npx sb init`終了後から、マルチデバイスのスクショが取れるまでの差分は[こちら](https://github.com/cumet04/sbox_storyshots-playwright/compare/6de3772af5458ecc6b7a1071d31438373bef034e..764c96ddc3a752336a3d9a5acaed0edf6abe1ef9)。

かなり丁寧にcommitを積んだつもりなので、commitを一つ一つ追いかければだいたい分かると思われる。
