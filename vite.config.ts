import { resolve } from 'node:path'
import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { missingConfig } from './src/config/site'

const pages = {
  main: 'index.html',
  privacy: 'privacy/index.html',
}

/**
 * VITE_SITE_URL が設定されている場合のみ、canonical / og:url / og:image を絶対URLで出力する。
 * 本番URLが未確定の段階で、実在しないURLを埋め込まないため。
 */
function absoluteUrlTags(siteUrl: string): Plugin {
  return {
    name: 'absolute-url-tags',
    transformIndexHtml(html, ctx) {
      if (!siteUrl) return html.replace('<!--ABSOLUTE_URL_TAGS-->', '')
      const path = ctx.path.replace(/index\.html$/, '')
      const url = `${siteUrl}${path}`
      const tags = [
        `<link rel="canonical" href="${url}" />`,
        `<meta property="og:url" content="${url}" />`,
        `<meta property="og:image" content="${siteUrl}/og.png" />`,
      ].join('\n    ')
      return html.replace('<!--ABSOLUTE_URL_TAGS-->', tags)
    },
  }
}

/** 公開前に入力が必要な設定をビルド時に警告する */
function configWarning(): Plugin {
  return {
    name: 'config-warning',
    buildStart() {
      const missing = missingConfig()
      if (missing.length) {
        this.warn(`\n[His Recoveries] 公開前に確認・入力が必要な設定があります（src/config/site.ts）:\n  - ${missing.join('\n  - ')}\n`)
      }
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = (env.VITE_SITE_URL ?? '').replace(/\/$/, '')
  return {
    plugins: [react(), tailwindcss(), absoluteUrlTags(siteUrl), configWarning()],
    build: {
      rollupOptions: {
        input: Object.fromEntries(Object.entries(pages).map(([k, v]) => [k, resolve(__dirname, v)])),
      },
    },
  }
})
