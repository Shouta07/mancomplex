// ビルド済みサイト（dist）を対象にした動作確認。
// 使い方: npm run build && npm run test:e2e
// 環境変数 CHROMIUM_PATH でブラウザを指定可能（既定: /opt/pw-browsers/chromium があればそれを使用）
import { existsSync, mkdirSync } from 'node:fs'
import { preview } from 'vite'
import { chromium } from 'playwright-core'
import { AxeBuilder } from '@axe-core/playwright'

const executablePath = process.env.CHROMIUM_PATH ?? (existsSync('/opt/pw-browsers/chromium') ? '/opt/pw-browsers/chromium' : undefined)
const server = await preview({ preview: { port: 4317, strictPort: true }, logLevel: 'silent' })
const base = 'http://localhost:4317'
const browser = await chromium.launch({ executablePath })
mkdirSync('screenshots', { recursive: true })

let failures = 0
const ok = (cond, msg) => {
  console.log(`${cond ? '✓' : '✗'} ${msg}`)
  if (!cond) failures++
}

const pages = ['/', '/privacy/', '/terms/', '/company/']
const viewports = { mobile: { width: 375, height: 812 }, desktop: { width: 1366, height: 900 } }

for (const [vpName, viewport] of Object.entries(viewports)) {
  const ctx = await browser.newContext({ viewport, locale: 'ja-JP' })
  for (const path of pages) {
    const page = await ctx.newPage()
    const errors = []
    page.on('console', (m) => {
      // 外部（TimeRex）への接続失敗はサンドボックスのネットワーク制限によるもののため除外
      if (m.type() === 'error' && !/timerex|ERR_|Failed to load resource/i.test(m.text())) errors.push(m.text())
    })
    page.on('pageerror', (e) => errors.push(String(e)))
    const res = await page.goto(base + path, { waitUntil: 'networkidle' })
    ok(res?.status() === 200, `[${vpName}] ${path} HTTP 200`)
    ok(errors.length === 0, `[${vpName}] ${path} コンソールエラーなし ${errors.join(' | ')}`)
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)
    ok(overflow <= 0, `[${vpName}] ${path} 横スクロールなし (overflow=${overflow}px)`)
    ok((await page.locator('h1').count()) === 1, `[${vpName}] ${path} h1 が1つ`)

    const axe = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).exclude('#timerex_calendar').analyze()
    const serious = axe.violations.filter((v) => ['serious', 'critical'].includes(v.impact ?? ''))
    ok(serious.length === 0, `[${vpName}] ${path} axe（serious/critical）違反なし ${serious.map((v) => `${v.id}(${v.nodes.length})`).join(', ')}`)

    await page.screenshot({ path: `screenshots/${vpName}${path.replaceAll('/', '_') || '_'}.png`, fullPage: true })
    await page.close()
  }
  await ctx.close()
}

// --- トップページの詳細確認 ---
const ctx = await browser.newContext({ viewport: viewports.mobile })
const page = await ctx.newPage()
await page.goto(base + '/', { waitUntil: 'networkidle' })

// 内部リンク（ページ・アンカー）がすべて存在するか
const hrefs = await page.$$eval('a[href]', (as) => [...new Set(as.map((a) => a.getAttribute('href')))])
for (const href of hrefs) {
  if (href.startsWith('#')) {
    ok((await page.locator(href).count()) === 1, `アンカー ${href} の遷移先が存在`)
  } else if (href.startsWith('/')) {
    const [p, hash] = href.split('#')
    const r = await page.request.get(base + p)
    ok(r.status() === 200, `内部リンク ${href} → ${r.status()}`)
    if (hash) {
      const sub = await ctx.newPage()
      await sub.goto(base + p)
      ok((await sub.locator('#' + hash).count()) === 1, `内部リンク ${href} のアンカーが存在`)
      await sub.close()
    }
  } else {
    ok(/^https:\/\//.test(href), `外部リンク ${href} は https`)
  }
}

// CTA
const ctas = page.locator('a', { hasText: /無料で30分相談する|無料相談/ })
const ctaCount = await ctas.count()
ok(ctaCount >= 3, `CTA が複数配置されている (${ctaCount}件)`)
for (let i = 0; i < ctaCount; i++) {
  const href = await ctas.nth(i).getAttribute('href')
  ok(href === '#booking' || href === 'https://timerex.net/s/hisrecoveries/4009b870', `CTA ${i + 1} の遷移先: ${href}`)
}
await page.locator('header a', { hasText: '無料相談' }).click()
await page.waitForTimeout(800)
ok(await page.locator('#booking').isVisible(), 'ヘッダーCTAで予約セクションに遷移')
ok((await page.locator('#timerex_calendar').getAttribute('data-url')) === 'https://timerex.net/s/hisrecoveries/4009b870', 'TimeRex ウィジェットに予約URLが設定されている')
ok((await page.locator('script#timerex_embed').getAttribute('src')) === 'https://asset.timerex.net/js/embed.js', 'TimeRex 埋め込みスクリプトが読み込まれる')

// 運営者の名称はサイトのどこにも表示しない
const checker = await ctx.newPage()
for (const path of pages) {
  await checker.goto(base + path)
  const html = await checker.content()
  ok(!/バイタリティ|Vitality Design/i.test(html), `${path} に運営会社名が含まれていない`)
}
await checker.close()

// トラッキング・解析スクリプトがないこと
const scripts = await page.$$eval('script[src]', (s) => s.map((x) => x.src))
ok(scripts.every((s) => s.startsWith(base) || s === 'https://asset.timerex.net/js/embed.js'), `外部スクリプトは TimeRex のみ: ${scripts.join(', ')}`)

await browser.close()
await new Promise((r) => server.httpServer.close(r))
console.log(failures ? `\n${failures} 件の失敗` : '\nすべて成功')
process.exit(failures ? 1 : 0)
