import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center border gap-2 whitespace-nowrap rounded-full cursor-pointer disabled:pointer-events-none disabled:opacity-50 ",
  {
    variants: {
      variant: {
        primary:
          "text-body-1 text-white bg-brown-600 border-brown-600 hover:bg-brown-500 px-10 py-[0.6rem] ",
        outline:
          "text-body-1 text-brown-600 bg-white border-brown-400 hover:text-brown-400 px-10 py-[0.6rem]",
        destructive:
          "text-body-1 bg-destructive text-white hover:bg-destructive/90",
        secondary:
          "text-body-1 text-brown-400 bg-transparent  hover:bg-brown-100 hover:text-brown-500 rounded-md border-0 px-5 py-5 h-12",
        ghost: "text-body-1 hover:bg-accent hover:text-accent-foreground",
        link: "text-body-1 underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

function Button({
  className,
  variant = "primary",

  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
