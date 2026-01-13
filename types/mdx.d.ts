declare module "*.mdx" {
  import type { ComponentType } from "react";
  let MDXComponent: ComponentType<any>;
  export default MDXComponent;
}

declare module "*.md" {
  import type { ComponentType } from "react";
  let MDXComponent: ComponentType<any>;
  export default MDXComponent;
}
