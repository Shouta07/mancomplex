import { CtaButton } from '../components/CtaButton'

const points = ['自身も悩んだ経験のある聞き手', '匿名でオンライン相談', 'LINE登録・アプリ不要']

export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-title" className="relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.25fr_1fr] md:gap-12">
        <div>
          <p className="text-sm font-bold tracking-[0.12em] text-sage-700">男性のための相談サービス</p>
          <h1 id="hero-title" className="text-balance-ja mt-4 text-[2rem] font-bold leading-[1.45] sm:text-5xl sm:leading-[1.4]">
            解決したいのに、
            <br />
            誰にも相談できない。
          </h1>
          <p className="mt-7 text-base text-ink-soft sm:text-lg">
            身体のこと。性のこと。自分への自信。
            <br />
            <span className="inline-block">その悩み、まずは30分だけ</span>
            <span className="inline-block">話してみませんか。</span>
          </p>

          <div className="mt-9">
            <CtaButton className="w-full sm:w-auto" />
            <ul className="mt-5 flex flex-wrap gap-2 text-sm sm:gap-3" aria-label="ご利用の条件">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-[13px] text-ink sm:text-sm">
                  <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3.5 w-3.5 shrink-0 text-sage-700" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M3 8.5l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}

/** 2つの形が穏やかに向き合う抽象ビジュアル（装飾）。ロゴのネイビーとセージを使う */
function HeroVisual() {
  return (
    <div aria-hidden="true" className="hidden w-full md:block">
      <svg viewBox="0 0 400 340" className="h-auto w-full">
        <rect x="10" y="20" width="380" height="300" rx="150" className="fill-mist" />
        <rect x="104" y="92" width="72" height="176" rx="36" className="fill-navy" />
        <rect x="224" y="92" width="72" height="176" rx="36" className="fill-sage-500" />
        <path d="M150 210c0-34 22-52 50-52s50-18 50-52" fill="none" className="stroke-ivory" strokeWidth="8" strokeLinecap="round" />
        <circle cx="200" cy="296" r="4" className="fill-sage-500" />
        <circle cx="200" cy="44" r="4" className="fill-navy" />
      </svg>
    </div>
  )
}
