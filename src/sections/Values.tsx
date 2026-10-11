import { CtaButton } from '../components/CtaButton'
import { Section } from '../components/Section'

const values = [
  { title: 'まず、話す', body: 'うまく説明できなくても大丈夫。今困っていることや、これまで試したことを聞きます。' },
  { title: '一緒に、整理する', body: '悩みの背景や、これまで解決しなかった理由、考えられる選択肢を整理します。' },
  { title: '次の一歩を考える', body: '今の状況に合わせて、試せることや、必要に応じて専門家に相談する選択肢を考えます。' },
  {
    title: 'まとめを受け取る',
    body: 'ご希望と同意がある場合、対話の内容をAIで整理し、悩み・気づき・次にできることをメールでお送りします。',
  },
]

export function Values() {
  return (
    <Section
      id="value"
      eyebrow="His Recoveriesができること"
      tone="sage"
      title="話して終わりにしない。次の一歩まで。"
      lead={
        <p>
          His Recoveriesは、医療機関やカウンセリングではなく、人に話しにくい悩みを経験者との対話で整理し、現実的な次の一歩を一緒に考える場所です。
        </p>
      }
    >
      <ol className="grid gap-x-10 gap-y-10 md:grid-cols-2">
        {values.map((v, i) => (
          <li key={v.title} className="flex gap-5">
            <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-sage-700 font-bold text-sage-700">
              {i + 1}
            </span>
            <div>
              <h3 className="text-xl font-bold">{v.title}</h3>
              <p className="mt-2 text-[15px] text-ink-soft sm:text-base">{v.body}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-14 text-center">
        <CtaButton className="w-full sm:w-auto" />
      </div>
    </Section>
  )
}
