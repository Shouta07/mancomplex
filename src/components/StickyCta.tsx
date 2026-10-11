import { useEffect, useRef, useState } from 'react'
import { CtaButton } from './CtaButton'

/**
 * スマートフォンのみの控えめな固定CTA。
 * ファーストビューを過ぎてから表示し、予約セクションや最終CTAが見えている間は隠す。
 */
export function StickyCta() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // 非表示中はフォーカスも当たらないようにする
  useEffect(() => {
    if (ref.current) ref.current.inert = !visible
  }, [visible])

  useEffect(() => {
    const hero = document.getElementById('hero')
    const hideTargets = ['booking', 'final-cta'].map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    if (!hero || !('IntersectionObserver' in window)) return
    const state = { heroVisible: true, targetsVisible: new Set<Element>() }
    const update = () => setVisible(!state.heroVisible && state.targetsVisible.size === 0)
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target === hero) state.heroVisible = e.isIntersecting
        else if (e.isIntersecting) state.targetsVisible.add(e.target)
        else state.targetsVisible.delete(e.target)
      }
      update()
    })
    io.observe(hero)
    hideTargets.forEach((t) => io.observe(t))
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-line bg-canvas/95 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur transition-transform duration-300 sm:hidden ${
        visible ? 'translate-y-0' : 'pointer-events-none translate-y-full'
      }`}
      aria-hidden={!visible}
    >
      <CtaButton size="md" className="w-full" />
      <p className="mt-1.5 text-center text-xs text-ink-soft">初回30分無料・LINE登録不要・アプリ不要</p>
    </div>
  )
}
