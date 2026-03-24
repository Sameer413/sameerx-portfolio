import { codeToHtml } from "shiki";
import { cn } from "@/lib/utils";
import { CopyButton } from "@/components/copy-button";
import type { ComponentPropsWithoutRef, ReactNode, ReactElement } from "react";

// Map common language aliases to Shiki language IDs
const LANG_MAP: Record<string, string> = {
  js: "javascript",
  ts: "typescript",
  jsx: "jsx",
  tsx: "tsx",
  py: "python",
  sh: "bash",
  shell: "bash",
  zsh: "bash",
  yml: "yaml",
  md: "markdown",
  mdx: "mdx",
  text: "text",
  txt: "text",
};

function getLanguage(className?: string): string {
  if (!className) return "text";
  const match = className.match(/language-(\S+)/);
  if (!match) return "text";
  const lang = match[1].toLowerCase();
  return LANG_MAP[lang] ?? lang;
}

function getFilename(className?: string): string | null {
  if (!className) return null;
  const match = className.match(/filename-(\S+)/);
  return match ? match[1] : null;
}

function extractText(node: ReactNode): string {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (node !== null && typeof node === "object" && "props" in node) {
    return extractText((node as ReactElement<{ children?: ReactNode }>).props.children);
  }
  return "";
}

export async function CodeBlock(props: ComponentPropsWithoutRef<"pre">) {
  const children = props.children as ReactElement<{ className?: string; children?: ReactNode }> | undefined;

  const codeClassName = children?.props?.className ?? "";
  const lang = getLanguage(codeClassName);
  const filename = getFilename(codeClassName);
  const rawCode = extractText(children?.props?.children);

  let highlighted = "";
  try {
    highlighted = await codeToHtml(rawCode.trimEnd(), {
      lang,
      theme: "one-dark-pro",
    });
  } catch {
    highlighted = await codeToHtml(rawCode.trimEnd(), {
      lang: "text",
      theme: "one-dark-pro",
    });
  }

  return (
    <div className="group relative my-6 overflow-hidden rounded-xl border border-[#2d2d2d] bg-[#21252b] shadow-xl shadow-black/30">
      {/* Editor top-bar */}
      <div className="flex items-center gap-2 border-b border-[#2d2d2d] bg-[#282c34] px-4 py-2.5">
        {/* macOS traffic lights */}
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        {/* Filename / language tab */}
        <div className="ml-3 flex-1">
          <span className="rounded-t-md bg-[#21252b] px-3 py-1 text-xs font-medium text-[#abb2bf]">
            {filename ?? (lang !== "text" ? lang : "code")}
          </span>
        </div>
        {/* Copy button — visible on group-hover */}
        <CopyButton code={rawCode} />
      </div>

      {/* Highlighted code output */}
      <div
        className={cn(
          "overflow-x-auto p-5 text-sm leading-6",
          "[&>pre]:!bg-transparent [&>pre]:!p-0 [&>pre]:!m-0 [&>pre]:outline-none",
          "[&_.line]:min-h-[1.5rem]"
        )}
        dangerouslySetInnerHTML={{ __html: highlighted }}
      />
    </div>
  );
}
