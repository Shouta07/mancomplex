import logoMark from '../assets/logo-mark.png'

export function Logo({ className = '' }: { className?: string }) {
  return (
    <a href="/" className={`inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap font-bold tracking-[0.06em] text-ink ${className}`}>
      <img src={logoMark} alt="" width={32} height={32} className="h-8 w-8" />
      His Recoveries
    </a>
  )
}
