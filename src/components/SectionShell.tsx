import { cn } from "@/lib/utils";

interface SectionShellProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "muted" | "navy";
}

export function SectionShell({ children, className, variant = "default" }: SectionShellProps) {
  return (
    <section
      className={cn(
        "relative border-t border-border/60 py-20 md:py-28",
        variant === "muted" && "bg-black/[0.02]",
        variant === "navy" && "bg-navy-950 text-foreground",
        variant === "default" && "bg-background",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
