import { SITE } from '../config/site'
import logoMark from '../assets/logo-mark.png'

const links = [
  { href: '/#about', label: 'サービスについて' },
  { href: '/#faq', label: 'よくある質問' },
  { href: '/company/#contact', label: 'お問い合わせ' },
  { href: '/privacy/', label: 'プライバシーポリシー' },
  { href: '/terms/', label: '利用規約' },
  { href: '/company/', label: '事業者情報' },
]

/**
 * フッター。ブランドの表側では会社名を前面に出さない方針のため、会社名は表示せず
 * 「事業者情報」ページへのリンクで法令上必要な情報にたどり着けるようにする。
 */
export function Footer() {
  return (
    <footer className="bg-charcoal px-4 pb-28 pt-14 text-ivory-soft sm:px-6 sm:pb-14">
      <div className="mx-auto max-w-5xl">
        <p className="flex items-center gap-2.5 text-lg font-bold tracking-[0.06em] text-ivory">
          <img src={logoMark} alt="" width={32} height={32} className="h-8 w-8 rounded-md bg-ivory p-0.5" />
          His Recoveries
        </p>
        <p className="mt-3 text-sm">{SITE.tagline}</p>
        <nav aria-label="フッターメニュー" className="mt-8">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-1 text-[15px] sm:flex sm:flex-wrap">
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
          His Recoveries は医療機関ではなく、診断・治療を提供するサービスではありません。運営主体・連絡先は
          <a href="/company/" className="underline underline-offset-4 hover:text-ivory">
            事業者情報
          </a>
          に掲載しています。
        </p>
        <p className="mt-6 text-xs">© His Recoveries</p>
      </div>
    </footer>
  )
}
