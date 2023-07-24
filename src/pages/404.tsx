import * as React from "react";
import { HeadFC, PageProps, graphql } from "gatsby";
import { Link } from "gatsby-plugin-react-i18next";
import { StaticImage } from "gatsby-plugin-image";
import { Container, Flex, Title, Text, Button } from "@mantine/core";

import { MAX_WIDTH } from "@/layouts";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Container h="100vh" maw={MAX_WIDTH}>
      <Flex align="center" direction="column" h="100%" justify="center">
        <Flex align="center" gap={2} wrap="nowrap">
          <Title fz={120} lh={1} order={1}>
            4
          </Title>
          <StaticImage alt="404" height={120} src="../images/doge.png" />
          <Title fz={120} lh={1} order={1}>
            4
          </Title>
        </Flex>
        <Title order={2} tt="uppercase">
          Page not found
        </Title>
        <Text c="gray.6" fz="sm" mb="xl">
          The requested URL was not found on this server
        </Text>
        <Link to="/">
          <Button radius="xl" tt="uppercase">
            Go Home
          </Button>
        </Link>
      </Flex>
    </Container>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;

export const query = graphql`
  query ($language: String!) {
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
