import { Section } from '../components/Section'

const sample = [
  { h: '今困っていること', b: '人に話しにくい悩みがあり、どう向き合えばよいか分からない状態が続いている。' },
  { h: '対話で整理できたこと', b: 'これまで調べたこと・試したことと、まだ分からないことを分けて言葉にできた。' },
  { h: '気づいたこと', b: '気になっている点の中で、優先して考えたいことが見えてきた。' },
  { h: '次に考えられる選択肢', b: '無理なく試せること／情報の見極め方／医療機関などの専門家に相談するかどうかの判断材料。' },
]

const terms = [
  { t: '録音', d: '会話の音声を記録すること。' },
  { t: '文字起こし', d: '会話の内容をテキストに変換すること。' },
  { t: 'AI要約', d: '文字起こし等をもとに、AIが悩み・気づき・次にできることを整理すること。' },
]

export function Summary() {
  return (
    <Section
      id="summary"
      eyebrow="相談後のまとめ"
      tone="mist"
      title="話したことを、次の一歩につなげる。"
      lead={
        <div className="space-y-4">
          <p>
            相談の中心は、人との対話です。ご希望と同意がある場合に限り、対話の内容を整理したまとめをメールでお送りします。話したことを振り返り、次の行動を考えるためにご活用ください。
          </p>
          <p className="font-bold text-ink">まとめや記録を希望しない場合も、ご相談いただけます。</p>
        </div>
      }
    >
      <div className="grid gap-8 md:grid-cols-[1.15fr_1fr]">
        <figure className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-navy px-3 py-1 text-xs font-bold text-ivory">サンプル</span>
            <p className="text-sm text-ink-soft">His Recoveries｜対話のまとめ（イメージ）</p>
          </div>
          <dl className="mt-6 space-y-5">
            {sample.map((s) => (
              <div key={s.h}>
                <dt className="flex items-center gap-2 text-[15px] font-bold">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-sage-500" />
                  {s.h}
                </dt>
                <dd className="mt-1 pl-3.5 text-[15px] text-ink-soft">{s.b}</dd>
              </div>
            ))}
          </dl>
          <figcaption className="mt-6 border-t border-line pt-4 text-xs text-ink-soft">
            ※ 説明用に作成した架空のサンプルです。実際の相談者の事例ではありません。
          </figcaption>
        </figure>

        <div>
          <h3 className="text-lg font-bold">まとめの作成に、記録やAIを使う場合</h3>
          <ul className="mt-4 space-y-3 text-[15px] text-ink-soft">
            <li>
              ・利用する場合は、<strong className="text-ink">何を記録するか、どのサービスを使うか、何のために使うか</strong>
              、保存期間と削除方法を事前にご説明し、明確な同意をいただいてから開始します。
            </li>
            <li>・予約時に同意いただいた場合も、相談開始前に改めて確認します。途中でやめたい場合もお申し出ください。</li>
            <li>・AIが作成したまとめは、担当者が内容を確認・修正してからお送りします。</li>
            <li>・AIに医療的な診断をさせることはありません。</li>
          </ul>
          <dl className="mt-6 divide-y divide-line rounded-xl bg-surface text-sm">
            {terms.map((x) => (
              <div key={x.t} className="flex gap-4 px-4 py-3">
                <dt className="w-20 shrink-0 font-bold">{x.t}</dt>
                <dd className="text-ink-soft">{x.d}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-xs text-ink-soft">
            これらは別々の処理です。実際に行う処理と利用するサービスは、事前のご説明でお伝えします。
          </p>
        </div>
      </div>
    </Section>
  )
}
