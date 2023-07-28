import * as React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { Title, Center, Text, Stack, Flex, Image, rem } from "@mantine/core";

import Layout from "@/layouts";
import SEO from "@/components/seo";

const MusicPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <>
        <SEO title={t("music.title")} />
        <Title mb="lg" order={3} tt="capitalize">
          {t("music")}
        </Title>
        <Center py={rem(80)}>
          <Text>hello</Text>
        </Center>
        <Title mb="lg" order={3} tt="capitalize">
          {t("music.albums")}
        </Title>
        <Stack spacing={0}>
          <Flex h={rem(96)} wrap="nowrap">
            <Center bg="blue" h={rem(96)} w={rem(96)}>
              1
            </Center>
            <Image
              alt="album_zero"
              height={rem(96)}
              src="https://picsum.photos/200"
              width={rem(96)}
              withPlaceholder
            />
          </Flex>
        </Stack>
      </>
    </Layout>
  );
};

export default MusicPage;

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
