import { TimerexWidget } from '../components/TimerexWidget'
import { TIMEREX_URL, isBookingConfigured } from '../config/site'

export function FinalCta() {
  return (
    <section id="final-cta" aria-labelledby="final-cta-title" className="bg-navy px-4 py-20 text-ivory sm:px-6 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 id="final-cta-title" className="text-balance-ja text-[1.75rem] font-bold sm:text-4xl">
          誰にも言えなかったことを、
          <br />
          まずは話してみませんか。
        </h2>
        <p className="mt-6 text-base text-ivory-soft sm:text-lg">
          解決方法がまだ分からなくても大丈夫。
          <br />
          初回30分、話すことから始められます。
        </p>
        {isBookingConfigured && (
          <a
            href={TIMEREX_URL}
            className="mt-9 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-ivory px-8 text-lg font-bold text-navy shadow-sm transition-colors hover:bg-white sm:w-auto"
          >
            無料で30分相談する
          </a>
        )}
        <p className="mt-4 text-sm text-ivory-soft">初回30分無料・オンラインで相談・LINE登録・アプリ不要</p>
      </div>

      <div id="booking" className="mx-auto mt-16 max-w-4xl scroll-mt-20 rounded-3xl bg-canvas px-4 py-10 text-ink sm:px-10">
        <h3 className="text-center text-xl font-bold">予約カレンダー</h3>
        <ul className="mx-auto mt-5 max-w-2xl space-y-1.5 text-[15px] text-ink-soft">
          <li>・ご都合のよい日時を選び、メールアドレスを入力して予約します（予約はTimeRexで受け付けます）。</li>
          <li>・相談テーマと今の状況を選択式でお聞きします。詳しい悩みを書く必要はありません。</li>
          <li>・ご予約後、Google Meetの参加URLがメールで届きます。</li>
        </ul>
        <div className="mt-8">
          <TimerexWidget />
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-xs leading-relaxed text-ink-soft">
          予約情報は予約サービス「TimeRex」、相談は「Google Meet」を通じて取り扱われ、各サービスの規約・プライバシーポリシーが適用されます。His Recoveriesでの取り扱いは
          <a href="/privacy/" className="text-sage-700 underline underline-offset-4">
            プライバシーポリシー
          </a>
          をご確認ください。
        </p>
      </div>
    </section>
  )
}
