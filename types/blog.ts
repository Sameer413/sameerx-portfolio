export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  author?: string;
  tags?: string[];
  readingTime?: number;
}

export interface BlogPostWithContent extends BlogPost {
  content: React.ComponentType;
}
