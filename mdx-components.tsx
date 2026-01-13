import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export type MDXComponents = {
  [key: string]: React.ComponentType<any>;
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ className, ...props }: ComponentPropsWithoutRef<"h1">) => (
      <h1
        className={cn(
          "mt-8 scroll-m-20 text-4xl font-bold tracking-tight text-foreground",
          className
        )}
        {...props}
      />
    ),
    h2: ({ className, ...props }: ComponentPropsWithoutRef<"h2">) => (
      <h2
        className={cn(
          "mt-8 scroll-m-20 text-3xl font-semibold tracking-tight text-foreground border-b border-border pb-2",
          className
        )}
        {...props}
      />
    ),
    h3: ({ className, ...props }: ComponentPropsWithoutRef<"h3">) => (
      <h3
        className={cn(
          "mt-6 scroll-m-20 text-2xl font-semibold tracking-tight text-foreground",
          className
        )}
        {...props}
      />
    ),
    h4: ({ className, ...props }: ComponentPropsWithoutRef<"h4">) => (
      <h4
        className={cn(
          "mt-6 scroll-m-20 text-xl font-semibold tracking-tight text-foreground",
          className
        )}
        {...props}
      />
    ),
    h5: ({ className, ...props }: ComponentPropsWithoutRef<"h5">) => (
      <h5
        className={cn(
          "mt-4 scroll-m-20 text-lg font-semibold tracking-tight text-foreground",
          className
        )}
        {...props}
      />
    ),
    h6: ({ className, ...props }: ComponentPropsWithoutRef<"h6">) => (
      <h6
        className={cn(
          "mt-4 scroll-m-20 text-base font-semibold tracking-tight text-foreground",
          className
        )}
        {...props}
      />
    ),
    a: ({ className, ...props }: ComponentPropsWithoutRef<"a">) => (
      <a
        className={cn(
          "font-medium text-primary underline underline-offset-4 hover:text-primary/80 transition-colors",
          className
        )}
        {...props}
      />
    ),
    p: ({ className, ...props }: ComponentPropsWithoutRef<"p">) => (
      <p
        className={cn(
          "leading-7 text-foreground [&:not(:first-child)]:mt-6",
          className
        )}
        {...props}
      />
    ),
    ul: ({ className, ...props }: ComponentPropsWithoutRef<"ul">) => (
      <ul
        className={cn(
          "my-6 ml-6 list-disc [&>li]:mt-2 text-foreground",
          className
        )}
        {...props}
      />
    ),
    ol: ({ className, ...props }: ComponentPropsWithoutRef<"ol">) => (
      <ol
        className={cn(
          "my-6 ml-6 list-decimal [&>li]:mt-2 text-foreground",
          className
        )}
        {...props}
      />
    ),
    li: ({ className, ...props }: ComponentPropsWithoutRef<"li">) => (
      <li className={cn("text-foreground", className)} {...props} />
    ),
    blockquote: ({ className, ...props }: ComponentPropsWithoutRef<"blockquote">) => (
      <blockquote
        className={cn(
          "mt-6 border-l-4 border-primary pl-6 italic text-muted-foreground",
          className
        )}
        {...props}
      />
    ),
    img: ({ className, alt, ...props }: ComponentPropsWithoutRef<"img">) => (
      <img
        className={cn("rounded-lg border border-border my-6", className)}
        alt={alt}
        {...props}
      />
    ),
    hr: ({ className, ...props }: ComponentPropsWithoutRef<"hr">) => (
      <hr
        className={cn("my-8 border-t border-border", className)}
        {...props}
      />
    ),
    table: ({ className, ...props }: ComponentPropsWithoutRef<"table">) => (
      <div className="my-6 w-full overflow-y-auto">
        <table
          className={cn("w-full border-collapse border border-border", className)}
          {...props}
        />
      </div>
    ),
    tr: ({ className, ...props }: ComponentPropsWithoutRef<"tr">) => (
      <tr
        className={cn(
          "m-0 border-t border-border p-0 even:bg-muted/50",
          className
        )}
        {...props}
      />
    ),
    th: ({ className, ...props }: ComponentPropsWithoutRef<"th">) => (
      <th
        className={cn(
          "border border-border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
          className
        )}
        {...props}
      />
    ),
    td: ({ className, ...props }: ComponentPropsWithoutRef<"td">) => (
      <td
        className={cn(
          "border border-border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
          className
        )}
        {...props}
      />
    ),
    pre: ({ className, ...props }: ComponentPropsWithoutRef<"pre">) => (
      <pre
        className={cn(
          "mb-4 mt-6 overflow-x-auto rounded-lg border border-border bg-muted p-4",
          className
        )}
        {...props}
      />
    ),
    code: ({ className, ...props }: ComponentPropsWithoutRef<"code">) => (
      <code
        className={cn(
          "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-foreground",
          className
        )}
        {...props}
      />
    ),
    ...components,
  };
}
