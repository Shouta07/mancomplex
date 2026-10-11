import { Section } from '../components/Section'

const concerns = [
  {
    title: '身体の悩み',
    points: ['見た目や身体について自信が持てない', '気になっていることを人に聞けない'],
    icon: <path d="M24 10a7 7 0 110 14 7 7 0 010-14zM12 40c1.5-7 6.5-11 12-11s10.5 4 12 11" />,
  },
  {
    title: '性に関する悩み',
    points: ['人に話しにくく、ひとりで調べ続けている', '情報が多く、何を信じればよいか分からない'],
    icon: <path d="M10 14h20a4 4 0 014 4v10a4 4 0 01-4 4H19l-7 6v-6h-2a4 4 0 01-4-4V18a4 4 0 014-4zM34 20h4a4 4 0 014 4v8a4 4 0 01-4 4h-1v5l-5-5" />,
  },
  {
    title: '自信・コンプレックス',
    points: ['他人と比べて落ち込んでしまう', '気になることを身近な人に打ち明けられない'],
    icon: <path d="M8 36c6-2 10-8 16-8s10 6 16 8M24 8v12M17 13l7 7 7-7" />,
  },
]

export function Concerns() {
  return (
    <Section id="about" eyebrow="相談できること" title="こんなこと、誰にも相談できずにいませんか？">
      <ul className="grid gap-5 md:grid-cols-3">
        {concerns.map((c) => (
          <li key={c.title} className="rounded-2xl border border-line bg-surface p-7">
            <svg aria-hidden="true" viewBox="0 0 48 48" className="h-11 w-11 text-navy" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {c.icon}
            </svg>
            <h3 className="mt-4 text-xl font-bold">{c.title}</h3>
            <ul className="mt-4 space-y-2 text-[15px] text-ink-soft sm:text-base">
              {c.points.map((p) => (
                <li key={p} className="flex gap-2.5">
                  <span aria-hidden="true" className="mt-[0.8em] h-1.5 w-1.5 shrink-0 rounded-full bg-sage-500" />
                  {p}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <p className="mt-10 rounded-2xl bg-mist px-6 py-5 text-base text-ink sm:text-lg">
        ここに書かれていない悩みでも、まずはご相談ください。うまく言葉にできなくても大丈夫です。
      </p>
    </Section>
  )
}
