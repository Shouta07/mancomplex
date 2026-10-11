import { useEffect, useRef, useState } from 'react'
import { TIMEREX_EMBED_SCRIPT, TIMEREX_URL, isBookingConfigured } from '../config/site'

declare global {
  interface Window {
    TimerexCalendar?: () => void
  }
}

type Status = 'idle' | 'loading' | 'ready' | 'error'

/**
 * TimeRex 公式の埋め込みウィジェット。
 * 外部スクリプトはページ表示時ではなく、予約セクションに近づいたとき（または #booking に遷移したとき）に読み込む。
 */
export function TimerexWidget() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [status, setStatus] = useState<Status>('idle')

  useEffect(() => {
    if (!isBookingConfigured) {
      console.error('[His Recoveries] TIMEREX_URL が未設定、または形式が正しくありません（src/config/site.ts）。')
      return
    }
    const el = containerRef.current
    if (!el) return

    let started = false
    let timer: number | undefined
    const load = () => {
      if (started) return
      started = true
      setStatus('loading')
      // 一定時間内に表示されない場合はフォールバック案内に切り替える
      timer = window.setTimeout(() => setStatus((s) => (s === 'loading' ? 'error' : s)), 15000)
      const run = () => {
        try {
          window.TimerexCalendar?.()
          setStatus(window.TimerexCalendar ? 'ready' : 'error')
        } catch (e) {
          console.error('[His Recoveries] TimeRex ウィジェットの初期化に失敗しました。', e)
          setStatus('error')
        }
      }
      const existing = document.getElementById('timerex_embed')
      if (existing) {
        run()
        return
      }
      const script = document.createElement('script')
      script.id = 'timerex_embed'
      script.src = TIMEREX_EMBED_SCRIPT
      script.async = true
      script.onload = run
      script.onerror = () => setStatus('error')
      document.body.appendChild(script)
    }

    if (location.hash === '#booking' || !('IntersectionObserver' in window)) {
      load()
      return () => window.clearTimeout(timer)
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          load()
          io.disconnect()
        }
      },
      { rootMargin: '1200px 0px' },
    )
    io.observe(el)
    const onHash = () => location.hash === '#booking' && load()
    window.addEventListener('hashchange', onHash)
    return () => {
      window.clearTimeout(timer)
      io.disconnect()
      window.removeEventListener('hashchange', onHash)
    }
  }, [])

  if (!isBookingConfigured) {
    return (
      <div role="alert" className="rounded-2xl border-2 border-dashed border-amber-500 bg-amber-50 p-6 text-amber-950">
        <p className="font-bold">予約受付の準備中です。</p>
        <p className="mt-2 text-sm">
          開発者の方へ：<code>src/config/site.ts</code> の <code>TIMEREX_URL</code> に TimeRex の予約URLを設定してください。
        </p>
      </div>
    )
  }

  return (
    <div>
      <div className="relative min-h-[640px] overflow-hidden rounded-2xl border border-line bg-surface">
        {/* TimeRex の埋め込みコードが要求する要素。中身はスクリプトが描画するため React では子要素を持たせない */}
        <div id="timerex_calendar" ref={containerRef} data-url={TIMEREX_URL} className="relative z-10" />
        {status !== 'ready' && status !== 'error' && (
          <p className="absolute inset-0 flex items-center justify-center p-6 text-center text-ink-soft" aria-live="polite">
            予約カレンダーを読み込んでいます…
          </p>
        )}
        {status === 'error' && (
          <div role="alert" className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
            <p className="text-ink">予約カレンダーを表示できませんでした。</p>
            <p className="text-sm text-ink-soft">お手数ですが、下のリンクから予約ページを開いてください。</p>
          </div>
        )}
      </div>
      <p className="mt-4 text-center text-sm text-ink-soft">
        カレンダーが表示されない場合は{' '}
        <a
          href={TIMEREX_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-sage-700 underline underline-offset-4"
        >
          TimeRexの予約ページを開く
          <span className="sr-only">（新しいタブで開きます）</span>
        </a>
      </p>
    </div>
  )
}
