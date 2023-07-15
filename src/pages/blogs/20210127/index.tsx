import { useTranslation } from "react-i18next";
import { Stack, Title, Group, Text, Image } from "@mantine/core";

import Badge from "../../../components/badge";
import Template from "../template";

const Blog20210127 = () => {
  const { t } = useTranslation();

  return (
    <Template>
      <Stack style={{ overflow: "hidden" }}>
        <Title order={1}>{t("20210127.title")}</Title>
        <Group mb="xs" noWrap>
          <Badge type="journal">{t("journal")}</Badge>
          <Badge type="min_read">15 {t("min_read", { count: 15 })}</Badge>
        </Group>
        <Title order={3}>{t("20210127.sec1.title")}</Title>
        <Text>{t("20210127.sec1.p1")}</Text>
        <Text>{t("20210127.sec1.p2")}</Text>
        <Text>{t("20210127.sec1.p3")}</Text>
        <Text>{t("20210127.sec1.p4")}</Text>
        <Text>{t("20210127.sec1.p5")}</Text>
        <Image maw={360} mx="auto" src="/blogs/20210127/kobe.jpg" />
        <Title order={3}>{t("20210127.sec2.title")}</Title>
        <Text>{t("20210127.sec2.p1")}</Text>
        <Text>{t("20210127.sec2.p2")}</Text>
        <Text>{t("20210127.sec2.p3")}</Text>
        <Text>{t("20210127.sec2.p4")}</Text>
        <Text>{t("20210127.sec2.p5")}</Text>
        <Text>{t("20210127.sec2.p6")}</Text>
        <Text>{t("20210127.sec2.p7")}</Text>
        <Text>{t("20210127.sec2.p8")}</Text>
        <Text>{t("20210127.sec2.p9")}</Text>
        <Text>{t("20210127.sec2.p10")}</Text>
        <Title order={3}>{t("20210127.sec3.title")}</Title>
        <Text>{t("20210127.sec3.p1")}</Text>
        <Image maw={360} mx="auto" src="/blogs/20210127/kobe-and-jordan.jpg" />
        <Text>{t("20210127.sec3.p2")}</Text>
        <Text>{t("20210127.sec3.p3")}</Text>
        <Text>{t("20210127.sec3.p4")}</Text>
        <Text>{t("20210127.sec3.p5")}</Text>
        <Text>{t("20210127.sec3.p6")}</Text>
        <Text>{t("20210127.sec3.p7")}</Text>
        <Text>{t("20210127.sec3.p8")}</Text>
        <Text>{t("20210127.sec3.p9")}</Text>
        <Text>{t("20210127.sec3.p10")}</Text>
        <Title order={3}>{t("20210127.sec4.title")}</Title>
        <Text>{t("20210127.sec4.p1")}</Text>
        <Text>{t("20210127.sec4.p2")}</Text>
        <Text>{t("20210127.sec4.p3")}</Text>
        <Text>{t("20210127.sec4.p4")}</Text>
        <Text>{t("20210127.sec4.p5")}</Text>
        <Text>{t("20210127.sec4.p6")}</Text>
        <Text>{t("20210127.sec4.p7")}</Text>
        <Text>{t("20210127.sec4.p8")}</Text>
        <Image
          caption={t("20210127.sec4.caption")}
          maw={360}
          mx="auto"
          src="/blogs/20210127/self.jpg"
        />
      </Stack>
    </Template>
  );
};

export default Blog20210127;
