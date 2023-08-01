import * as React from "react";
import { Link, useTranslation, useI18next } from "gatsby-plugin-react-i18next";
import { StaticImage } from "gatsby-plugin-image";
import {
  AppShell,
  Portal,
  Container,
  Group,
  Text,
  ActionIcon,
  Divider,
  Burger,
  Affix,
  Transition,
  Modal,
  Flex,
  rem,
  createStyles,
  useMantineColorScheme,
  type CSSObject,
} from "@mantine/core";
import { useDisclosure, useMediaQuery, useWindowScroll } from "@mantine/hooks";
import {
  IconBrandGithub,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandZhihu,
  IconLanguage,
  IconMoon,
  IconSun,
  IconArrowUp,
  IconArrowBack,
} from "@tabler/icons-react";

import type { SingleNode } from "@/types/node";

const LINKS = [
  {
    key: "about",
    link: "/",
  },
  {
    key: "blogs",
    link: "/blogs",
  },
  {
    key: "music",
    link: "/music",
  },
];

const useStyles = createStyles((theme) => ({
  linkActive: {
    "&>span, &>span:hover": {
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },

  logo: {
    filter: theme.colorScheme === "dark" ? "invert(100%)" : "none",
  },

  divider: {
    borderColor:
      theme.colorScheme === "dark"
        ? theme.colors.gray[0]
        : theme.colors.gray[7],
    margin: `${rem(8)} ${rem(4)}`,
  },

  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[2]
          : theme.colors.gray[6],
    },
  },
}));

type LayoutProps = SingleNode & {
  headerStyles?: CSSObject;
  goBackPath?: string;
  fixedHeader?: boolean;
  showScrollToTop?: boolean;
};

export const MAX_WIDTH = 1440;
export const HEADER_HEIGHT = 72;
const HEADER_ROOM = 120;

const Layout = ({
  children,
  headerStyles,
  goBackPath,
  fixedHeader = false,
  showScrollToTop = true,
}: LayoutProps) => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { classes } = useStyles();

  const [opened, { toggle }] = useDisclosure(false);
  const [{ y }, scrollTo] = useWindowScroll();

  const { t } = useTranslation();
  const { language, changeLanguage } = useI18next();

  const lastScrollTop = React.useRef(0);

  const [pinned, setPinned] = React.useState(true);

  React.useEffect(() => {
    if (y <= HEADER_ROOM) {
      setPinned(true);
      lastScrollTop.current = y <= 0 ? 0 : y;
      return;
    }

    if (y > lastScrollTop.current) {
      setPinned(false);
    } else if (y < lastScrollTop.current) {
      setPinned(true);
    }

    lastScrollTop.current = y <= 0 ? 0 : y;
  }, [y]);

  return (
    <AppShell
      header={
        <Portal>
          {isSmallScreen && (
            <Container
              h={rem(HEADER_HEIGHT)}
              left={0}
              px="lg"
              py="md"
              pos="fixed"
              right={0}
              sx={(theme) => ({
                alignItems: "center",
                backgroundColor:
                  theme.colorScheme === "dark" ? theme.colors.dark[7] : "#fff",
                display: "flex",
                justifyContent: "space-between",
                transform: fixedHeader
                  ? "none"
                  : `translate3d(0, ${pinned ? 0 : rem(-110)}, 0)`,
                transition: "transform 400ms ease",
                zIndex: 1900,
                ...headerStyles,
              })}
              top={0}
            >
              <StaticImage
                alt="logo"
                className={classes.logo}
                height={64}
                objectFit="contain"
                placeholder="blurred"
                src="../images/logo.png"
              />
              <Burger opened={opened} onClick={toggle} size="sm" />
              <Modal
                fullScreen
                onClose={close}
                opened={opened}
                styles={{
                  body: {
                    height: "100%",
                    padding: 0,
                  },
                }}
                transitionProps={{ transition: "fade", duration: 200 }}
                withCloseButton={false}
                zIndex={1300}
              >
                <Flex align="center" direction="column" h="100%" pb="lg">
                  <Flex
                    align="center"
                    direction="column"
                    gap="md"
                    justify="center"
                    style={{ flex: 1 }}
                  >
                    {LINKS.map((_link) => (
                      <Link
                        activeClassName={classes.linkActive}
                        key={_link.key}
                        partiallyActive={_link.link !== "/"}
                        to={_link.link}
                      >
                        <Text
                          component="span"
                          fz="sm"
                          fw={500}
                          lh={1}
                          px={rem(8)}
                          py={rem(12)}
                          sx={(theme) => ({
                            color:
                              theme.colorScheme === "dark"
                                ? theme.colors.dark[0]
                                : theme.colors.gray[7],
                            "&:hover": {
                              color:
                                theme.colorScheme === "dark"
                                  ? theme.colors.dark[2]
                                  : theme.colors.gray[9],
                            },
                          })}
                          td="none"
                          tt="capitalize"
                        >
                          {t(_link.key)}
                        </Text>
                      </Link>
                    ))}
                  </Flex>
                  <Group noWrap position="right" spacing="xs">
                    <a
                      href="https://github.com/ChiuMungZitAlexander"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <ActionIcon
                        className={classes.icon}
                        size="lg"
                        variant="transparent"
                      >
                        <IconBrandGithub size="1.125rem" />
                      </ActionIcon>
                    </a>
                    <a
                      href="https://www.facebook.com/alexandermengzhezhao/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <ActionIcon
                        className={classes.icon}
                        size="lg"
                        variant="transparent"
                      >
                        <IconBrandFacebook size="1.125rem" />
                      </ActionIcon>
                    </a>
                    <a
                      href="https://twitter.com/alexandermzchiu"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <ActionIcon
                        className={classes.icon}
                        size="lg"
                        variant="transparent"
                      >
                        <IconBrandTwitter size="1.125rem" />
                      </ActionIcon>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/alexandermzchiu"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <ActionIcon
                        className={classes.icon}
                        size="lg"
                        variant="transparent"
                      >
                        <IconBrandLinkedin size="1.125rem" />
                      </ActionIcon>
                    </a>
                    <a
                      href="https://www.zhihu.com/people/alexanderchiumungzit"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <ActionIcon
                        className={classes.icon}
                        size="lg"
                        variant="transparent"
                      >
                        <IconBrandZhihu size="1.125rem" />
                      </ActionIcon>
                    </a>
                    <Divider
                      className={classes.divider}
                      size="xs"
                      orientation="vertical"
                    />
                    <ActionIcon
                      className={classes.icon}
                      size="lg"
                      variant="transparent"
                    >
                      <IconLanguage
                        onClick={() =>
                          changeLanguage(
                            language === "en" ? "zh" : "en",
                            undefined,
                            { replace: true },
                          )
                        }
                        size="1.125rem"
                      />
                    </ActionIcon>
                    <ActionIcon
                      className={classes.icon}
                      onClick={() => {
                        toggleColorScheme();
                        toggle();
                      }}
                      size="lg"
                      variant="transparent"
                    >
                      {colorScheme === "dark" ? (
                        <IconSun size="1.125rem" />
                      ) : (
                        <IconMoon size="1.125rem" />
                      )}
                    </ActionIcon>
                  </Group>
                </Flex>
              </Modal>
            </Container>
          )}
          {!isSmallScreen && (
            <Container
              h={rem(HEADER_HEIGHT)}
              left={0}
              maw={rem(MAX_WIDTH)}
              py="md"
              pos="fixed"
              right={0}
              sx={(theme) => ({
                alignItems: "center",
                backgroundColor:
                  theme.colorScheme === "dark" ? theme.colors.dark[7] : "#fff",
                display: "flex",
                justifyContent: "space-between",
                transform: fixedHeader
                  ? "none"
                  : `translate3d(0, ${pinned ? 0 : rem(-110)}, 0)`,
                transition: "transform 400ms ease",
                zIndex: 1900,
                ...headerStyles,
              })}
              top={0}
            >
              <Group p={0} spacing="sm" w={250}>
                {LINKS.map((_link) => (
                  <Link
                    activeClassName={classes.linkActive}
                    key={_link.key}
                    partiallyActive={_link.link !== "/"}
                    to={_link.link}
                  >
                    <Text
                      component="span"
                      fz="sm"
                      fw={500}
                      lh={1}
                      px={rem(8)}
                      py={rem(12)}
                      sx={(theme) => ({
                        color:
                          theme.colorScheme === "dark"
                            ? theme.colors.dark[0]
                            : theme.colors.gray[7],
                        "&:hover": {
                          color:
                            theme.colorScheme === "dark"
                              ? theme.colors.dark[2]
                              : theme.colors.gray[9],
                        },
                      })}
                      td="none"
                      tt="capitalize"
                    >
                      {t(_link.key)}
                    </Text>
                  </Link>
                ))}
              </Group>
              <StaticImage
                alt="logo"
                className={classes.logo}
                height={64}
                objectFit="contain"
                placeholder="blurred"
                src="../images/logo.png"
              />
              <Group noWrap position="right" spacing={0} w={250}>
                <a
                  href="https://github.com/ChiuMungZitAlexander"
                  rel="noreferrer"
                  target="_blank"
                >
                  <ActionIcon
                    className={classes.icon}
                    size="lg"
                    variant="transparent"
                  >
                    <IconBrandGithub size="1.125rem" />
                  </ActionIcon>
                </a>
                <a
                  href="https://www.facebook.com/alexandermengzhezhao/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <ActionIcon
                    className={classes.icon}
                    size="lg"
                    variant="transparent"
                  >
                    <IconBrandFacebook size="1.125rem" />
                  </ActionIcon>
                </a>
                <a
                  href="https://twitter.com/alexandermzchiu"
                  rel="noreferrer"
                  target="_blank"
                >
                  <ActionIcon
                    className={classes.icon}
                    size="lg"
                    variant="transparent"
                  >
                    <IconBrandTwitter size="1.125rem" />
                  </ActionIcon>
                </a>
                <a
                  href="https://www.linkedin.com/in/alexandermzchiu"
                  rel="noreferrer"
                  target="_blank"
                >
                  <ActionIcon
                    className={classes.icon}
                    size="lg"
                    variant="transparent"
                  >
                    <IconBrandLinkedin size="1.125rem" />
                  </ActionIcon>
                </a>
                <a
                  href="https://www.zhihu.com/people/alexanderchiumungzit"
                  rel="noreferrer"
                  target="_blank"
                >
                  <ActionIcon
                    className={classes.icon}
                    size="lg"
                    variant="transparent"
                  >
                    <IconBrandZhihu size="1.125rem" />
                  </ActionIcon>
                </a>
                <Divider
                  className={classes.divider}
                  size="xs"
                  orientation="vertical"
                />
                <ActionIcon
                  className={classes.icon}
                  size="lg"
                  variant="transparent"
                >
                  <IconLanguage
                    onClick={() =>
                      changeLanguage(
                        language === "en" ? "zh" : "en",
                        undefined,
                        { replace: true },
                      )
                    }
                    size="1.125rem"
                  />
                </ActionIcon>
                <ActionIcon
                  className={classes.icon}
                  onClick={() => toggleColorScheme()}
                  size="lg"
                  variant="transparent"
                >
                  {colorScheme === "dark" ? (
                    <IconSun size="1.125rem" />
                  ) : (
                    <IconMoon size="1.125rem" />
                  )}
                </ActionIcon>
              </Group>
            </Container>
          )}
        </Portal>
      }
      px="xl"
      py={0}
      styles={{
        main: {
          padding: 0,
          width: "100%",
        },
      }}
    >
      <Container maw={rem(MAX_WIDTH)} pt={rem(72 + 24)} p={0}>
        {children}
      </Container>
      <Affix position={{ bottom: rem(32), right: rem(32) }}>
        <Transition mounted={y > 0} transition="slide-up">
          {(transitionStyles) => (
            <>
              {!!goBackPath && (
                <Link to={goBackPath}>
                  <ActionIcon
                    color="primary"
                    mb="lg"
                    radius="xl"
                    size="lg"
                    style={transitionStyles}
                    variant="filled"
                  >
                    <IconArrowBack size="1.125rem" />
                  </ActionIcon>
                </Link>
              )}
              {showScrollToTop && (
                <ActionIcon
                  color="primary"
                  onClick={() => scrollTo({ y: 0 })}
                  radius="xl"
                  size="lg"
                  style={transitionStyles}
                  variant="filled"
                >
                  <IconArrowUp size="1.125rem" />
                </ActionIcon>
              )}
            </>
          )}
        </Transition>
      </Affix>
    </AppShell>
  );
};

export default Layout;
