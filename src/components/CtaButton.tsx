import { BOOKING_ANCHOR } from '../config/site'

type Props = {
  size?: 'md' | 'lg'
  className?: string
  label?: string
}

/** すべての「無料で30分相談する」ボタン。予約セクション（TimeRex埋め込み）へ遷移する */
export function CtaButton({ size = 'lg', className = '', label = '無料で30分相談する' }: Props) {
  const sizing = size === 'lg' ? 'min-h-14 px-8 text-lg' : 'min-h-11 px-5 text-[15px]'
  return (
    <a
      href={BOOKING_ANCHOR}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-sage-700 font-bold text-white shadow-sm transition-colors hover:bg-sage-800 ${sizing} ${className}`}
    >
      {label}
      <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M7 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  )
}
