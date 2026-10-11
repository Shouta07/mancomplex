import { SITE } from '../config/site'
import logoMark from '../assets/logo-mark.png'

const links = [
  { href: '/company/', label: 'お問い合わせ' },
  { href: '/privacy/', label: 'プライバシーポリシー' },
  { href: '/terms/', label: '利用規約' },
]

/** フッター。運営者の名称は表示しない方針 */
export function Footer() {
  return (
    <footer className="bg-charcoal px-4 pb-14 pt-14 text-ivory-soft sm:px-6">
      <div className="mx-auto max-w-5xl">
        <p className="flex items-center gap-2.5 text-lg font-bold tracking-[0.06em] text-ivory">
          <img src={logoMark} alt="" width={32} height={32} className="h-8 w-8 rounded-md bg-ivory p-0.5" />
          His Recoveries
        </p>
        <p className="mt-3 text-sm">{SITE.tagline}</p>
        <nav aria-label="フッターメニュー" className="mt-8">
          <ul className="flex flex-wrap gap-x-6 gap-y-1 text-[15px]">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="inline-block py-2 hover:text-ivory hover:underline underline-offset-4">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="mt-8 text-xs leading-relaxed">
          His Recoveries は医療機関ではなく、診断・治療を提供するサービスではありません。
        </p>
        <p className="mt-6 text-xs">© His Recoveries</p>
      </div>
    </footer>
  )
}
