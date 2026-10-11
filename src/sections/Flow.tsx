import { CtaButton } from '../components/CtaButton'
import { Section } from '../components/Section'

const steps = [
  { title: 'TimeRexで日時を選ぶ', body: '予約カレンダーから、空いている日時を選びます。' },
  {
    title: '必要最低限の情報を入力',
    body: 'メールアドレスなどの連絡先と、選択式の簡単な質問だけ。身体や性に関する詳しい内容を書く必要はありません。',
  },
  { title: 'Google Meetで30分相談', body: 'メールで届くURLから参加します。話せる範囲からで大丈夫です。' },
  {
    title: 'まとめを受け取る（希望者のみ）',
    body: 'ご希望と同意がある場合、対話を整理したまとめをメールでお送りします。',
  },
]

export function Flow() {
  return (
    <Section id="flow" eyebrow="ご利用の流れ" title="初回30分。まずは話すことから。">
      <ol className="grid gap-4 md:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.title} className="relative rounded-2xl border border-line bg-surface p-6">
            <p className="text-sm font-bold tracking-[0.12em] text-sage-700">STEP {i + 1}</p>
            <h3 className="mt-2 text-lg font-bold">{s.title}</h3>
            <p className="mt-2 text-[15px] text-ink-soft">{s.body}</p>
          </li>
        ))}
      </ol>
      <p className="mt-6 text-sm text-ink-soft">
        ※ 初回30分の相談は無料です。継続支援や有料サービスをご案内する場合は、内容と料金を事前にお伝えします。
      </p>
      <div className="mt-12 text-center">
        <CtaButton className="w-full sm:w-auto" />
      </div>
    </Section>
  )
}
