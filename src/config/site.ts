import { COUNSELORS, COUNSELOR_SECTION_VISIBLE, isCounselorComplete } from './counselors'

/**
 * サイト全体の設定を一元管理するファイル。
 *
 * - 予約URL・問い合わせ先・運営者情報はすべてここで管理します。
 * - 未確認の情報は空文字のままにしてください（実在しない値を入れないこと）。
 *   空文字の項目は、画面上に「公開前に入力」と表示され、ビルド時にも警告が出ます。
 */

/** TimeRex の予約ページURL（運営者から提供されたもの） */
export const TIMEREX_URL = 'https://timerex.net/s/hisrecoveries/4009b870'

/** TimeRex 埋め込みウィジェットのスクリプト（TimeRex 公式の埋め込みコードに記載のもの） */
export const TIMEREX_EMBED_SCRIPT = 'https://asset.timerex.net/js/embed.js'

/** TimeRex のURLとして妥当か（未設定・誤設定の検出用） */
export const isBookingConfigured = /^https:\/\/timerex\.net\/s\/[^\s]+$/.test(TIMEREX_URL)

/** 問い合わせ用メールアドレス（未提供のため空。公開前に入力） */
export const CONTACT_EMAIL = ''

/**
 * 事業者情報。未確認の項目は空文字のままにする。
 * ブランドの表側（LP）では会社名を前面に出さない方針。会社名は事業者情報ページ・
 * プライバシーポリシー・利用規約など、法令上・契約上必要な場所にだけ表示する。
 */
export const OPERATOR = {
  companyName: 'バイタリティデザイン合同会社',
  companyNameEn: 'Vitality Design',
  representative: '',
  address: '',
  email: CONTACT_EMAIL,
  established: '',
} as const

/**
 * プライバシーポリシー・利用規約が法務確認済みか。
 * false の間は、各ページ上部に「確認中の案」である旨を表示します。
 */
export const LEGAL_REVIEWED = false

/** 各法務文書の制定日（確定後に入力） */
export const LEGAL_EFFECTIVE_DATE = ''

export const SITE = {
  name: 'His Recoveries',
  title: 'His Recoveries｜男性の身体・性の悩みを相談できる場所',
  tagline: '誰にも言えない悩みを、ひとりで抱えない。',
  description:
    '身体の悩み、性に関する悩み、自信やコンプレックス。人には相談しにくい男性の悩みを、対話を通じて整理し、次の一歩を考える相談サービスです。初回30分無料、オンラインで相談できます。',
} as const

/** 予約セクションのアンカー。CTA はすべてここに遷移します */
export const BOOKING_ANCHOR = '#booking'

/** 未入力項目をまとめて返す（ビルド時警告・開発時バナー用） */
export function missingConfig(): string[] {
  const missing: string[] = []
  if (!isBookingConfigured) missing.push('TIMEREX_URL')
  if (!CONTACT_EMAIL) missing.push('CONTACT_EMAIL')
  if (!OPERATOR.representative) missing.push('OPERATOR.representative')
  if (!OPERATOR.address) missing.push('OPERATOR.address')
  if (!LEGAL_REVIEWED) missing.push('LEGAL_REVIEWED（法務確認）')
  if (COUNSELOR_SECTION_VISIBLE && !COUNSELORS.every(isCounselorComplete))
    missing.push('COUNSELORS（相談担当者の公開プロフィール：src/config/counselors.ts）')
  return missing
}
