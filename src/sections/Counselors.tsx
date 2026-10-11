import { Section } from '../components/Section'
import { Placeholder } from '../components/Placeholder'
import { COUNSELORS, COUNSELOR_SECTION_VISIBLE, type Counselor } from '../config/counselors'

/**
 * 相談相手。実名・勤務先の代わりに、姿勢とバックグラウンドを見せる。
 * 未入力の項目はプレースホルダーとして表示し、架空の経歴は出さない。
 */
export function Counselors() {
  if (!COUNSELOR_SECTION_VISIBLE) return null
  return (
    <Section
      id="counselors"
      tone="navy"
      title="話を聞くのは、こんな人です。"
      lead={<p>実名や勤務先は公開しません。そのかわり、どんな経験をもとに話を聞くのかをお伝えします。</p>}
    >
      <div className="space-y-6">
        {COUNSELORS.map((c, i) => (
          <CounselorCard key={c.nickname || i} c={c} />
        ))}
      </div>
    </Section>
  )
}

function CounselorCard({ c }: { c: Counselor }) {
  return (
    <article className="rounded-2xl bg-ivory p-6 text-ink sm:p-9" aria-label={c.nickname ? `相談担当者：${c.nickname}` : '相談担当者'}>
      <h3 className="text-2xl font-bold">{c.nickname || <Placeholder label="担当者のニックネーム" />}</h3>
      <p className="mt-3 text-base sm:text-lg">{c.stance || <Placeholder label="相談に向き合う姿勢（ひとこと）" />}</p>
      <dl className="mt-6 space-y-4 border-t border-line pt-5 text-[15px] text-ink-soft sm:text-base">
        <div>
          <dt className="text-sm font-bold text-slate">バックグラウンド</dt>
          <dd className="mt-1">{c.background || <Placeholder label="実際の経験・バックグラウンド" />}</dd>
        </div>
        <div>
          <dt className="text-sm font-bold text-slate">よく聞くテーマ</dt>
          <dd className="mt-1">{c.themes.length ? c.themes.join('／') : <Placeholder label="得意な相談テーマ" />}</dd>
        </div>
        {c.credentials && (
          <div>
            <dt className="text-sm font-bold text-slate">資格・研修歴</dt>
            <dd className="mt-1">{c.credentials}</dd>
          </div>
        )}
      </dl>
    </article>
  )
}
