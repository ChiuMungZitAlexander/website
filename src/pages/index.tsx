import * as React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";
import {
  Box,
  Flex,
  Text,
  Anchor,
  rem,
  createStyles,
  keyframes,
} from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { IconArrowBigDownLine } from "@tabler/icons-react";

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
}));

const IndexPage = ({ data }: IndexPageProps) => {
  const { t } = useTranslation();

  const [{ y }] = useWindowScroll();
  const { classes } = useStyles();

  const [isMobileDevice, setIsMobileDevice] = React.useState(false);

  React.useEffect(() => {
    setIsMobileDevice(/Mobi/i.test(navigator.userAgent));
  }, []);

  return (
    <Layout headerStyles={{ backgroundColor: "transparent" }}>
      <>
        <Box h="100vh" mt={rem(-(72 + 24))} mx={rem(-24)}>
          <video
            autoPlay
            controls={isMobileDevice ? true : false}
            height="80%"
            loop
            muted
            playsInline
            poster="https://picsum.photos/1200"
            style={{
              left: 0,
              objectFit: "cover",
              position: "absolute",
              right: 0,
              top: 0,
            }}
            width="100%"
          >
            <source
              src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
              type="video/mp4"
            />
          </video>
          <Flex align="center" direction="column-reverse" h="100%">
            <IconArrowBigDownLine
              className={classes.icon}
              display={y > 120 ? "none" : "block"}
            />
          </Flex>
        </Box>
        <Flex align="center" direction="column" h="100vh" justify="center">
          <GatsbyImage
            alt="avatar"
            image={getImage(data?.imageSharp || null) as IGatsbyImageData}
            imgStyle={{
              borderRadius: "32px",
              display: "block",
              height: "128px",
              width: "128px",
            }}
            objectFit="cover"
          />
          <Text
            align="center"
            c="gray.5"
            fw={700}
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
