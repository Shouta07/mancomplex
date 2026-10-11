# His Recoveries LP

人に言いにくい悩みを相談できるサービス「His Recoveries」（運営：バイタリティデザイン合同会社）のランディングページです。

- Vite + React 18 + TypeScript + Tailwind CSS v4
- ビルド時に全ページを静的HTMLへプリレンダリング（JS無効環境・検索エンジンでも本文が表示されます）
- 解析・広告トラッキングは一切入れていません。外部スクリプトは予約カレンダー（TimeRex）のみで、予約セクションに近づいた時点で読み込みます

## ローカルでの起動

```bash
npm install
npm run dev          # 開発サーバー http://localhost:5173
npm run build        # 型チェック → ビルド → プリレンダリング（dist/）
npm run preview      # ビルド結果の確認
npm run test:e2e     # ビルド済み dist に対する自動テスト（Playwright + axe）
```

`test:e2e` は Chromium を使います。`/opt/pw-browsers/chromium` が無い環境では `CHROMIUM_PATH` でブラウザの実行ファイルを指定してください。

## 設定（`src/config/site.ts` で一元管理）

| 項目 | 状態 | 説明 |
| --- | --- | --- |
| `TIMEREX_URL` | 設定済み | `https://timerex.net/s/hisrecoveries/4009b870`。すべてのCTAは `#booking`（TimeRex埋め込み）へ、最終CTAのボタンはこのURLへ遷移します |
| `CONTACT_EMAIL` | **未設定** | 問い合わせ用メールアドレス |
| `OPERATOR.representative` / `OPERATOR.address` | **未設定** | 運営者情報 |
| `LEGAL_REVIEWED` | `false` | 法務確認が終わるまで、規約・ポリシーに「確認中の案」と表示されます |
| `LEGAL_EFFECTIVE_DATE` | **未設定** | 規約・ポリシーの制定日 |
| `VITE_SITE_URL`（環境変数） | **未設定** | 本番URL。設定すると canonical / og:url / og:image を出力します（`.env.example` 参照） |

未設定の項目は、画面上に黄色の「【公開前に入力：…】」として表示され、`npm run build` 時にも警告が出ます。実在しない値は入れないでください。

## ディレクトリ構成

```
index.html, privacy/, terms/, company/   各ページのHTML（タイトル・OGPなど）
src/config/site.ts                       予約URL・運営者情報などの設定
src/sections/                            LPの各セクション
src/components/                          ヘッダー・CTA・TimeRex埋め込み・固定CTAなど
src/pages/                               トップ・プライバシーポリシー（案）・利用規約（案）・運営者情報
scripts/prerender.mjs                    ビルド後の静的HTML書き出し
tests/e2e.mjs                            自動テスト
docs/LAUNCH_CHECKLIST.md                 公開前の確認事項・運用設計
```

## デプロイ

`npm run build` で生成される `dist/` を静的ホスティング（Vercel / Netlify / Cloudflare Pages など）に配置してください。`/privacy/` のようなディレクトリ形式のURLを使っています。
