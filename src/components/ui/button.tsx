import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-4xl border border-slate-200 border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-slate-950 focus-visible:ring-3 focus-visible:ring-slate-950/30 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-red-500 aria-invalid:ring-3 aria-invalid:ring-red-500/20 dark:aria-invalid:border-red-500/50 dark:aria-invalid:ring-red-500/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 dark:border-slate-800 dark:focus-visible:border-slate-300 dark:focus-visible:ring-slate-300/30 dark:aria-invalid:border-red-900 dark:aria-invalid:ring-red-900/20 dark:dark:aria-invalid:border-red-900/50 dark:dark:aria-invalid:ring-red-900/40",
  {
    variants: {
      variant: {
        default:
          "bg-slate-900 text-slate-50 hover:bg-slate-900/80 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80",
        outline:
          "border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-950 aria-expanded:bg-slate-100 aria-expanded:text-slate-950 dark:bg-transparent dark:hover:bg-slate-200/30 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:aria-expanded:bg-slate-800 dark:aria-expanded:text-slate-50 dark:dark:hover:bg-slate-800/30",
        secondary:
          "bg-slate-100 text-slate-900 hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-slate-100 aria-expanded:text-slate-900 dark:bg-slate-800 dark:text-slate-50 dark:aria-expanded:bg-slate-800 dark:aria-expanded:text-slate-50",
        ghost:
          "hover:bg-slate-100 hover:text-slate-950 aria-expanded:bg-slate-100 aria-expanded:text-slate-950 dark:hover:bg-slate-100/50 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:aria-expanded:bg-slate-800 dark:aria-expanded:text-slate-50 dark:dark:hover:bg-slate-800/50",
        destructive:
          "bg-red-500/10 text-red-500 hover:bg-red-500/20 focus-visible:border-red-500/40 focus-visible:ring-red-500/20 dark:bg-red-500/20 dark:hover:bg-red-500/30 dark:focus-visible:ring-red-500/40 dark:bg-red-900/10 dark:text-red-900 dark:hover:bg-red-900/20 dark:focus-visible:border-red-900/40 dark:focus-visible:ring-red-900/20 dark:dark:bg-red-900/20 dark:dark:hover:bg-red-900/30 dark:dark:focus-visible:ring-red-900/40",
        link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50",
      },
      size: {
        default:
          "h-9 gap-1.5 px-3 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5",
        xs: "h-6 gap-1 px-2.5 text-xs has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1 px-3 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        lg: "h-10 gap-1.5 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        icon: "size-9",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
