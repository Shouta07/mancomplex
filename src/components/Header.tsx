import { CtaButton } from './CtaButton'
import { Logo } from './Logo'

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
        <div className="flex items-center">
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
