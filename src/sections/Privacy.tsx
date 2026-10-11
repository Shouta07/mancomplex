import { Section } from '../components/Section'

const items = [
  {
    title: 'LINE登録・アプリ不要',
    body: 'メールとブラウザから利用できます。専用アプリをインストールする必要はありません。',
  },
  {
    title: '相談内容の取り扱い',
    body: (
      <>
        相談内容は、サービスの提供に必要な範囲で適切に取り扱います。本人の同意なく相談内容を公開しません。詳しくは
        <a href="/privacy/" className="text-sage-700 underline underline-offset-4">
          プライバシーポリシー
        </a>
        をご確認ください。
      </>
    ),
  },
  {
    title: 'AIによる記録は事前説明と同意が必要',
    body: 'AIによる記録・要約を利用する場合は、事前に説明し、同意をいただきます。同意しない場合も相談できます。',
  },
  {
    title: '完全な匿名性は保証できません',
    body: '予約時にはメールアドレス等が必要です。オンライン会議サービスやメールサービスに、技術上の利用記録が残る場合があります。',
  },
  {
    title: '医療行為ではありません',
    body: 'His Recoveriesは医療機関ではなく、診断・治療を提供するサービスではありません。医療的な判断が必要な場合は、医療機関への相談をご案内することがあります。',
  },
]

export function Privacy() {
  return (
    <Section id="privacy" eyebrow="プライバシーと安心" title="安心して話せるために。">
      <ul className="grid gap-x-10 gap-y-8 md:grid-cols-2">
        {items.map((it) => (
          <li key={it.title} className="border-t border-line pt-6">
            <h3 className="text-lg font-bold">{it.title}</h3>
            <p className="mt-2 text-[15px] text-ink-soft sm:text-base">{it.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
