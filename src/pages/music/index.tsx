import * as React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { Title, Center, Text, rem } from "@mantine/core";

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
