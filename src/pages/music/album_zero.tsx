import * as React from "react";
import { graphql } from "gatsby";
import { useTranslation, Link } from "gatsby-plugin-react-i18next";
import {
  Container,
  Title,
  Stack,
  Box,
  Image,
  Group,
  Text,
  ActionIcon,
  useMantineTheme,
  rem,
} from "@mantine/core";
import {
  IconArrowLeft,
  IconMusic,
  IconPlayerPlay,
  IconCloudOff,
} from "@tabler/icons-react";

import Layout from "@/layouts";
import SEO from "@/components/seo";
import WaveSurferPlayer from "@/components/player";

import albums from "./albums.json";

import type { Album, Song } from "@/types/album";

const AlbumZeroPage = () => {
  const { t } = useTranslation();

  const theme = useMantineTheme();

  const album = React.useMemo(
    () => albums.find((_album) => _album.id === "album_zero") as Album,
    [albums],
  );

  const [song, setSong] = React.useState<null | Song>(null);

  return (
    <Layout showScrollToTop={false}>
      <>
        <SEO title={t("music.title")} />
        <Container maw={768} pb={rem(16)} px={0}>
          <Stack align="center" mb={rem(song ? 144 : 0)}>
            <Group align="flex-start" mb="md" noWrap spacing={rem(8)} w="100%">
              <Link to="/music">
                <ActionIcon color="gray" variant="transparent">
                  <IconArrowLeft />
                </ActionIcon>
              </Link>
              <Image
                alt=""
                height={120}
                radius="md"
                src={`${process.env.GATSBY_CDN_URL}${album.thumbnail_path}`}
                width={120}
              />
              <Stack spacing={0} style={{ flex: 1, overflow: "hidden" }}>
                <Title order={3} truncate>
                  {album.name}
                </Title>
                <Text c="gray.7" fz="sm">
                  {new Date(album.date).toISOString().slice(0, 10)}
                </Text>
                <Text fz="sm">
                  {t("music.album.song_count", {
                    count: album.song_count,
                  })}
                </Text>
                <Text fz="sm">
                  {t("music.album.available_song_count", {
                    count: album.song_list.filter((_song) => !!_song.src_path)
                      .length,
                  })}
                </Text>
              </Stack>
            </Group>
            <Stack spacing={0} w="100%">
              {album.song_list.map((_song) => (
                <React.Fragment key={_song.id}>
                  <Group h={rem(48)} spacing={rem(4)} w="100%">
                    <IconMusic color="#228be6" />
                    <Box
                      style={{
                        flex: 1,
                        overflow: "hidden",
                      }}
                    >
                      <Title
                        color={
                          _song.src_path
                            ? theme.colorScheme === "dark"
                              ? "#fff"
                              : "gray.7"
                            : theme.colorScheme === "dark"
                            ? "dark.0"
                            : "gray.4"
                        }
                        order={4}
                        truncate
                      >
                        <Text component="span" mx={rem(12)}>
                          {_song.index}
                        </Text>
                        {_song.name}
                      </Title>
                    </Box>
                    <ActionIcon
                      disabled={!_song.src_path}
                      onClick={() => _song.src_path && setSong(_song)}
                      variant="transparent"
                    >
                      {_song.src_path ? <IconPlayerPlay /> : <IconCloudOff />}
                    </ActionIcon>
                  </Group>
                </React.Fragment>
              ))}
            </Stack>
          </Stack>
          <Box
            bottom={0}
            left={0}
            maw={rem(1080)}
            mx="auto"
            pos="fixed"
            right={0}
            style={{ zIndex: song ? 1300 : -1 }}
          >
            <WaveSurferPlayer
              thumbnail={`${process.env.GATSBY_CDN_URL}${album.thumbnail_path}`}
              song={song}
            />
          </Box>
        </Container>
      </>
    </Layout>
  );
};

export default AlbumZeroPage;

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
