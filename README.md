# His Recoveries LP

男性が人に言いにくい悩みを相談できるサービス「His Recoveries」のランディングページです。

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
| `src/config/counselors.ts` | **未入力** | 相談担当者の公開プロフィール（ニックネーム・姿勢・バックグラウンド・テーマ）。架空の経歴は入れない |
| `LEGAL_REVIEWED` | `false` | 法務確認が終わるまで、規約・ポリシーに「確認中の案」と表示されます |
| `LEGAL_EFFECTIVE_DATE` | **未設定** | 規約・ポリシーの制定日 |
| `VITE_SITE_URL`（環境変数） | **未設定** | 本番URL。設定すると canonical / og:url / og:image を出力します（`.env.example` 参照） |

未設定の項目は、画面上に黄色の「【公開前に入力：…】」として表示され、`npm run build` 時にも警告が出ます。実在しない値は入れないでください。

## ディレクトリ構成

```
index.html, privacy/, terms/, company/   各ページのHTML（タイトル・OGPなど）
src/config/site.ts                       予約URL・問い合わせ先などの設定
src/sections/                            LPの各セクション
src/components/                          ヘッダー・CTA・TimeRex埋め込み・固定CTAなど
src/pages/                               トップ・プライバシーポリシー（案）・利用規約（案）・お問い合わせ
scripts/prerender.mjs                    ビルド後の静的HTML書き出し
tests/e2e.mjs                            自動テスト
docs/LAUNCH_CHECKLIST.md                 公開前の確認事項・運用設計
brand/                                   ロゴ原本（logo-original.jpg）と背景透過版、生成スクリプト
```

## 方針

- LPの役割は「悩みを想起させて、無料30分相談の予約につなげる」ことだけ。構成は ファーストビュー → 悩みのチェックリスト → 相談の流れ → 相談相手 → FAQ → 予約 に絞っている
- 運営者の名称（会社名・個人名）はサイトのどこにも表示しない。名称・所在地等は問い合わせに応じて開示する（自動テストで確認）

## ブランド

ロゴは `brand/logo-original.jpg`。サイトでは背景を透過したマーク（`src/assets/logo-mark.png`）を使用し、配色はロゴのネイビー `#1f2e48` とセージ `#839184` に合わせています（`src/styles.css`）。

## デプロイ

`npm run build` で生成される `dist/` を静的ホスティング（Vercel / Netlify / Cloudflare Pages など）に配置してください。`/privacy/` のようなディレクトリ形式のURLを使っています。

## 旧ドメインから引き継いでいる301（`vercel.json`）

このサイトは `hisrecoveries.com` で出す。
そのドメインは 2026-10-03 まで、別のサイト（記事71本）が使っていた。

記事は `tashikame.app` へ移してあり、いまは Vercel のドメイン設定で
ドメインごと 301 している。このサイトを載せると、その301が消える。
消えると、外から貼られている記事リンクが全部死ぬ。

だから、この2経路だけは受けてから渡す。

| 経路 | 本数 | 行き先 |
|---|---|---|
| `/areas/*` | 62 | `tashikame.app/areas/*`（同じパス） |
| `/situations/*` | 9 | `tashikame.app/situations/*`（同じパス） |
| `/areas` `/situations` | — | `tashikame.app/articles`（一覧は向こうに無いため） |

このサイトはどちらの経路も使っていないので、ぶつからない。

### いつ消すか

移行が終われば要らない。目安は **2027-10 以降**。
早く切ると、移りきっていない評価とリンクがそこで死ぬ。

Search Console で `hisrecoveries.com` の `/areas/` への流入が
ほぼゼロになったことを確認してから消すこと。
