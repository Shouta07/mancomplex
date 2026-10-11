export function Logo({ className = '' }: { className?: string }) {
  return (
    <a href="/" className={`inline-flex shrink-0 items-center gap-2 whitespace-nowrap font-bold tracking-[0.06em] text-ink ${className}`}>
      <svg aria-hidden="true" viewBox="0 0 32 32" className="h-6 w-6">
        <circle cx="12" cy="16" r="6" className="fill-sage-500" />
        <circle cx="20" cy="16" r="6" fill="none" className="stroke-sage-700" strokeWidth="2" />
      </svg>
      His Recoveries
    </a>
  )
}
