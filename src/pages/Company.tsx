import { DocLayout, DocSection } from '../components/DocLayout'
import { Placeholder } from '../components/Placeholder'
import { CONTACT_EMAIL, TIMEREX_URL, isBookingConfigured } from '../config/site'

/** お問い合わせページ。運営者の名称はサイト上に表示せず、請求に応じて個別に開示する */
export function Company() {
  return (
    <DocLayout title="お問い合わせ">
      <section id="contact" className="scroll-mt-24 space-y-3">
        <p>サービスに関するご質問、予約の変更・キャンセル、個人情報の取り扱いに関するご請求は、下記のメールアドレスまでご連絡ください。メールの件名に相談の内容を書く必要はありません。</p>
        <p className="rounded-xl border border-line bg-surface px-5 py-4 text-ink">
          メール：
          {CONTACT_EMAIL ? (
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-bold text-sage-700 underline underline-offset-4">
              {CONTACT_EMAIL}
            </a>
          ) : (
            <Placeholder label="問い合わせ用メールアドレス" />
          )}
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
      </section>

      <DocSection title="運営者について">
        <p>運営者の名称・所在地・代表者の氏名は、お問い合わせいただいた方に遅滞なくお知らせします。</p>
        <p>相談担当者は、公開プロフィール上ではニックネームで活動しています。相談の実施や個人情報の取り扱いについては、運営者が責任を負います。</p>
      </DocSection>
    </DocLayout>
  )
}
