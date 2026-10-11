import { renderToString } from 'react-dom/server'
import { App, type PageKey } from './App'

/** ビルド後のプリレンダリング用（scripts/prerender.mjs から呼ばれる） */
export function render(page: PageKey) {
  return renderToString(<App page={page} />)
}
