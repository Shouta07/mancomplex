import type { ReactNode } from 'react'
import { Section } from '../components/Section'
import { Placeholder } from '../components/Placeholder'
import { COUNSELORS, COUNSELOR_SECTION_VISIBLE, type Counselor } from '../config/counselors'

const shown = ['相談に向き合う姿勢', '実際の経験・バックグラウンド', '得意な相談テーマ', '対応範囲と限界', '確認できた資格・研修歴（ある場合）']
const hidden = ['本名', '勤務先・所属組織']

/** どの担当者も行わないこと（サービス全体の方針） */
const notOffered = [
  '診断・治療・処方などの医療行為',
  '緊急の対応（必要な場合は医療機関や公的な窓口をご案内します）',
  '本人の同意のない相談内容の公開',
  '望まない商品や有料サービスの勧誘',
]

/**
 * 相談相手について。
 * 公開プロフィールは実名・勤務先の代わりに、姿勢・バックグラウンド・対応範囲で信頼を作る。
 * 未入力の項目はプレースホルダーとして表示し、架空の経歴は出さない。
 */
export function Counselors() {
  if (!COUNSELOR_SECTION_VISIBLE) return null
  return (
    <Section
      id="counselors"
      eyebrow="相談相手について"
      tone="navy"
      title="匿名でも、どんな人が話を聞くのかは分かる。"
      lead={
        <p>
          人に話しにくい悩みだからこそ、相談相手の考え方や経験を知ったうえで利用してほしい。His Recoveriesでは、公開プロフィールに実名や勤務先を掲載する代わりに、相談に向き合う姿勢、バックグラウンド、対応できるテーマを明示します。
        </p>
      }
    >
      <div className="space-y-6">
        {COUNSELORS.map((c, i) => (
          <CounselorCard key={c.nickname || i} c={c} />
        ))}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-ivory/15 p-6 sm:p-7">
          <h3 className="text-lg font-bold">公開プロフィールに載せること・載せないこと</h3>
          <dl className="mt-4 space-y-4 text-[15px] text-ivory-soft">
            <div>
              <dt className="font-bold text-ivory">載せること</dt>
              <dd className="mt-1">{shown.join('／')}</dd>
            </div>
            <div>
              <dt className="font-bold text-ivory">載せないこと</dt>
              <dd className="mt-1">{hidden.join('／')}</dd>
            </div>
          </dl>
          <p className="mt-4 text-sm leading-relaxed text-ivory-soft">
            実名を出さないのは、相談する人と相談に乗る人、双方のプライバシーを守るためです。経歴や資格は、事実として確認できたものだけを掲載します。サービスの運営主体と連絡先は
            <a href="/company/" className="text-ivory underline underline-offset-4">
              事業者情報
            </a>
            に掲載しています。
          </p>
        </div>
        <div className="rounded-2xl border border-ivory/15 p-6 sm:p-7">
          <h3 className="text-lg font-bold">どの担当者も行わないこと</h3>
          <ul className="mt-4 space-y-2 text-[15px] text-ivory-soft">
            {notOffered.map((n) => (
              <li key={n} className="flex gap-2.5">
                <span aria-hidden="true" className="mt-[0.8em] h-1.5 w-1.5 shrink-0 rounded-full bg-sage-300" />
                {n}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

function CounselorCard({ c }: { c: Counselor }) {
  return (
    <article className="rounded-2xl bg-ivory p-6 text-ink sm:p-9" aria-label={c.nickname ? `相談担当者：${c.nickname}` : '相談担当者'}>
      <p className="text-xs font-bold tracking-[0.15em] text-sage-700">相談担当</p>
      <h3 className="mt-1 text-2xl font-bold">{c.nickname || <Placeholder label="担当者のニックネーム" />}</h3>
      <p className="mt-4 text-base text-ink sm:text-lg">{c.stance || <Placeholder label="相談に向き合う姿勢" />}</p>

      <dl className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-2">
        <Field label="バックグラウンド">{c.background || <Placeholder label="実際のバックグラウンド" />}</Field>
        <Field label="経験・問題意識">{c.experience || <Placeholder label="経験・問題意識" />}</Field>
        <Field label="得意な相談テーマ">
          {c.themes.length ? (
            <ul className="flex flex-wrap gap-2">
              {c.themes.map((t) => (
                <li key={t} className="rounded-full bg-mist px-3 py-1 text-sm text-ink">
                  {t}
                </li>
              ))}
            </ul>
          ) : (
            <Placeholder label="得意な相談テーマ" />
          )}
        </Field>
        <Field label="対応範囲と限界">{c.scope || <Placeholder label="対応範囲と限界" />}</Field>
        {c.credentials && <Field label="資格・研修歴">{c.credentials}</Field>}
      </dl>
    </article>
  )
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="border-t border-line pt-4">
      <dt className="text-sm font-bold text-slate">{label}</dt>
      <dd className="mt-2 text-[15px] leading-relaxed text-ink-soft sm:text-base">{children}</dd>
    </div>
  )
}
