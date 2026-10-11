import { Home } from './pages/Home'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { Terms } from './pages/Terms'
import { Company } from './pages/Company'

export type PageKey = 'home' | 'privacy' | 'terms' | 'company'

export function App({ page }: { page: PageKey }) {
  switch (page) {
    case 'privacy':
      return <PrivacyPolicy />
    case 'terms':
      return <Terms />
    case 'company':
      return <Company />
    default:
      return <Home />
  }
}
