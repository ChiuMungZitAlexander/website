import * as React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { Link } from "gatsby-plugin-react-i18next";
import {
  Title,
  Center,
  Group,
  Image,
  Blockquote,
  LoadingOverlay,
  rem,
} from "@mantine/core";
import { IconMusicShare } from "@tabler/icons-react";

import Layout from "@/layouts";
import SEO from "@/components/seo";

import { useAlbums } from "@/hooks/useAlbums";

const MusicPage = () => {
  const { t } = useTranslation();

  const { data, isLoading } = useAlbums();

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
        <Group mih={120} pb="sm" pos="relative">
          <LoadingOverlay visible={isLoading} />
          {data?.map((_album) => (
            <Link key={_album.id} to={`/music/${_album.id}`}>
              <Image
                alt={_album.name}
                height={rem(196)}
                src={`${process.env.GATSBY_CDN_URL}${_album.thumbnail_path}`}
                width={rem(196)}
                withPlaceholder
              />
            </Link>
          ))}
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
