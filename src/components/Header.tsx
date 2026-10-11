import { CtaButton } from './CtaButton'
import { Logo } from './Logo'
import { COUNSELOR_SECTION_VISIBLE } from '../config/counselors'

const links = [
  { href: '/#about', label: 'サービスについて' },
  ...(COUNSELOR_SECTION_VISIBLE ? [{ href: '/#counselors', label: '相談相手について' }] : []),
  { href: '/#flow', label: 'ご利用の流れ' },
  { href: '/#faq', label: 'よくある質問' },
]

export function Header({ showCta = true }: { showCta?: boolean }) {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-canvas/95 backdrop-blur supports-[backdrop-filter]:bg-canvas/85">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 focus:rounded focus:bg-surface focus:px-3 focus:py-2"
      >
        本文へスキップ
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo className="text-lg sm:text-xl" />
        <div className="flex items-center gap-6">
          <nav aria-label="メインメニュー" className="hidden lg:block">
            <ul className="flex gap-5 text-[15px] text-ink-soft">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="py-2 hover:text-sage-700 hover:underline underline-offset-4">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {showCta && (
            <>
              <span className="hidden sm:block">
                <CtaButton size="md" label="無料で30分相談する" />
              </span>
              <span className="sm:hidden">
                <CtaButton size="md" label="無料相談" className="whitespace-nowrap" />
              </span>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
