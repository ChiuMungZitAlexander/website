import * as React from "react";
import { graphql } from "gatsby";
import { useTranslation, Link } from "gatsby-plugin-react-i18next";
import {
  GatsbyImage,
  StaticImage,
  IGatsbyImageData,
  getImage,
} from "gatsby-plugin-image";
import {
  Container,
  Badge as MantineBadge,
  Box,
  Title,
  Group,
  Flex,
  Text,
  Divider,
  ActionIcon,
  rem,
} from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";

import Layout from "@/layouts";
import Badge, { type BadgeType } from "@/components/badge";
import SEO from "@/components/seo";

import { MarkdownRemarkData } from "@/types/md";

type BlogProps = {
  data?: {
    markdownRemark?: MarkdownRemarkData & { html: string };
  };
};

const Blog = ({ data }: BlogProps) => {
  const { t } = useTranslation();

  return (
    <Layout goBackPath="/blogs">
      <>
        <SEO title={t("blogs.title")} />
        {data?.markdownRemark && (
          <Container maw={rem(1080)} p={0} pb="md">
            <Box h={rem(192)} pos="relative" style={{ overflow: "hidden" }}>
              <GatsbyImage
                alt={data.markdownRemark.frontmatter.slug}
                image={
                  getImage(
                    data.markdownRemark.frontmatter.thumbnail,
                  ) as IGatsbyImageData
                }
                objectFit="cover"
                style={{ height: "100%", width: "100%" }}
              />
              <Box left={rem(16)} pos="absolute" top={rem(16)}>
                <Link to="/blogs">
                  <ActionIcon
                    color="blue"
                    radius="xl"
                    size="xl"
                    variant="filled"
                  >
                    <IconArrowLeft />
                  </ActionIcon>
                </Link>
              </Box>
              <MantineBadge
                bottom={rem(8)}
                color="gray"
                opacity={0.5}
                pos="absolute"
                radius="xs"
                right={rem(8)}
                size="sm"
                variant="filled"
              >
                {data.markdownRemark.frontmatter.date}
              </MantineBadge>
            </Box>
            <Title fw={700} lh={1.125} my="sm" order={3}>
              {data.markdownRemark.frontmatter.title}
            </Title>
            <Group mb="xs" noWrap spacing="xs">
              <Badge type={data.markdownRemark.frontmatter.type as BadgeType}>
                {t(`blogs.${data.markdownRemark.frontmatter.type}`)}
              </Badge>
              <Badge type="min_read">
                {data.markdownRemark.timeToRead}{" "}
                {t("blogs.min_read", { count: data.markdownRemark.timeToRead })}
              </Badge>
            </Group>
            <Box
              dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
              mb="sm"
              sx={(theme) => ({
                overflowX: "hidden",
                userSelect: "none",

                "& p,h1,h2,h3,h4,h5,h6": {
                  margin: "0.625rem 0",
                },

                "& img": {
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "100%",
                },

                "& pre": {
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[5]
                      : theme.colors.gray[0],
                  borderRadius: "0.25rem",
                  color:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[0]
                      : theme.colors.dark[7],
                  fontFamily:
                    "Consolas, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New",
                  fontSize: "14px",
                  padding: "0.25rem 0.5rem",
                  overflowX: "auto",
                },

                "& code:not(pre > code)": {
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[5]
                      : theme.colors.gray[0],
                  borderRadius: "0.25rem",
                  color:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[0]
                      : theme.colors.dark[7],
                  fontSize: "14px",
                  padding: "0 0.5rem",
                  wordBreak: "break-all",
                },

                "& .gatsby-resp-image-figcaption": {
                  fontSize: "12px",
                  opacity: 0.75,
                  textAlign: "center",
                },
              })}
            />
            <Divider />
            <Title my="md" order={4} ta="center">
              {t("blogs.buy_me_coffee")}
            </Title>
            <Flex gap={rem(48)} justify="center">
              <Flex align="center" direction="column" maw={rem(108)}>
                <StaticImage
                  alt="pay_wechat"
                  height={108}
                  src="../../images/pay_wechat.jpg"
                  width={108}
                />
                <Text c="dimmed" fz="xs">
                  {t("blogs.pay_wechat")}
                </Text>
                <Text c="dimmed" fz="xs">
                  {t("blogs.pay_wechat.desc")}
                </Text>
              </Flex>
              <Flex align="center" direction="column" maw={rem(108)} pb="sm">
                <StaticImage
                  alt="pay_eth"
                  height={108}
                  src="../../images/pay_eth.jpg"
                  width={108}
                />
                <Text c="dimmed" fz="xs" style={{ wordBreak: "break-all" }}>
                  {t("blogs.eth")}: 0xB029143abE1Cb60a69A8e4670Ed26949aE213Bc5
                </Text>
              </Flex>
            </Flex>
          </Container>
        )}
      </>
    </Layout>
  );
};

export default Blog;

export const pageQuery = graphql`
  query ($frontmatter__slug: String!, $language: String!) {
    markdownRemark(
      frontmatter: {
        slug: { eq: $frontmatter__slug }
        locale: { eq: $language }
      }
    ) {
      id
      html
      frontmatter {
        slug
        title
        date
        locale
        tag
        type
        thumbnail {
          childImageSharp {
            gatsbyImageData(
              width: 1200
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
      excerpt
      timeToRead
    }
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
