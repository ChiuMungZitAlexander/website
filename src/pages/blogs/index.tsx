import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Container,
  Title,
  Grid,
  Card,
  Image,
  Group,
  Text,
  rem,
} from "@mantine/core";

import Badge, { BadgeType } from "../../components/badge";

const BLOGS_EN = [
  {
    id: "20210331",
    title: "Draw Xiaomi new logo by pure CSS",
    digest: `Synopsis  Xiaomi released their new logo today and it is said that this was charged RMB 2M. Mr Leibs always does good at marketing. There are also rumors that one-line code is not worth 2M.`,
    tag: "tech",
    thumb: "/blogs/20210331/thumb.png",
    min_read: 12,
  },
  {
    id: "20210127",
    title: "Goodbye, Mamba",
    digest: `Chap 0 On this day last year, all basked in the happiness of Chinese new year. However, my mom, who never cared about my oversleeping, woke me up even before dawn.`,
    tag: "journal",
    thumb: "/blogs/20210127/thumb.webp",
    min_read: 15,
  },
  {
    id: "20200809",
    title: "Implement ripple effect by directives on Vue components",
    digest: `What is directives? Vue docsdefines directives as "some low-level DOM access on plain elements". In short, due to the data-driven of MVVM, it is not recommended to manipulate DOM. However, occasionally, it cannot be avoided to manipulate DOM with the same logic in different conditions. Now, using directives will abstract the logic and improve the reusability.`,
    tag: "tech",
    thumb: "/blogs/20200809/thumb.webp",
    min_read: 2,
  },
];

const BLOGS_ZH = [
  {
    id: "20210331",
    title: "用CSS画一个小米的新logo",
    digest: `前情提示 小米今天换新logo了，据说花了200万。雷布斯总能在宣传上给我们整点新花样。网上更是炸翻了天，说一行代码，就值200万？要不是说雷布斯是个懂营销的程序员呢，普普通通换个logo，小米立马上热搜。`,
    tag: "tech",
    thumb: "/blogs/20210331/thumb.png",
    min_read: 12,
  },
  {
    id: "20210127",
    title: "再见，曼巴",
    digest: `零 去年的今天，还沉浸在过年的气氛中。一向不理会我睡懒觉的老妈，今天反常地天蒙蒙亮便把我拍醒。“科比死了。”北方方言死了就是死了，并没有任何不尊重的意思在里面。`,
    tag: "journal",
    thumb: "/blogs/20210127/thumb.webp",
    min_read: 15,
  },
  {
    id: "20200809",
    title: "运用directives在vue组件中添加ripple动画效果",
    digest: `什么是 directives？vue 官方文档对 directives 定义是“自定义指令，用来对 DOM 元素进行底层操作”。简单来说，因为 MVVM 模式是数据驱动的，所以不提倡直接操作 DOM。`,
    tag: "tech",
    thumb: "/blogs/20200809/thumb.webp",
    min_read: 5,
  },
];

const Blogs = () => {
  const { t, i18n } = useTranslation();

  const blogs = i18n.language === "en" ? BLOGS_EN : BLOGS_ZH;

  return (
    <Container h="100%" maw={rem(1080)} pt={rem(96)}>
      <Title order={3} transform="capitalize">
        {t("blogs")}
      </Title>
      <Grid mt={rem(32)} pb="sm">
        {blogs.map((_blog) => (
          <Grid.Col key={_blog.id} lg={4} sm={6}>
            <Link to={`./${_blog.id}`}>
              <Card padding="md" radius="md" shadow="sm" withBorder>
                <Card.Section>
                  <Image
                    alt={_blog.id}
                    fit="cover"
                    height={120}
                    src={_blog.thumb}
                  />
                </Card.Section>
                <Text py="sm" truncate weight={500}>
                  {_blog.title}
                </Text>
                <Group mb="xs" noWrap>
                  <Badge type={_blog.tag as BadgeType}>{t(_blog.tag)}</Badge>
                  <Badge type="min_read">
                    {_blog.min_read} {t("min_read", { count: _blog.min_read })}
                  </Badge>
                </Group>
                <Text color="dimmed" lineClamp={2} size="sm">
                  {_blog.digest}
                </Text>
              </Card>
            </Link>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default Blogs;
