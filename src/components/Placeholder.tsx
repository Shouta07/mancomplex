/** 未入力の設定値を、公開前に入力が必要であると分かる形で表示する */
export function Placeholder({ label }: { label: string }) {
  return (
    <span className="rounded bg-amber-100 px-1.5 py-0.5 text-sm font-bold text-amber-900" data-placeholder={label}>
      【公開前に入力：{label}】
    </span>
  )
}
