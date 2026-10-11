import { TimerexWidget } from '../components/TimerexWidget'

const notes = ['医療機関ではありません。診断・治療は行いません', '相談内容を本人の同意なく公開しません', '記録やAIによるまとめは、同意した場合のみ']

export function FinalCta() {
  return (
    <section id="final-cta" aria-labelledby="final-cta-title" className="bg-navy px-4 py-16 text-ivory sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 id="final-cta-title" className="text-2xl font-bold leading-snug sm:text-4xl">
          <span className="inline-block">誰にも言えなかったことを、</span>
          <span className="inline-block">まずは話してみませんか。</span>
        </h2>
        <p className="mt-5 text-base text-ivory-soft sm:text-lg">日時を選ぶだけ。Google Meetの参加URLがメールで届きます。</p>
      </div>

      <div id="booking" className="mx-auto mt-10 max-w-4xl scroll-mt-20 rounded-3xl bg-canvas px-4 py-8 text-ink sm:px-10 sm:py-10">
        <TimerexWidget />
        <ul className="mx-auto mt-6 max-w-2xl space-y-1 text-sm text-ink-soft">
          {notes.map((n) => (
            <li key={n}>・{n}</li>
          ))}
        </ul>
        <p className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-ink-soft">
          予約はTimeRex、相談はGoogle Meetを利用します。個人情報の取り扱いは
          <a href="/privacy/" className="text-sage-700 underline underline-offset-4">
            プライバシーポリシー
          </a>
          をご確認ください。
        </p>
      </div>
    </section>
  )
}
