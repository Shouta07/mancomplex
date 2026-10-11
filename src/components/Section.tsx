import type { ReactNode } from 'react'

type Tone = 'base' | 'mist' | 'sage' | 'navy'

type Props = {
  id?: string
  eyebrow?: string
  title: ReactNode
  lead?: ReactNode
  tone?: Tone
  children: ReactNode
}

const tones: Record<Tone, { bg: string; eyebrow: string; lead: string }> = {
  base: { bg: 'bg-canvas', eyebrow: 'text-sage-700', lead: 'text-ink-soft' },
  mist: { bg: 'bg-mist', eyebrow: 'text-sage-700', lead: 'text-ink-soft' },
  sage: { bg: 'bg-sage-50', eyebrow: 'text-sage-700', lead: 'text-ink-soft' },
  navy: { bg: 'bg-navy text-ivory', eyebrow: 'text-sage-300', lead: 'text-ivory-soft' },
}

export function Section({ id, eyebrow, title, lead, tone = 'base', children }: Props) {
  const headingId = id ? `${id}-title` : undefined
  const t = tones[tone]
  return (
    <section id={id} aria-labelledby={headingId} className={`${t.bg} px-4 py-20 sm:px-6 sm:py-28`}>
      <div className="mx-auto max-w-5xl">
        {eyebrow && <p className={`mb-3 text-sm font-bold tracking-[0.15em] ${t.eyebrow}`}>{eyebrow}</p>}
        <h2 id={headingId} className="text-balance-ja text-2xl font-bold sm:text-[2rem]">
          {title}
        </h2>
        {lead && <div className={`mt-6 max-w-3xl text-base sm:text-lg ${t.lead}`}>{lead}</div>}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  )
}
