import { DocLayout, DocSection } from '../components/DocLayout'
import { Placeholder } from '../components/Placeholder'
import { CONTACT_EMAIL } from '../config/site'

/** プライバシーポリシー。法令上必要な事項（利用目的・開示等の請求窓口など）に絞る */
export function PrivacyPolicy() {
  return (
    <DocLayout title="プライバシーポリシー">
      <p>His Recoveries（以下「本サービス」）の運営者は、個人情報を個人情報の保護に関する法律その他の法令に従い、以下のとおり取り扱います。</p>

      <DocSection title="取得する情報と利用目的">
        <ul>
          <li>予約時のお名前・メールアドレス・予約日時・予約時の回答：予約の受付と連絡のため</li>
          <li>相談で話した内容：相談の実施と、ご希望の場合のまとめの作成のため</li>
        </ul>
        <p>健康に関する情報など要配慮個人情報は、ご本人の同意なく取得しません。</p>
      </DocSection>

      <DocSection title="記録・AIの利用">
        <p>録音・文字起こし・AIによる要約は、事前に内容・利用するサービス・保存期間を説明し、同意をいただいた場合のみ行います。同意しなくても相談できます。</p>
      </DocSection>

      <DocSection title="外部サービスと第三者提供">
        <p>
          予約にTimeRex、相談にGoogle Meetを利用します。法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供せず、相談内容を公開しません。
        </p>
      </DocSection>

      <DocSection title="管理と削除">
        <p>個人情報は必要な担当者だけが扱い、漏えい等を防ぐ措置を講じます。削除をご希望の場合はご連絡ください。</p>
      </DocSection>

      <DocSection title="お問い合わせ・開示等の請求">
        <p>
          個人情報の開示・訂正・削除・利用停止などのご請求やお問い合わせは、下記までご連絡ください。運営者の名称・住所・代表者の氏名も、ご請求に応じて遅滞なくお知らせします。
        </p>
        <p>
          メール：
          {CONTACT_EMAIL ? (
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-sage-700 underline underline-offset-4">
              {CONTACT_EMAIL}
            </a>
          ) : (
            <Placeholder label="問い合わせ用メールアドレス" />
          )}
        </p>
      </DocSection>
    </DocLayout>
  )
}
