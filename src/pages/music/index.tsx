import * as React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";
import { Title, Center, Grid, AspectRatio, Text, rem } from "@mantine/core";

import Layout from "@/layouts";

import type { Album } from "@/types/album";

type MusicPageProps = {
  data?: {
    allAlbum?: {
      edges?: {
        node: Album;
      }[];
    };
  };
};

const MusicPage = ({ data }: MusicPageProps) => {
  const { t } = useTranslation();

  const albums = React.useMemo(
    () => data?.allAlbum?.edges?.map((_edge) => _edge.node) || [],
    [data?.allAlbum?.edges],
  );

  return (
    <Layout>
      <Title mb="lg" order={3} tt="capitalize">
        {t("music")}
      </Title>
      <Center py={rem(80)}>
        <Text>hello</Text>
      </Center>
      <Grid pb="sm" gutter="md">
        {albums.map((_album) => (
          <Grid.Col
            key={_album.key}
            span={6}
            xs={6}
            sm={6}
            md={3}
            lg={2}
            xl={2}
          >
            <AspectRatio ratio={1}>
              <GatsbyImage
                alt="avatar"
                image={getImage(data?.imageSharp || null) as IGatsbyImageData}
                imgStyle={{
                  display: "block",
                  height: "100%",
                  width: "100%",
                }}
                objectFit="cover"
              />
            </AspectRatio>
            <Title order={4} truncate>
              {_album.name}
            </Title>
          </Grid.Col>
        ))}
      </Grid>
    </Layout>
  );
};

export default MusicPage;

export const query = graphql`
  query ($language: String!) {
    allAlbum {
      edges {
        node {
          id
          key
          name
          thumbnail
          songs {
            index
            name
            src
          }
          date
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
