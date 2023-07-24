import type { ImageDataLike } from "gatsby-plugin-image";

type Frontmatter = {
  date: string;
  locale: string;
  slug: string;
  tag: string;
  thumbnail: ImageDataLike;
  title: string;
  type: "tech" | "journal";
};

export type MarkdownRemarkData = {
  excerpt: string;
  frontmatter: Frontmatter;
  id: string;
  timeToRead: number;
};
