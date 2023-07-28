import * as React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { Title, Center, Group, Image, Blockquote, rem } from "@mantine/core";
import { IconMusicShare } from "@tabler/icons-react";

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
          <Blockquote
            c="gray.6"
            maw={728}
            icon={<IconMusicShare color="#228be6" size="1.5rem" />}
          >
            {t("music.quote")}
          </Blockquote>
        </Center>
        <Title mb="lg" order={3} tt="capitalize">
          {t("music.albums")}
        </Title>
        <Group>
          <Image
            alt="album_zero"
            height={rem(196)}
            src="https://picsum.photos/200"
            width={rem(196)}
            withPlaceholder
          />
        </Group>
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
