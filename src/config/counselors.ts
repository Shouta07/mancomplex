/**
 * 相談担当者の公開プロフィール。
 *
 * - 公開プロフィールには本名・勤務先・所属組織を書かない（ニックネーム／担当者名で表示）。
 * - 経験・バックグラウンド・資格は、事実確認できた内容だけを書く。推測や脚色はしない。
 * - 空文字・空配列の項目は、画面上に「【公開前に入力】」と表示され、ビルド時にも警告が出る。
 * - 経歴が確定するまでセクションごと隠したい場合は COUNSELOR_SECTION_VISIBLE を false にする
 *   （ヘッダー・FAQ からのリンクも自動で消える）。
 */

export type Counselor = {
  /** 公開名（ニックネーム／担当者名）。本名は書かない */
  nickname: string
  /** 相談に向き合う姿勢 */
  stance: string
  /** 実際のバックグラウンド（事実のみ。勤務先・所属名は書かない） */
  background: string
  /** 経験・問題意識 */
  experience: string
  /** 得意な相談テーマ */
  themes: string[]
  /** 対応範囲と限界（この担当者が相談でできること／できないこと） */
  scope: string
  /** 資格・研修歴（任意。確認できたもののみ） */
  credentials?: string
}

export const COUNSELOR_SECTION_VISIBLE = true

export const COUNSELORS: Counselor[] = [
  {
    nickname: '',
    stance: '',
    background: '',
    experience: '',
    themes: [],
    scope: '',
    credentials: '',
  },
]

/** 必須項目がすべて入力されているか */
export function isCounselorComplete(c: Counselor) {
  return Boolean(c.nickname && c.stance && c.background && c.experience && c.themes.length && c.scope)
}
