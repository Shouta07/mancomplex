import { Section } from '../components/Section'

/**
 * 出典：株式会社TENGAヘルスケア プレスリリース（PR TIMES, 2026年10月8日公表）
 * 数値・母集団は元記事の表記に合わせること。改変しないこと。
 */
const SOURCE = {
  publisher: '株式会社TENGAヘルスケア',
  title: '【男性の性のお悩み調査】3人に1人以上が「悩みあり」、一方で91.8％が「相談先がない」',
  date: '2026年10月8日',
  url: 'https://prtimes.jp/main/html/rd/p/000000019.000111841.html',
  overview: '調査対象：全国の20〜50代の男性4,000名／調査期間：2026年5月27日〜6月2日／調査方法：インターネット調査',
}

const stats = [
  { value: '33.7', label: '何らかの性の悩みを抱える男性', base: '20〜50代男性4,000名のうち' },
  { value: '91.8', label: '相談先・頼り先がない、思い浮かばないと回答', base: '20〜50代男性への調査で' },
  { value: '81.9', label: '悩みを解決したいと回答', base: '性の悩みを抱える男性のうち' },
]

export function Survey() {
  return (
    <Section id="survey" eyebrow="調査データ" tone="mist" title="悩んでいる人はいる。でも、相談先がない。">
      <ul className="grid gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <li key={s.value} className="rounded-2xl bg-surface p-6 sm:p-7">
            <p className="text-xs text-ink-soft">{s.base}</p>
            <p className="mt-2 font-bold text-sage-700">
              <span className="text-5xl tracking-tight">{s.value}</span>
              <span className="ml-0.5 text-2xl">％</span>
            </p>
            <p className="mt-3 text-[15px] font-bold leading-relaxed text-ink">{s.label}</p>
          </li>
        ))}
      </ul>

      <div className="mt-10 max-w-3xl space-y-5 text-base text-ink-soft sm:text-lg">
        <p>
          株式会社TENGAヘルスケアが20〜50代の男性4,000人を対象に実施した調査によると、33.7％が何らかの性の悩みを抱えており、91.8％が「相談先や頼り先がない、思い浮かばない」と回答しています。
        </p>
        <p>さらに、性の悩みを抱える男性の81.9％が、悩みを解決したいと回答しています。</p>
        <p className="text-ink">
          悩みを解決したい気持ちはある。けれど、誰に相談すればいいか分からない。
          <br className="hidden sm:inline" />
          His Recoveriesは、そんな悩みを抱える人が、まず安心して話し、解決に向けた次の一歩を考えるための相談サービスです。
        </p>
      </div>

      <figure className="mt-10 border-l-2 border-sage-300 pl-4 text-xs leading-relaxed text-ink-soft sm:text-sm">
        <figcaption>
          出典：{SOURCE.publisher}『
          <a href={SOURCE.url} target="_blank" rel="noopener noreferrer" className="text-sage-700 underline underline-offset-4">
            {SOURCE.title}
            <span className="sr-only">（新しいタブで開きます）</span>
          </a>
          』{SOURCE.date}公表
        </figcaption>
        <p className="mt-1">{SOURCE.overview}</p>
        <p className="mt-1">
          ※ 本データは同社による調査結果の引用であり、His Recoveriesの利用実績ではありません。81.9％は性の悩みを抱える男性を母数とした割合です。
        </p>
      </figure>
    </Section>
  )
}
