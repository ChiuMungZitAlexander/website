import { useTranslation } from "react-i18next";
import {
  Stack,
  Title,
  Group,
  Text,
  Image,
  Code,
  List,
  Anchor,
} from "@mantine/core";

import Badge from "../../../components/badge";
import Template from "../template";

const CODE_BLOCK_1 = `const posX = e.pageX - e.currentTarget.offsetLeft
const posY = e.pageY- e.currentTarget.offsetTop`;

const CODE_BLOCK_2 = `let spanEl = document.createElement('span');
spanEl.className = 'ripple';
e.currentTarget.appendChild(spanEl);`;

const CODE_BLOCK_3 = `.ripple {
  background: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  height: 0;
  opacity: 1;
  position: absolute;
  transform: scale(0);
  width: 0;
}

.ripple-effect {
  animation: ripple-drop .6s linear;
}

@keyframes ripple-drop {
  100% {
    transform: scale(2);
    opacity: 0;
  }
}`;

const Blog20200809 = () => {
  const { t, i18n } = useTranslation();

  return (
    <Template>
      <Stack style={{ overflow: "hidden" }}>
        <Title order={1}>{t("20200809.title")}</Title>
        <Group mb="xs" noWrap>
          <Badge type="tech">{t("tech")}</Badge>
          <Badge type="min_read">2 {t("min_read", { count: 2 })}</Badge>
        </Group>
        <Title order={3}>{t("20200809.sec1.title")}</Title>
        <Image maw={360} mx="auto" src="/blogs/20200809/ripple-effect.gif" />
        <Title order={3}>{t("20200809.sec2.title")}</Title>
        <Text dangerouslySetInnerHTML={{ __html: t("20200809.sec2.p1") }} />
        <Text>{t("20200809.sec2.p2")}</Text>
        {i18n.language === "en" ? (
          <Text>
            v-show is one of the typical directives. Essentially, v-show just
            alters the CSS <Code>{`{ display: none }`}</Code> of DOM, nothing
            more.
          </Text>
        ) : (
          <Text>
            v-show is one of the typical directives. Essentially, v-show just
            alters the CSS <Code>{`{ display: none }`}</Code> of DOM, nothing
            more.
          </Text>
        )}
        <Title order={3}>{t("20200809.sec3.title")}</Title>
        <Title order={4}>{t("20200809.sec3.subtitle1")}</Title>
        <Code block>{CODE_BLOCK_1}</Code>
        <Title order={4}>{t("20200809.sec3.subtitle2")}</Title>
        <Code block>{CODE_BLOCK_2}</Code>
        <Title order={4}>{t("20200809.sec3.subtitle3")}</Title>
        <Code block>{CODE_BLOCK_3}</Code>
        <Anchor
          href="https://codepen.io/alexandermzchiu/pen/NWrrxRy"
          target="_blank"
        >
          Demo
        </Anchor>
        <Title order={3}>{t("20200809.sec5.title")}</Title>
        <List type="ordered">
          <List.Item w="calc(100% - 20px)">{t("20200809.sec5.p1")}</List.Item>
          <List.Item w="calc(100% - 20px)">{t("20200809.sec5.p2")}</List.Item>
        </List>
      </Stack>
    </Template>
  );
};

export default Blog20200809;
