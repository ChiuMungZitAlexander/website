import * as React from "react";
import { graphql, Script } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";
import {
  Box,
  Flex,
  Text,
  Anchor,
  ActionIcon,
  rem,
  createStyles,
  keyframes,
} from "@mantine/core";
import { useWindowScroll, useViewportSize } from "@mantine/hooks";
import { IconArrowBigDownLine, IconPlayerPlay } from "@tabler/icons-react";

import Layout from "@/layouts";

type IndexPageProps = {
  data?: {
    imageSharp: IGatsbyImageData;
  };
};

const bounce = keyframes({
  "from, 20%, 53%, 80%, to": { transform: "translate3d(0, 0, 0)" },
  "40%, 43%": { transform: "translate3d(0,-10px, 0)" },
  "70%": { transform: "translate3d(0, -8px, 0)" },
  "90%": { transform: "translate3d(0, -2px, 0)" },
});

const useStyles = createStyles(() => ({
  icon: {
    animation: `${bounce} 2s ease-in-out infinite`,
  },

  visible: {
    visibility: "visible",
    opacity: 1,
    transition: "opacity 1s linear",
  },

  hidden: {
    visibility: "hidden",
    opacity: 0,
    transition: "visibility 1s linear, opacity 1s linear",
  },
}));

const IndexPage = ({ data }: IndexPageProps) => {
  const { t } = useTranslation();

  const { height, width } = useViewportSize();
  const [{ y }] = useWindowScroll();
  const { classes, cx } = useStyles();

  const [isMobileDevice, setIsMobileDevice] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const onPlay = () => {
    const dom = document.getElementById("video");
    if (dom) {
      (dom as HTMLVideoElement).play();
    }
  };

  React.useEffect(() => {
    setIsMobileDevice(/Mobi/i.test(navigator.userAgent));
  }, []);

  React.useEffect(() => {
    const dom = document.getElementById("video");

    if (dom) {
      (dom as HTMLVideoElement).addEventListener("play", () => {
        setIsPlaying(true);
      });
    }
  }, []);

  return (
    <Layout fixedHeader headerStyles={{ backgroundColor: "transparent" }}>
      <>
        <Box
          h="100vh"
          left={0}
          pos="absolute"
          right={0}
          style={{ zIndex: 800 }}
          top={0}
          w="100%"
        >
          <Box h="80%" pos="relative">
            {isMobileDevice && !isPlaying && (
              <Box
                left="calc(50% - 32px)"
                pos="absolute"
                top="calc(50% - 32px)"
              >
                <ActionIcon
                  onClick={() => onPlay()}
                  size={rem(64)}
                  variant="transparent"
                >
                  <IconPlayerPlay
                    color="#ffffff"
                    opacity={0.5}
                    size={rem(64)}
                  />
                </ActionIcon>
              </Box>
            )}
            {width / height > 1 ? (
              <video
                autoPlay
                controls={false}
                height="100%"
                id="video"
                loop
                muted
                playsInline
                poster={`${process.env.GATSBY_CDN_URL}/poster_landscape.jpg`}
                style={{
                  objectFit: "cover",
                }}
                width="100%"
              >
                <source
                  src={`${process.env.GATSBY_CDN_URL}/home_landscape.mp4`}
                  type="video/mp4"
                />
              </video>
            ) : (
              <video
                autoPlay
                controls={false}
                height="100%"
                id="video"
                loop
                muted
                playsInline
                poster={`${process.env.GATSBY_CDN_URL}/poster_portrait.jpg`}
                style={{
                  objectFit: "cover",
                }}
                width="100%"
              >
                <source
                  src={`${process.env.GATSBY_CDN_URL}/home_portrait.mp4`}
                  type="video/mp4"
                />
              </video>
            )}
          </Box>
          <Flex align="center" direction="column-reverse" h="20%">
            <IconArrowBigDownLine
              className={cx(
                classes.icon,
                y > 120 ? classes.hidden : classes.visible,
              )}
            />
          </Flex>
        </Box>
        <Flex
          align="center"
          direction="column"
          h="100vh"
          justify="center"
          mt="100vh"
        >
          <Script
            id="first-unique-id"
            dangerouslySetInnerHTML={{
              __html: `if (CSS && 'paintWorklet' in CSS) CSS.paintWorklet.addModule('https://unpkg.com/smooth-corners')`,
            }}
          />

          <GatsbyImage
            alt="avatar"
            image={getImage(data?.imageSharp || null) as IGatsbyImageData}
            imgStyle={{
              display: "block",
              height: "128px",
              maskImage: "paint(smooth-corners)",
              WebkitMaskImage: "paint(smooth-corners)",
              width: "128px",
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              "--smooth-corners": 3,
            }}
            objectFit="cover"
            style={{ marginBottom: rem(16) }}
          />
          <Text
            align="center"
            c="gray.5"
            fw={700}
            lh={1}
            sx={{
              fontSize: "48px",
              "@media (max-width: 48em)": {
                fontSize: "32px",
              },
            }}
          >
            {t("about.intro.1")}
          </Text>
          <Text
            align="center"
            c="gray.5"
            fw={700}
            lh={1}
            mb="md"
            sx={{
              fontSize: "48px",
              "@media (max-width: 48em)": {
                fontSize: "32px",
              },
            }}
          >
            {t("whoami")}
          </Text>
          <Text
            align="center"
            c="gray.6"
            lh={1}
            sx={{
              fontSize: "32px",
              "@media (max-width: 48em)": {
                fontSize: "24px",
              },
            }}
          >
            {t("about.intro.2")}
          </Text>
          <Text
            align="center"
            c="gray.6"
            lh={1.25}
            sx={{
              fontSize: "18px",
              "@media (max-width: 48em)": {
                fontSize: "14px",
              },
            }}
          >
            {t("about.intro.2.sub")}
          </Text>
          <Text
            align="center"
            c="gray.6"
            lh={1}
            sx={{
              fontSize: "32px",
              "@media (max-width: 48em)": {
                fontSize: "24px",
              },
            }}
          >
            {t("about.intro.3")}
          </Text>
        </Flex>
        <Box p={0} my="sm">
          <Text align="center" c="gray.5" fz="xs">
            © 2018-2023 Alexander Zhao. All rights reserved.
          </Text>
          {process.env.GATSBY_SITE_URL === "https://alexanderzhao.net" && (
            <Anchor
              href="https://beian.miit.gov.cn/shouye.html"
              target="_blank"
            >
              <Text align="center" c="gray.5" fz="xs">
                粤ICP备18042140号-1
              </Text>
            </Anchor>
          )}
        </Box>
      </>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query ($language: String!) {
    imageSharp(fixed: { originalName: { eq: "avatar.jpg" } }) {
      gatsbyImageData(placeholder: BLURRED, width: 128, height: 128)
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
