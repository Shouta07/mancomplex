import type { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

type Props = { title: string; children: ReactNode }

/** 文書ページ（プライバシーポリシー）の共通レイアウト */
export function DocLayout({ title, children }: Props) {
  return (
    <>
      <Header />
      <main id="main" className="px-4 py-14 sm:px-6 sm:py-20">
        <article className="mx-auto max-w-3xl">
          <h1 className="text-2xl font-bold sm:text-3xl">{title}</h1>
          <div className="mt-10 space-y-10 text-[15px] leading-[1.95] text-ink-soft sm:text-base">{children}</div>
          <p className="mt-12">
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
      <div className="space-y-3 [&_li]:ml-5 [&_ul]:list-disc [&_ul]:space-y-1">{children}</div>
    </section>
  )
}
