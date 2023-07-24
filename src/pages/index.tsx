import * as React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";
import { Box, Flex, Text, Anchor } from "@mantine/core";

import Layout from "@/layouts";

type IndexPageProps = {
  data?: {
    imageSharp: IGatsbyImageData;
  };
};

const IndexPage = ({ data }: IndexPageProps) => {
  const { t } = useTranslation();

  return (
    <Layout>
      <>
        <Flex h="calc(100vh - 72px - 24px)"></Flex>
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
      gatsbyImageData(
        placeholder: BLURRED
        width: 128
        height: 128
      )
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
