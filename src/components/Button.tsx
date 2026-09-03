import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  [
    "group relative inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-full",
    "text-sm font-medium tracking-tight",
    "transition-[transform,background-color,color,box-shadow,border-color] duration-200",
    "[transition-timing-function:cubic-bezier(0.32,0.72,0,1)]",
    "active:scale-[0.975] active:duration-75",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-45",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[0_1px_0_0_rgba(255,255,255,0.5)_inset,0_8px_24px_-12px_rgba(0,0,0,0.9)] hover:bg-primary/90",
        accent:
          "bg-accent-orange text-accent-orange-foreground shadow-[0_1px_0_0_rgba(255,255,255,0.35)_inset,0_10px_30px_-14px_var(--accent-orange)] hover:brightness-110",
        outline:
          "border border-border bg-black/[0.02] text-foreground backdrop-blur-sm hover:border-black/20 hover:bg-black/[0.06]",
        ghost: "text-muted-foreground hover:bg-black/[0.06] hover:text-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      },
      size: {
        default: "h-10 px-5",
        sm: "h-8 px-3.5 text-[13px]",
        lg: "h-12 px-7 text-[15px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size }), className)} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
