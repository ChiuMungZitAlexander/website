import { useState } from "react";
import {
  Container,
  ScrollArea,
  Title,
  Flex,
  Card,
  Image,
  Text,
  ActionIcon,
  AspectRatio,
  createStyles,
  rem,
  useMantineColorScheme,
} from "@mantine/core";
import { IconPlayerPlay } from "@tabler/icons-react";

import WaveSurferPlayer from "../../components/player";

import type { PlayList } from "../../types/playlist";

const ALBUMS = [
  {
    id: "album_0",
    name: "Album 0",
    thumb: "/albums/album_0/thumb.jpg",
    list: [
      {
        title: "Zik Joeng Zeoi Liu",
        src: "/albums/album_0/zik_yoeng_zeoi_liu.mp3",
      },
    ],
    date: "2019-03-21",
  },
];

const useStyles = createStyles((theme) => ({
  container: {
    "&:hover": {
      ".icon-container": {
        display: "block",
      },
    },

    [theme.fn.smallerThan("sm")]: {
      "&": {
        ".icon-container": {
          display: "block !important",
        },
      },
    },
  },

  card: {
    [theme.fn.largerThan("xl")]: {
      width: "calc((100% - 56px) / 8)",
    },
    [theme.fn.largerThan("lg")]: {
      width: "calc((100% - 40px) / 6)",
    },
    [theme.fn.largerThan("sm")]: {
      width: "calc((100% - 24px) / 4)",
    },
    maxWidth: "360px",
    width: "calc((100% - 8px) / 2)",
  },

  iconContainer: {
    display: "none",
    left: "50%",
    opacity: 0.5,
    position: "absolute",
    top: "50%",
    transform: "translate(-50%,-50%)",
  },

  icon: {},
}));

const Music = () => {
  const { theme, classes, cx } = useStyles();
  const { colorScheme } = useMantineColorScheme();

  const [playList] = useState<PlayList>(ALBUMS[0]);

  return (
    <Container maw={rem(1080)} pb={rem(128)} pt={rem(96)}>
      <Title>Music</Title>
      <ScrollArea>
        <Flex gap={rem(8)} pt={rem(32)} wrap="wrap">
          {ALBUMS.map((_album) => (
            <Card
              className={classes.card}
              key={_album.id}
              padding="sm"
              radius="md"
              shadow="sm"
              withBorder
            >
              <Card.Section className={classes.container} pos="relative">
                <AspectRatio m={0} p={0} ratio={1}>
                  <Image alt={_album.name} src={_album.thumb} />
                </AspectRatio>
                <div className={cx(classes.iconContainer, "icon-container")}>
                  <ActionIcon
                    className={classes.icon}
                    size={rem(64)}
                    variant="transparent"
                  >
                    <IconPlayerPlay size={rem(64)} />
                  </ActionIcon>
                </div>
              </Card.Section>
              <Flex direction="column" pt={rem(8)}>
                <Text size="lg" weight={700}>
                  {_album.name}
                </Text>
                <Text color={theme.colors.gray[6]} size="sm">
                  {_album.date}
                </Text>
              </Flex>
            </Card>
          ))}
        </Flex>
      </ScrollArea>
      <Container
        bg={colorScheme === "dark" ? theme.colors.dark[7] : "#fff"}
        bottom={0}
        left={0}
        maw={rem(1080)}
        pb={16}
        pos="fixed"
        px={16}
        right={0}
      >
        <WaveSurferPlayer playlist={playList} />
      </Container>
    </Container>
  );
};

export default Music;
