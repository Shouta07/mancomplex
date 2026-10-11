import type { ReactNode } from 'react'
import { Section } from '../components/Section'

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: '本名を伝える必要はありますか？',
    a: '予約時に必要な情報は最小限にします。Google Meetの表示名などの扱いは利用方法によって異なるため、予約前にご案内します。',
  },
  {
    q: '相談内容が他の人に知られませんか？',
    a: (
      <>
        相談内容を本人の同意なく公開しません。個人情報の取り扱いについては
        <a href="/privacy/" className="text-sage-700 underline underline-offset-4">
          プライバシーポリシー
        </a>
        をご確認ください。
      </>
    ),
  },
  {
    q: '専門家による診断や治療ですか？',
    a: '医療機関や専門家による診断・治療ではありません。医療的な判断が必要な場合は、適切な専門家への相談をご案内します。',
  },
  {
    q: 'AIによる記録は必須ですか？',
    a: '必須ではありません。AIによる記録・要約を利用する場合は事前に説明し、同意をいただきます。同意しない場合も相談できます。',
  },
  {
    q: '本当に無料ですか？',
    a: '初回の30分相談は無料です。継続支援や有料サービスをご案内する場合は、内容と料金を事前にお伝えします。',
  },
  {
    q: '何を話せばいいか分かりません。',
    a: 'うまく言葉にできなくても大丈夫です。今困っていることや、気になっていることから、話せる範囲でお聞かせください。',
  },
  {
    q: 'どんな悩みでも相談できますか？',
    a: '身体の悩み、性に関する悩み、自分への自信やコンプレックスなど、人に相談しにくい悩みをお聞きします。ただし、医療的な診断や緊急の対応が必要な場合は、専門機関への相談をお願いすることがあります。',
  },
]

export function Faq() {
  return (
    <Section id="faq" eyebrow="FAQ" tone="mist" title="よくある質問">
      <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-surface">
        {faqs.map((f) => (
          <details key={f.q} className="group">
            <summary className="flex min-h-16 cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left font-bold hover:bg-sage-50 sm:px-7">
              <span className="flex gap-3">
                <span aria-hidden="true" className="text-sage-700">
                  Q.
                </span>
                {f.q}
              </span>
              <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5 shrink-0 text-sage-700 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 8l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </summary>
            <div className="flex gap-3 px-5 pb-6 text-[15px] text-ink-soft sm:px-7 sm:text-base">
              <span aria-hidden="true" className="font-bold text-sage-500">
                A.
              </span>
              <p>{f.a}</p>
            </div>
          </details>
        ))}
      </div>
    </Section>
  )
}
