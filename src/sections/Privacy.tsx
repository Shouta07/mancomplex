import type { ReactNode } from 'react'
import { Section } from '../components/Section'

const policyLink = (
  <a href="/privacy/" className="text-sage-700 underline underline-offset-4">
    プライバシーポリシー
  </a>
)

const items: { title: string; body: ReactNode }[] = [
  {
    title: '相談担当者の実名・勤務先は公開しません',
    body: '公開プロフィールでは、相談担当者の実名や勤務先を掲載しません。代わりに、経験やバックグラウンド、対応できるテーマを明示します。',
  },
  {
    title: '予約に必要な情報は最小限に',
    body: '予約時にお聞きするのは、日時、メールアドレスなどの連絡先、選択式の簡単な質問です。身体や性に関する詳しい内容を書く必要はありません。',
  },
  {
    title: '相談内容の利用目的を明確に',
    body: <>相談内容は、相談の実施と、ご希望の場合のまとめの作成に使います。本人の同意なく公開することはありません。詳しくは{policyLink}をご確認ください。</>,
  },
  {
    title: 'AIによる記録・要約は同意がある場合だけ',
    body: '録音・文字起こし・AI要約を利用する場合は、事前に処理の内容を説明し、明確な同意をいただきます。同意しない場合も相談できます。',
  },
  {
    title: '保存期間・閲覧できる担当者・削除方法',
    body: <>どの情報を、誰が、いつまで保存し、どう削除できるかは、{policyLink}と事前のご案内でお知らせします。</>,
  },
  {
    title: '利用する外部サービス',
    body: '予約はTimeRex、相談はGoogle Meet、連絡はメールを利用します。各サービスに技術上の利用記録が残る場合があるため、完全な匿名性は保証できません。',
  },
  {
    title: '通知やメールの件名にも配慮',
    body: '予約や連絡のメールの件名には、相談テーマなどの内容を入れない運用にします。',
  },
  {
    title: '医療行為ではありません',
    body: 'His Recoveriesは医療機関ではなく、診断・治療を提供するサービスではありません。医療的な判断が必要な場合は、医療機関への相談をご案内することがあります。',
  },
]

export function Privacy() {
  return (
    <Section id="privacy" eyebrow="匿名性とプライバシー" title="安心して話せるために、情報の扱いを明確に。">
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
