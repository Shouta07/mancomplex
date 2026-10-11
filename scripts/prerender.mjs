// vite build 後に各ページの HTML を静的に書き出す（検索エンジン・JS無効環境・初期表示速度のため）
import { readFile, writeFile, rm } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const root = resolve(import.meta.dirname, '..')
const { render } = await import(pathToFileURL(resolve(root, 'dist-ssr/entry-server.js')).href)

const pages = { home: 'index.html', privacy: 'privacy/index.html' }
for (const [page, file] of Object.entries(pages)) {
  const path = resolve(root, 'dist', file)
  const html = await readFile(path, 'utf8')
  if (!html.includes('<div id="root"></div>')) throw new Error(`root not found in ${file}`)
  await writeFile(path, html.replace('<div id="root"></div>', `<div id="root">${render(page)}</div>`))
  console.log(`prerendered ${file}`)
}
await rm(resolve(root, 'dist-ssr'), { recursive: true, force: true })
