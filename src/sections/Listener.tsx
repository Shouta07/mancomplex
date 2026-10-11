import { CtaButton } from '../components/CtaButton'

/** 相談の聞き手のバックグラウンド（本人による文章。文言を変更しないこと） */
export function Listener() {
  return (
    <section id="listener" aria-labelledby="listener-title" className="bg-canvas px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-2xl">
        <h2 id="listener-title" className="text-balance-ja text-2xl font-bold sm:text-[2rem]">
          あなたの相談をお聞きする人について
        </h2>
        <div className="mt-8 space-y-6 text-base leading-[2] text-ink-soft [word-break:auto-phrase] sm:text-lg">
          <p className="text-ink">私自身、身体やコンプレックスについて悩みながらも、誰にも相談できずに抱え込んできた経験があります。</p>
          <p className="border-l-2 border-sage-500 pl-5 text-ink">
            誰かに話すのは恥ずかしい。
            <br />
            変に思われたくない。
            <br />
            こんなこと、誰に相談すればいいんだろう。
          </p>
          <p>そんなふうに、ひとりで考え続けてしまう気持ちがわかります。</p>
          <p>だからこそ、ここでは無理に取り繕う必要も、うまく話そうとする必要もありません。</p>
          <p>あなたの悩みを否定したり、簡単に答えを押しつけたりせず、同じ目線で一緒に考えます。</p>
          <p className="font-bold text-ink">ずっとひとりで抱えてきたことを、まずは話してみませんか。</p>
          <p>
            うまく言葉にならなくても大丈夫。
            <br />
            話すことから、少しずつ始めてみてください。
          </p>
        </div>
        <div className="mt-10 text-center">
          <CtaButton className="w-full sm:w-auto" />
        </div>
      </div>
    </section>
  )
}
