import { OPERATOR } from '../config/site'

const links = [
  { href: '/#about', label: 'サービスについて' },
  { href: '/#faq', label: 'よくある質問' },
  { href: '/company/#contact', label: 'お問い合わせ' },
  { href: '/privacy/', label: 'プライバシーポリシー' },
  { href: '/terms/', label: '利用規約' },
  { href: '/company/', label: '運営者情報' },
]

export function Footer() {
  return (
    <footer className="border-t border-line bg-mist px-4 pb-28 pt-14 sm:px-6 sm:pb-14">
      <div className="mx-auto max-w-5xl">
        <p className="text-lg font-bold tracking-[0.06em]">His Recoveries</p>
        <nav aria-label="フッターメニュー" className="mt-6">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-1 text-[15px] text-ink-soft sm:flex sm:flex-wrap">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="inline-block py-2 hover:text-sage-700 hover:underline underline-offset-4">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="mt-8 text-sm text-ink-soft">
          運営：{OPERATOR.companyName}（{OPERATOR.companyNameEn}）
        </p>
        <p className="mt-2 text-xs leading-relaxed text-ink-soft">
          His Recoveries は医療機関ではなく、診断・治療を提供するサービスではありません。
        </p>
        <p className="mt-6 text-xs text-ink-soft">© {OPERATOR.companyNameEn}</p>
      </div>
    </footer>
  )
}
