import { CtaButton } from '../components/CtaButton'

const points = ['初回30分 無料', 'Google Meetで相談', 'LINE登録・アプリ不要', '予約はメールで完結']

export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-title" className="relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.25fr_1fr] md:gap-12">
        <div>
          <p className="text-sm font-bold tracking-[0.12em] text-sage-700">人には言えない悩みの相談サービス</p>
          <h1 id="hero-title" className="text-balance-ja mt-4 text-[2rem] font-bold leading-[1.45] sm:text-5xl sm:leading-[1.4]">
            解決したいのに、
            <br />
            誰にも相談できない。
          </h1>
          <div className="mt-7 space-y-4 text-base text-ink-soft sm:text-lg">
            <p>
              身体のこと。性のこと。自分への自信。
              <br />
              調べても答えが見つからない。人には話しにくい。
              <br />
              そんな悩みを、ひとりで抱え続けなくていい。
            </p>
            <p className="text-ink">
              His Recoveriesは、あなたの話を聞き、一緒に悩みを整理して、次の一歩を考えるための相談サービスです。
            </p>
          </div>

          <div className="mt-9">
            <CtaButton className="w-full sm:w-auto" />
            <ul className="mt-5 grid grid-cols-2 gap-2 text-sm sm:flex sm:flex-wrap sm:gap-3" aria-label="ご利用の条件">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-1.5 rounded-full bg-sage-50 px-3 py-1.5 text-[13px] text-ink sm:text-sm">
                  <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3.5 w-3.5 shrink-0 text-sage-700" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M3 8.5l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-ink-soft">
              Google Meetで相談できます。予約はTimeRexから、ご連絡はメールで行います。
            </p>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}

/** 2つの図形が穏やかに向き合う抽象ビジュアル（装飾） */
function HeroVisual() {
  return (
    <div aria-hidden="true" className="mx-auto w-full max-w-[220px] sm:max-w-sm md:max-w-none">
      <svg viewBox="0 0 400 340" className="h-auto w-full">
        <rect x="10" y="20" width="380" height="300" rx="150" className="fill-sage-50" />
        <circle cx="150" cy="180" r="74" className="fill-sage-100" />
        <circle cx="150" cy="180" r="74" fill="none" className="stroke-sage-500" strokeWidth="2" />
        <circle cx="262" cy="170" r="58" fill="none" className="stroke-sage-700" strokeWidth="2" />
        <path d="M108 104c18-22 52-32 80-22" fill="none" className="stroke-sage-300" strokeWidth="2" strokeLinecap="round" />
        <g className="fill-sage-700">
          <circle cx="192" cy="96" r="4" />
          <circle cx="208" cy="88" r="4" opacity=".7" />
          <circle cx="224" cy="84" r="4" opacity=".45" />
        </g>
        <path d="M224 262c22 10 50 8 70-8" fill="none" className="stroke-sage-300" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  )
}
