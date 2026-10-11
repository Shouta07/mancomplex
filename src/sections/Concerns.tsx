const worries = [
  '身体や見た目のことで、ずっと自信が持てない',
  '性のことを誰にも聞けず、ひとりで調べ続けている',
  '病院に行くべきなのかも、判断がつかない',
  '友人や家族には、とても話せない',
]

export function Concerns() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-mist px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 id="about-title" className="text-balance-ja text-2xl font-bold sm:text-[2rem]">
          こんなこと、ひとりで抱えていませんか？
        </h2>
        <ul className="mt-8 space-y-3">
          {worries.map((w) => (
            <li key={w} className="flex items-start gap-3 rounded-xl bg-surface px-5 py-4 text-base text-ink sm:text-lg">
              <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-1 h-5 w-5 shrink-0 text-sage-700" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2.5" y="2.5" width="15" height="15" rx="4" />
                <path d="M6 10.5l2.5 2.5L14 7.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {w}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
