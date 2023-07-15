import { useTranslation } from "react-i18next";
import { Container, Flex, Image, Title, Text, rem } from "@mantine/core";

type TemplateProps = {
  children: React.ReactNode;
};

const Template = ({ children }: TemplateProps) => {
  const { t } = useTranslation();

  return (
    <Container
      h="100%"
      maw={rem(768)}
      pt={rem(96)}
    >
      {children}
      <Title mb="md" mt={rem(64)} order={4} ta="center">
        {t("buy_me_coffee")}
      </Title>
      <Flex gap="lg" justify="center">
        <Flex align="center" direction="column" maw={rem(108)}>
          <Image
            alt="pay_wechat"
            mah={rem(108)}
            maw={rem(108)}
            src="/pay_wechat.jpg"
          />
          <Text c="dimmed" fz="xs">
            {t("pay_wechat")}
          </Text>
        </Flex>
        <Flex align="center" direction="column" maw={rem(108)} pb="sm">
          <Image
            alt="pay_eth"
            mah={rem(108)}
            maw={rem(108)}
            src="/pay_eth.jpg"
          />
          <Text c="dimmed" fz="xs" style={{ wordBreak: "break-all" }}>
            {t("eth")}: 0xB029143abE1Cb60a69A8e4670Ed26949aE213Bc5
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Template;
