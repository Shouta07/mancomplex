import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { App, type PageKey } from './App'
import { missingConfig } from './config/site'
import './styles.css'

const page = (document.body.dataset.page ?? 'home') as PageKey
const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <App page={page} />
  </StrictMode>
)

// ビルド時にプリレンダリング済みならハイドレート、開発サーバーでは通常描画
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)

if (import.meta.env.DEV) {
  const missing = missingConfig()
  if (missing.length) console.warn('[His Recoveries] 公開前に入力が必要な設定（src/config/site.ts）:', missing)
}
