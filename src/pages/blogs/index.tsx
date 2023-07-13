import { useTranslation } from "react-i18next";
import { Container, Title, Flex, Image, Text, rem } from "@mantine/core";

const Blogs = () => {
  const { t } = useTranslation();

  return (
    <Container h="100%" maw={rem(1080)} pt={rem(96)}>
      <Title order={3} transform="capitalize">
        {t("blogs")}
      </Title>
      <Flex direction="column" h="max-content" justify="center" pt={rem(192)}>
        <Image
          alt="coming_soon"
          maw={144}
          mx="auto"
          src="/coming_soon_placeholder.png"
        />
        <Text
          fw={700}
          fz="xl"
          gradient={{ from: "indigo", to: "cyan", deg: 45 }}
          ta="center"
          variant="gradient"
        >
          {t("coming_soon")}
        </Text>
      </Flex>
    </Container>
  );
};

export default Blogs;
