import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-[12px] border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-[15px] shadow-none transition-[border-color,box-shadow] file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-[var(--muted-2)] focus-visible:outline-none focus-visible:border-[var(--accent)] focus-visible:shadow-[0_0_0_3px_color-mix(in_srgb,var(--accent)_14%,transparent)] disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
