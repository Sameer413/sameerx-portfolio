export type Project = {
  id: string; // slug (filename)
  title: string;
  description?: string;

  /** MDX specific */
  content?: string; // raw MDX body (optional for list pages)
  date?: string;
  author?: string;
  tags?: string[];

  /** UI / meta */
  tech_stack: {
    label: string;
    image: string;
  }[];

  /** SEO / extras */
  cover_image?: string;
  published?: boolean;
};
