import { CtaButton } from '../components/CtaButton'
import { Section } from '../components/Section'

const worries = [
  '身体や見た目のことで、ずっと自信が持てない',
  '性のことを誰にも聞けず、ひとりで調べ続けている',
  'ネットの情報が多すぎて、何を信じればいいか分からない',
  '病院に行くべきなのかも、判断がつかない',
  '他人と比べて、落ち込んでしまう',
  '友人や家族には、とても話せない',
]

/** 出典：株式会社TENGAヘルスケア プレスリリース（PR TIMES, 2026年10月8日公表）。数値は改変しないこと */
const SOURCE_URL = 'https://prtimes.jp/main/html/rd/p/000000019.000111841.html'

export function Concerns() {
  return (
    <Section id="about" tone="mist" title="こんなこと、誰にも相談できずにいませんか？">
      <ul className="grid gap-3 sm:grid-cols-2">
        {worries.map((w) => (
          <li key={w} className="flex items-start gap-3 rounded-xl bg-surface px-5 py-4 text-base text-ink">
            <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-1 h-5 w-5 shrink-0 text-sage-700" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2.5" y="2.5" width="15" height="15" rx="4" />
              <path d="M6 10.5l2.5 2.5L14 7.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {w}
          </li>
        ))}
      </ul>

      <div className="mt-10 rounded-2xl bg-navy px-6 py-7 text-ivory sm:px-8">
        <p className="text-lg font-bold sm:text-xl">その悩みは、あなただけではありません。</p>
        <p className="mt-3 text-[15px] text-ivory-soft sm:text-base">
          20〜50代の男性4,000人への調査では、33.7％が何らかの性の悩みを抱え、91.8％が「相談先や頼り先がない、思い浮かばない」と回答しています。
        </p>
        <p className="mt-3 text-xs text-ivory-soft">
          出典：株式会社TENGAヘルスケア『
          <a href={SOURCE_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-ivory">
            【男性の性のお悩み調査】3人に1人以上が「悩みあり」、一方で91.8％が「相談先がない」
            <span className="sr-only">（新しいタブで開きます）</span>
          </a>
          』2026年10月8日公表（調査期間：2026年5月27日〜6月2日、インターネット調査）。His Recoveriesの利用実績ではありません。
        </p>
      </div>

      <div className="mt-12 text-center">
        <p className="mb-5 text-base font-bold text-ink sm:text-lg">ひとつでも当てはまるなら、まず30分、話してみませんか。</p>
        <CtaButton className="w-full sm:w-auto" />
      </div>
    </Section>
  )
}
