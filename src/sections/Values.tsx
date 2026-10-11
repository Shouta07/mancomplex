import { CtaButton } from '../components/CtaButton'
import { Section } from '../components/Section'

const steps = [
  { title: '話す', points: ['うまく言葉にできなくてもよい', '話せる範囲から始める'] },
  { title: '整理する', points: ['何に困っているのか', '何を試してきたのか', '何が分からないのか'] },
  { title: '次の一歩を考える', points: ['自分で試せること', '情報の調べ方', '必要に応じて専門家に相談する選択肢'] },
]

export function Values() {
  return (
    <Section
      id="value"
      eyebrow="His Recoveriesができること"
      tone="sage"
      title="答えを押しつけず、一緒に整理する。"
      lead={
        <p>
          His Recoveriesは、医療機関ではありません。悩みを決めつけたり、特定の方法を押しつけたりせず、あなたの状況を一緒に整理して、現実的な次の一歩を考えます。
        </p>
      }
    >
      <ol className="grid gap-5 md:grid-cols-3">
        {steps.map((s, i) => (
          <li key={s.title} className="rounded-2xl bg-surface p-7">
            <p className="text-sm font-bold tracking-[0.12em] text-sage-700">0{i + 1}</p>
            <h3 className="mt-2 text-xl font-bold">{s.title}</h3>
            <ul className="mt-4 space-y-2 text-[15px] text-ink-soft sm:text-base">
              {s.points.map((p) => (
                <li key={p} className="flex gap-2.5">
                  <span aria-hidden="true" className="mt-[0.8em] h-1.5 w-1.5 shrink-0 rounded-full bg-navy" />
                  {p}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
      <p className="mt-6 text-sm text-ink-soft">※ 相談によって悩みの解決や改善を保証するものではありません。</p>
      <div className="mt-12 text-center">
        <CtaButton className="w-full sm:w-auto" />
      </div>
    </Section>
  )
}
