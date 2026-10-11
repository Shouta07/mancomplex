import type { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { LEGAL_EFFECTIVE_DATE, LEGAL_REVIEWED } from '../config/site'
import { Placeholder } from './Placeholder'

type Props = { title: string; legal?: boolean; children: ReactNode }

/** プライバシーポリシー・利用規約・運営者情報などの文書ページ共通レイアウト */
export function DocLayout({ title, legal = false, children }: Props) {
  return (
    <>
      <Header />
      <main id="main" className="px-4 py-14 sm:px-6 sm:py-20">
        <article className="mx-auto max-w-3xl">
          <h1 className="text-2xl font-bold sm:text-3xl">{title}</h1>
          {legal && !LEGAL_REVIEWED && (
            <p role="note" className="mt-6 rounded-xl border border-amber-400 bg-amber-50 p-4 text-sm text-amber-950">
              この文書は公開前の確認中の案です。実際のデータ処理・委託先・保存期間を確定し、法務確認を経たうえで正式版として公開します。
            </p>
          )}
          <div className="doc mt-10 space-y-10 text-[15px] leading-[1.95] text-ink-soft sm:text-base">{children}</div>
          {legal && (
            <p className="mt-14 text-sm text-ink-soft">
              制定日：{LEGAL_EFFECTIVE_DATE || <Placeholder label="制定日" />}
            </p>
          )}
          <p className="mt-10">
            <a href="/" className="font-bold text-sage-700 underline underline-offset-4">
              トップページへ戻る
            </a>
          </p>
        </article>
      </main>
      <Footer />
    </>
  )
}

export function DocSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 text-lg font-bold text-ink sm:text-xl">{title}</h2>
      <div className="space-y-3 [&_li]:ml-5 [&_ol]:list-decimal [&_ol]:space-y-1 [&_ul]:list-disc [&_ul]:space-y-1">{children}</div>
    </section>
  )
}
