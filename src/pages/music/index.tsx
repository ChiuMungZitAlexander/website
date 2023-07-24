import * as React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { Title, Container, Grid, rem } from "@mantine/core";

import Layout, { MAX_WIDTH } from "@/layouts";
import WaveSurferPlayer from "@/components/player";

import type { PlayList } from "@/types/playlist";

const ALBUMS = [
  {
    id: "album_0",
    name: "Album 0",
    // thumb: "/albums/album_0/thumb.jpg",
    thumb: "",
    list: [
      {
        index: 0,
        title: "Zik Joeng Zeoi Liu",
        src: "/albums/album_0/zik_yoeng_zeoi_liu.mp3",
      },
    ],
    date: "2019-03-21",
  },
];

const MusicPage = () => {
  const { t } = useTranslation();

  const [playList] = React.useState<PlayList>(ALBUMS[0]);

  return (
    <Layout>
      <Title order={3} tt="capitalize">
        {t("music")}
      </Title>
      <Container fluid pb={rem(120)} pt="lg" px={0}>
        <Grid>
          <Grid.Col lg={3} md={6}>
            1
          </Grid.Col>
          <Grid.Col lg={3} md={6}>
            2
          </Grid.Col>
          <Grid.Col lg={3} md={6}>
            3
          </Grid.Col>
          <Grid.Col lg={3} md={6}>
            4
          </Grid.Col>
        </Grid>
      </Container>
      <Container
        bottom={0}
        fluid
        left={0}
        maw={rem(MAX_WIDTH)}
        pb={16}
        pos="fixed"
        px={16}
        right={0}
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : "#fff",
        })}
      >
        <WaveSurferPlayer playlist={playList} />
      </Container>
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
