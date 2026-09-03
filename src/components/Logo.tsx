export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={`group inline-flex items-center gap-2 font-display text-lg font-bold tracking-tight text-foreground ${className ?? ""}`}
      aria-label="Rovolto home"
    >
      <img
        src="/rovolto-logo.jpeg"
        alt=""
        className="h-9 w-9 rounded-lg border border-black/10 object-cover shadow-[0_1px_0_0_rgba(0,0,0,0.06)_inset] transition-transform duration-300 [transition-timing-function:cubic-bezier(0.32,0.72,0,1)] group-hover:-rotate-3"
      />
      Rovolto
    </span>
  );
}
