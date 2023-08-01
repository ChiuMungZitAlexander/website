import * as React from "react";
import { graphql } from "gatsby";
import { useTranslation, Link } from "gatsby-plugin-react-i18next";
import {
  Container,
  Center,
  LoadingOverlay,
  Title,
  Button,
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

import { useAlbums } from "@/hooks/useAlbums";

import type { Song } from "@/types/album";

const AlbumZeroPage = () => {
  const { t } = useTranslation();

  const theme = useMantineTheme();

  const { data, isLoading } = useAlbums();

  const album = React.useMemo(
    () => data?.find((_album) => _album.id === "album_zero"),
    [data],
  );

  const [song, setSong] = React.useState<null | Song>(null);

  return (
    <Layout>
      <>
        <SEO title={t("music.title")} />
        <Container
          h="calc(100vh - 6rem)"
          maw={768}
          pb={132}
          px={0}
          pos="relative"
        >
          <LoadingOverlay visible={isLoading} />
          <Center h="100%">
            <Stack align="center" py={rem(64)} w="100%">
              {!album && !isLoading && (
                <>
                  <Title order={3}>{t("music.album.unknown")}</Title>
                  <Link to="/music">
                    <Button radius="xl" tt="uppercase">
                      {t("music.album.back_button")}
                    </Button>
                  </Link>
                </>
              )}
              {album && (
                <>
                  <Group
                    align="flex-start"
                    mb="md"
                    noWrap
                    spacing={rem(8)}
                    w="100%"
                  >
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
                          count: album.song_list.filter(
                            (_song) => !!_song.src_path,
                          ).length,
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
                            {_song.src_path ? (
                              <IconPlayerPlay />
                            ) : (
                              <IconCloudOff />
                            )}
                          </ActionIcon>
                        </Group>
                      </React.Fragment>
                    ))}
                  </Stack>
                </>
              )}
            </Stack>
          </Center>
          {album && (
            <Box
              bottom={0}
              left={0}
              maw={rem(1080)}
              mx="auto"
              pb={16}
              pos="fixed"
              px={16}
              right={0}
            >
              <WaveSurferPlayer
                thumbnail={`${process.env.GATSBY_CDN_URL}${album.thumbnail_path}`}
                song={song}
              />
            </Box>
          )}
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
