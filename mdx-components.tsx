import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import { CodeBlock } from "@/components/code-block";

export type MDXComponents = {
  [key: string]: React.ComponentType<any>;
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ className, ...props }: ComponentPropsWithoutRef<"h1">) => (
      <h1
        className={cn(
          "mt-8 scroll-m-20 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl",
          className
        )}
        {...props}
      />
    ),
    h2: ({ className, ...props }: ComponentPropsWithoutRef<"h2">) => (
      <h2
        className={cn(
          "mt-8 scroll-m-20 text-xl font-semibold tracking-tight text-foreground border-b border-border pb-2 sm:text-2xl lg:text-3xl",
          className
        )}
        {...props}
      />
    ),
    h3: ({ className, ...props }: ComponentPropsWithoutRef<"h3">) => (
      <h3
        className={cn(
          "mt-6 scroll-m-20 text-lg font-semibold tracking-tight text-foreground sm:text-xl lg:text-2xl",
          className
        )}
        {...props}
      />
    ),
    h4: ({ className, ...props }: ComponentPropsWithoutRef<"h4">) => (
      <h4
        className={cn(
          "mt-6 scroll-m-20 text-base font-semibold tracking-tight text-foreground sm:text-lg lg:text-xl",
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
          "leading-7 text-sm text-foreground [&:not(:first-child)]:mt-6 sm:text-base lg:text-[1.0625rem]",
          className
        )}
        {...props}
      />
    ),
    ul: ({ className, ...props }: ComponentPropsWithoutRef<"ul">) => (
      <ul
        className={cn(
          "my-6 ml-6 list-disc [&>li]:mt-2 text-sm text-foreground sm:text-base",
          className
        )}
        {...props}
      />
    ),
    ol: ({ className, ...props }: ComponentPropsWithoutRef<"ol">) => (
      <ol
        className={cn(
          "my-6 ml-6 list-decimal [&>li]:mt-2 text-sm text-foreground sm:text-base",
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
    pre: (props: ComponentPropsWithoutRef<"pre">) => (
      <CodeBlock {...props} />
    ),
    code: ({ className, ...props }: ComponentPropsWithoutRef<"code">) => {
      // If inside a pre block, CodeBlock handles rendering — skip extra styling
      const isBlock = className?.includes("language-");
      if (isBlock) return <code className={className} {...props} />;
      return (
        <code
          className={cn(
            "relative rounded-md border border-border bg-muted/80 px-[0.35rem] py-[0.15rem] font-mono text-xs font-medium text-foreground sm:text-sm",
            className
          )}
          {...props}
        />
      );
    },
    ...components,
  };
}
