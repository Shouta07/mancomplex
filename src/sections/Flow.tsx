import { CtaButton } from '../components/CtaButton'
import { Section } from '../components/Section'

const steps = [
  { title: '日時を選ぶ', body: '予約カレンダーから選ぶだけ。悩みの詳しい内容を書く必要はありません。' },
  { title: 'Google Meetで30分話す', body: 'うまく言葉にできなくても大丈夫。話せる範囲からで構いません。' },
  { title: '次の一歩を整理する', body: '困っていること、試したこと、これからできることを一緒に整理します。' },
]

const assurances = [
  '医療機関ではありません。診断・治療は行いません',
  '相談内容を本人の同意なく公開しません',
  '記録やAIによるまとめは、同意した場合のみ',
  'LINE登録・アプリのインストールは不要です',
]

export function Flow() {
  return (
    <Section id="flow" title="初回30分無料。まずは話すことから。">
      <ol className="grid gap-4 md:grid-cols-3">
        {steps.map((s, i) => (
          <li key={s.title} className="rounded-2xl border border-line bg-surface p-6">
            <p className="text-sm font-bold tracking-[0.12em] text-sage-700">STEP {i + 1}</p>
            <h3 className="mt-2 text-lg font-bold">{s.title}</h3>
            <p className="mt-2 text-[15px] text-ink-soft">{s.body}</p>
          </li>
        ))}
      </ol>

      <ul className="mt-8 grid gap-x-8 gap-y-2 text-[15px] text-ink-soft sm:grid-cols-2">
        {assurances.map((a) => (
          <li key={a} className="flex gap-2.5">
            <svg aria-hidden="true" viewBox="0 0 16 16" className="mt-1.5 h-3.5 w-3.5 shrink-0 text-sage-700" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M3 8.5l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {a}
          </li>
        ))}
      </ul>

      <div className="mt-12 text-center">
        <CtaButton className="w-full sm:w-auto" />
      </div>
    </Section>
  )
}
