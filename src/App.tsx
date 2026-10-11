import { Home } from './pages/Home'
import { PrivacyPolicy } from './pages/PrivacyPolicy'

export type PageKey = 'home' | 'privacy'

export function App({ page }: { page: PageKey }) {
  return page === 'privacy' ? <PrivacyPolicy /> : <Home />
}
