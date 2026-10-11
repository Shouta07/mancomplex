import { Section } from '../components/Section'

const faqs = [
  {
    q: '本当に無料ですか？',
    a: '初回の30分相談は無料です。有料のサービスをご案内する場合は、内容と料金を事前にお伝えし、お申し込みがない限り費用は発生しません。',
  },
  {
    q: '何を話せばよいか分かりません。',
    a: 'うまく言葉にできなくても大丈夫です。今困っていることや気になっていることから、話せる範囲でお聞かせください。',
  },
  {
    q: '本名を伝える必要はありますか？',
    a: '予約にはメールアドレスなどの連絡先が必要です。予約時の名前の扱いやGoogle Meetでの表示名については、予約前にご案内します。',
  },
  {
    q: '医療的な診断や治療を受けられますか？',
    a: '医療機関ではないため、診断・治療は行いません。医療的な判断が必要と考えられる場合は、医療機関への相談をご案内します。',
  },
]

export function Faq() {
  return (
    <Section id="faq" tone="mist" title="よくある質問">
      <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-surface">
        {faqs.map((f) => (
          <details key={f.q} className="group">
            <summary className="flex min-h-16 cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left font-bold hover:bg-mist sm:px-7">
              <span className="flex gap-3">
                <span aria-hidden="true" className="text-sage-700">
                  Q.
                </span>
                {f.q}
              </span>
              <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5 shrink-0 text-navy transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 8l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </summary>
            <div className="flex gap-3 px-5 pb-6 text-[15px] text-ink-soft sm:px-7 sm:text-base">
              <span aria-hidden="true" className="font-bold text-slate">
                A.
              </span>
              <p>{f.a}</p>
            </div>
          </details>
        ))}
      </div>
      <p className="mt-6 text-sm text-ink-soft">
        個人情報の取り扱いは
        <a href="/privacy/" className="text-sage-700 underline underline-offset-4">
          プライバシーポリシー
        </a>
        をご確認ください。
      </p>
    </Section>
  )
}
