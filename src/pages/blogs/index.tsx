import * as React from "react";
import { graphql } from "gatsby";
import { Link, useTranslation, useI18next } from "gatsby-plugin-react-i18next";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";
import {
  Title,
  Grid,
  Card,
  Text,
  Group,
  Badge as MantineBadge,
  rem,
} from "@mantine/core";

import Layout from "@/layouts";
import Badge, { type BadgeType } from "@/components/badge";
import SEO from "@/components/seo";

import { MarkdownRemarkData } from "@/types/md";

type BlogsPageProps = {
  data?: {
    allMarkdownRemark?: {
      edges?: {
        node: MarkdownRemarkData;
      }[];
    };
  };
};

const BlogsPage = ({ data }: BlogsPageProps) => {
  const { t } = useTranslation();
  const { language } = useI18next();

  const blogs = React.useMemo(
    () =>
      data?.allMarkdownRemark?.edges
        ?.filter((_edge) => _edge.node.frontmatter.locale === language)
        .map((_edge) => _edge.node) || [],
    [language, data?.allMarkdownRemark?.edges],
  );

  return (
    <Layout>
      <>
        <SEO title={t("blogs.title")} />
        <Title mb="lg" order={3} tt="capitalize">
          {t("blogs")}
        </Title>
        <Grid pb="sm">
          {blogs.map((_blog) => (
            <Grid.Col key={_blog.id} lg={4} sm={6}>
              <Link to={`/blogs${_blog.frontmatter.slug}`}>
                <Card padding="md" radius="md" shadow="sm" withBorder>
                  <Card.Section
                    h={rem(120)}
                    pos="relative"
                    style={{ overflow: "hidden" }}
                  >
                    <GatsbyImage
                      alt={_blog.frontmatter.slug}
                      image={
                        getImage(
                          _blog.frontmatter.thumbnail,
                        ) as IGatsbyImageData
                      }
                      objectFit="cover"
                      objectPosition="top"
                      style={{ height: "100%" }}
                    />
                    <MantineBadge
                      bottom={8}
                      color="gray"
                      opacity={0.5}
                      pos="absolute"
                      radius="xs"
                      right={8}
                      size="sm"
                      variant="filled"
                    >
                      {_blog.frontmatter.date}
                    </MantineBadge>
                  </Card.Section>
                  <Text fw={700} lh={2.5} truncate>
                    {_blog.frontmatter.title}
                  </Text>
                  <Group mb="xs" noWrap spacing="xs">
                    <Badge type={_blog.frontmatter.type as BadgeType}>
                      {t(`blogs.${_blog.frontmatter.type}`)}
                    </Badge>
                    <Badge type="min_read">
                      {_blog.timeToRead}{" "}
                      {t("blogs.min_read", { count: _blog.timeToRead })}
                    </Badge>
                  </Group>
                  <Text color="dimmed" lineClamp={2} size="sm">
                    {_blog.excerpt}
                  </Text>
                </Card>
              </Link>
            </Grid.Col>
          ))}
        </Grid>
      </>
    </Layout>
  );
};

export default BlogsPage;

export const query = graphql`
  query ($language: String!) {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          excerpt(format: PLAIN, pruneLength: 160, truncate: true)
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            locale
            slug
            tag
            thumbnail {
              childImageSharp {
                gatsbyImageData(
                  width: 1200
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            title
            type
          }
          timeToRead
        }
      }
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
