export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={`group inline-flex items-center gap-2 font-display text-lg font-bold tracking-tight text-foreground ${className ?? ""}`}
      aria-label="Revoloto home"
    >
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-black/10 bg-black/[0.06] text-sm text-foreground shadow-[0_1px_0_0_rgba(0,0,0,0.06)_inset] transition-transform duration-300 [transition-timing-function:cubic-bezier(0.32,0.72,0,1)] group-hover:-rotate-6">
        R
      </span>
      Revoloto
    </span>
  );
}
