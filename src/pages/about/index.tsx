import { useEffect, useState } from "react";
import {
  createStyles,
  keyframes,
  Container,
  Flex,
  Title,
  Center,
  Text,
  Avatar,
  rem,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

const bounce = keyframes({
  "from, 20%, 53%, 80%, to": { transform: "translate3d(0, 0, 0)" },
  "40%, 43%": { transform: "translate3d(0, -1.875rem, 0)" },
  "70%": { transform: "translate3d(0, -0.9375rem, 0)" },
  "90%": { transform: "translate3d(0, -0.25rem, 0)" },
});

const useStyles = createStyles((theme) => ({
  video: {
    backgroundColor: theme.colors.gray[2],
    height: "100%",
    inset: 0,
    objectFit: "cover",
    objectPosition: "50% 50%",
    position: "absolute",
    width: "100%",

    [theme.fn.largerThan("lg")]: {
      objectPosition: "50% 30%",
    },

    [theme.fn.largerThan("xl")]: {
      objectPosition: "55% 20%",
    },
  },

  tip: {
    animation: `${bounce} 2s ease-in-out infinite`,
  },
}));

const About = () => {
  const { t } = useTranslation();
  const { classes, theme } = useStyles();
  const isMobile = useMediaQuery("(max-width: 48em)");

  const [videoSrc, setVideoSrc] = useState("/home_mobile.mp4");

  useEffect(() => {
    const video = document.getElementById("video") as HTMLVideoElement;
    if (!video) {
      return;
    }

    video?.play();
  }, []);

  useEffect(() => {
    if (isMobile) {
      setVideoSrc("/home_mobile.mp4");
      return;
    }

    setVideoSrc("/home.webm");
  }, [isMobile]);

  return (
    <Container fluid p={0}>
      <Container fluid h="80vh" p={0} pos="relative">
        <video
          autoPlay
          className={classes.video}
          id="video"
          loop
          muted
          onContextMenu={() => false}
          playsInline
          preload="auto"
          x5-video-player-type="h5"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </Container>
      <Flex
        className={classes.tip}
        direction="column"
        h="20vh"
        justify="flex-end"
      >
        <Title order={3} ta="center" transform="capitalize">
          {t("more")}
        </Title>
        <Title ta="center">
          <IconChevronDown size="2.125rem" />
        </Title>
      </Flex>
      <Center h="100vh">
        <Flex align="center" direction="column">
          <Avatar alt="avatar" radius={32} size={128} src="/avatar.jpeg" />
          <Text
            align="center"
            c={theme.colors.gray[5]}
            fw={700}
            fz={rem(isMobile ? 32 : 48)}
          >
            {t("intro_1")}
          </Text>
          <Text
            align="center"
            c={theme.colors.gray[6]}
            fz={isMobile ? rem(24) : rem(32)}
          >
            {t("intro_2")}
          </Text>
          <Text
            align="center"
            c={theme.colors.gray[6]}
            fz={isMobile ? rem(24) : rem(32)}
          >
            {t("intro_3")}
          </Text>
        </Flex>
      </Center>
      <Text align="center" c={theme.colors.gray[5]} fz="xs">
        © 2018-2023 Alexander Zhao. All rights reserved.
      </Text>
      {import.meta.env.VITE_SHOW_SITE_REGISTRATION && (
        <a href="https://beian.miit.gov.cn/shouye.html" target="_blank">
          <Text align="center" c={theme.colors.gray[5]} fz="xs" mb={rem(8)}>
            粤ICP备18042140号-1
          </Text>
        </a>
      )}
    </Container>
  );
};

export default About;
