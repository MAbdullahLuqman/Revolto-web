import { Reveal } from "./motion";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  light,
}: SectionHeaderProps) {
  return (
    <Reveal className={`${align === "center" ? "text-center" : "text-left"} mb-12 md:mb-16`}>
      {eyebrow && (
        <p
          className={`mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-black/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] ${
            light ? "text-muted-foreground" : "text-muted-foreground"
          }`}
        >
          <span className="inline-block size-1.5 rounded-full bg-accent-orange" />
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-bold leading-[1.08] tracking-tight text-balance md:text-[2.75rem] lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-2xl text-base leading-relaxed md:text-lg ${
            align === "center" ? "mx-auto" : ""
          } text-muted-foreground`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
