import type { ReactNode } from 'react'

type Props = {
  id?: string
  eyebrow?: string
  title: ReactNode
  lead?: ReactNode
  tone?: 'base' | 'mist' | 'sage'
  children: ReactNode
}

const tones = {
  base: 'bg-canvas',
  mist: 'bg-mist',
  sage: 'bg-sage-50',
}

export function Section({ id, eyebrow, title, lead, tone = 'base', children }: Props) {
  const headingId = id ? `${id}-title` : undefined
  return (
    <section id={id} aria-labelledby={headingId} className={`${tones[tone]} px-4 py-20 sm:px-6 sm:py-28`}>
      <div className="mx-auto max-w-5xl">
        {eyebrow && <p className="mb-3 text-sm font-bold tracking-[0.15em] text-sage-700">{eyebrow}</p>}
        <h2 id={headingId} className="text-balance-ja text-2xl font-bold sm:text-[2rem]">
          {title}
        </h2>
        {lead && <div className="mt-6 max-w-3xl text-base text-ink-soft sm:text-lg">{lead}</div>}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  )
}
