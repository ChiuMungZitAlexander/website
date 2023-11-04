import type { Metadata } from "next";

type Props = {
  params: { locale: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const locale = params.locale;

  if (locale === "zh") {
    return {
      title: "Alexander ZHÀO | 博客",
      keywords: ["Alexander", "Alexander Zhao", "博客"],
      description:
        "这是Alexander ZHÀO的博客的网页，可以阅读作者的技术博文和文章随笔。",
    };
  }

  return {
    title: "Alexander ZHÀO | Blogs",
    keywords: ["Alexander", "Alexander Zhao", "blogs"],
    description:
      "This is the page blogs of Alexander ZHÀO, where you can find all the tech articles and journals of mine.",
  };
};

const BlogsLayout = ({ children }: { children: React.ReactNode }) => children;

export default BlogsLayout;
