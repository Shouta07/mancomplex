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

/** 運営者情報。未確認の項目は空文字のままにする */
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
  title: 'His Recoveries｜人には言えない悩みを、一緒に考える',
  description:
    '身体のこと、性に関する悩み、自分への自信。誰にも話しにくい悩みを、まずは無料30分の対話から。LINE登録・アプリ不要で相談できます。',
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
  return missing
}
