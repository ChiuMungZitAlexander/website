import { Client } from "@notionhq/client";

import { env } from "env.mjs";

const Blog = async ({
  params,
}: {
  params: { locale: string; blogId: string };
}) => {
  const notion = new Client({
    auth: env.NOTION_TOKEN,
    notionVersion: "2022-06-28",
  });

  const blog = await notion.blocks.children.list({
    block_id: "8980c912-f4fb-4975-a341-390237366897",
  });

  console.log(222, JSON.stringify(blog));

  return <></>;
};

export default Blog;
