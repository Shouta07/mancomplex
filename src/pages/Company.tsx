import { DocLayout, DocSection } from '../components/DocLayout'
import { Placeholder } from '../components/Placeholder'
import { CONTACT_EMAIL, OPERATOR, TIMEREX_URL, isBookingConfigured } from '../config/site'

export function Company() {
  const rows = [
    { k: 'サービス名', v: 'His Recoveries' },
    { k: '運営', v: `${OPERATOR.companyName}（${OPERATOR.companyNameEn}）` },
    { k: '代表者', v: OPERATOR.representative || <Placeholder label="代表者氏名" /> },
    { k: '所在地', v: OPERATOR.address || <Placeholder label="所在地" /> },
    {
      k: 'お問い合わせ',
      v: CONTACT_EMAIL ? (
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-sage-700 underline underline-offset-4">
          {CONTACT_EMAIL}
        </a>
      ) : (
        <Placeholder label="問い合わせ用メールアドレス" />
      ),
    },
  ]

  return (
    <DocLayout title="運営者情報・お問い合わせ">
      <DocSection title="運営者情報">
        <dl className="divide-y divide-line rounded-xl border border-line bg-surface">
          {rows.map((r) => (
            <div key={r.k} className="grid gap-1 px-5 py-4 sm:grid-cols-[9rem_1fr] sm:gap-4">
              <dt className="font-bold text-ink">{r.k}</dt>
              <dd>{r.v}</dd>
            </div>
          ))}
        </dl>
      </DocSection>

      <section id="contact" className="scroll-mt-24">
        <h2 className="mb-3 text-lg font-bold text-ink sm:text-xl">お問い合わせ</h2>
        <div className="space-y-3">
          <p>
            サービスに関するご質問、予約の変更・キャンセル、個人情報の取り扱いに関するご請求は、上記のメールアドレスまでご連絡ください。メールの件名には、ご相談の内容を書く必要はありません。
          </p>
          {isBookingConfigured && (
            <p>
              無料相談のご予約は{' '}
              <a href={TIMEREX_URL} className="font-bold text-sage-700 underline underline-offset-4">
                TimeRexの予約ページ
              </a>{' '}
              から行えます。
            </p>
          )}
        </div>
      </section>
    </DocLayout>
  )
}
