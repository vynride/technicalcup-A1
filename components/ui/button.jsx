import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import * as React from "react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-bold ring-offset-white transition-all gap-2 disabled:pointer-events-none disabled:opacity-50 border-2 border-black focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-neo-mint)] text-black neo-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:neo-shadow-sm",
        secondary:
          "bg-white text-black neo-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:neo-shadow-sm",
        neutral:
          "bg-[var(--color-neo-dark)] text-[var(--color-neo-mint)] neo-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none",
        destructive:
            "bg-[var(--color-neo-orange)] text-white neo-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:neo-shadow-sm",
        ghost:
            "bg-transparent border-transparent hover:bg-black/5 hover:text-black",
        link: "text-black underline-offset-4 hover:underline bg-transparent border-none shadow-none",
        reverse:
            "bg-black text-white shadow-none hover:bg-white hover:text-black hover:neo-shadow",
        orange:
           "bg-[var(--color-neo-orange)] text-white neo-shadow-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
      },
      size: {
        default: "h-12 px-7 py-3",
        sm: "h-9 px-4",
        lg: "h-14 px-8",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props} />
  );
}

export { Button, buttonVariants }
