import { DocLayout, DocSection } from '../components/DocLayout'

/** プライバシーポリシー。必要最小限の事項に絞る */
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

      <DocSection title="管理">
        <p>個人情報は必要な担当者だけが扱い、漏えい等を防ぐ措置を講じます。</p>
      </DocSection>
    </DocLayout>
  )
}
