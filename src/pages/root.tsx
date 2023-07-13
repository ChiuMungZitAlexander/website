import {
  createStyles,
  Group,
  ActionIcon,
  Container,
  Flex,
  Burger,
  Image,
  Modal,
  Divider,
  Center,
  rem,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure, useLocalStorage } from "@mantine/hooks";
import {
  IconBrandGithub,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandZhihu,
  IconWorld,
  IconMoon,
  IconSun,
} from "@tabler/icons-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Outlet, useNavigate } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  header: {
    inset: "0 0 auto",
    paddingBottom: rem(4),
    paddingTop: rem(4),
    position: "absolute",
    zIndex: 9999,
  },

  inner: {
    alignItems: "center",
    display: "flex",
    height: rem(64),
    justifyContent: "space-between",
    maxWidth: rem(1080),
  },

  links: {
    width: rem(260),

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  linksInModal: {
    display: "flex",
    flexDirection: "column",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  social: {
    width: rem(260),

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  socialInModal: {
    justifyContent: "center",
    marginBottom: rem(8),
    width: "100%",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    borderRadius: theme.radius.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    display: "block",
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    textDecoration: "none",
    textTransform: "capitalize",

    "&:hover": {
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[2]
          : theme.colors.gray[9],
    },
  },

  linkActive: {
    "&, &:hover": {
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },

  divider: {
    borderColor:
      theme.colorScheme === "dark"
        ? theme.colors.gray[2]
        : theme.colors.gray[6],
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
          : theme.colors.gray[9],
    },
  },

  logo: {
    filter: theme.colorScheme === "dark" ? "invert(100%)" : "none",
  },
}));

const LINKS = [
  {
    key: "about",
    link: "/about",
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

const Root = () => {
  const navigate = useNavigate();
  const [opened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { t, i18n } = useTranslation();
  const [, setValue] = useLocalStorage({
    key: "i18nextLng",
    defaultValue: "zh",
  });

  const onSwitchLang = () => {
    setValue(i18n.language === "en" ? "zh" : "en");
    i18n.changeLanguage(i18n.language === "en" ? "zh" : "en");
  };

  const renderSocialGroup = ({ className }: { className: string }) => (
    <Group className={className} noWrap position="right" spacing={0}>
      <a href="https://github.com/ChiuMungZitAlexander" target="_blank">
        <ActionIcon className={classes.icon} size="lg" variant="transparent">
          <IconBrandGithub size="1.125rem" />
        </ActionIcon>
      </a>
      <a href="https://www.facebook.com/alexandermengzhezhao/" target="_blank">
        <ActionIcon className={classes.icon} size="lg" variant="transparent">
          <IconBrandFacebook size="1.125rem" />
        </ActionIcon>
      </a>
      <a href="https://twitter.com/alexandermzchiu" target="_blank">
        <ActionIcon className={classes.icon} size="lg" variant="transparent">
          <IconBrandTwitter size="1.125rem" />
        </ActionIcon>
      </a>
      <a href="https://www.linkedin.com/in/alexandermzchiu" target="_blank">
        <ActionIcon className={classes.icon} size="lg" variant="transparent">
          <IconBrandLinkedin size="1.125rem" />
        </ActionIcon>
      </a>
      <a
        href="https://www.zhihu.com/people/alexanderchiumungzit"
        target="_blank"
      >
        <ActionIcon className={classes.icon} size="lg" variant="transparent">
          <IconBrandZhihu size="1.125rem" />
        </ActionIcon>
      </a>
      <Divider className={classes.divider} size="xs" orientation="vertical" />
      <ActionIcon className={classes.icon} size="lg" variant="transparent">
        <IconWorld onClick={() => onSwitchLang()} size="1.125rem" />
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
  );

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/about");
    }
  }, [navigate]);

  return (
    <>
      <Container fluid h="100%" p={0} pos="relative">
        <header className={classes.header}>
          <Flex
            align="center"
            h={rem(64)}
            justify="space-between"
            maw={rem(1080)}
            mx="auto"
            px={rem(16)}
          >
            <Group className={classes.links} spacing={5}>
              {LINKS.map((_link) => (
                <a
                  className={cx(classes.link, {
                    [classes.linkActive]: location.href.includes(_link.link),
                  })}
                  key={_link.key}
                  href={_link.link}
                >
                  {t(_link.key)}
                </a>
              ))}
            </Group>
            <Image
              alt="logo"
              className={classes.logo}
              fit="contain"
              height={rem(64)}
              src="/logo.png"
              width="auto"
            />
            {renderSocialGroup({ className: classes.social })}
            <Burger
              className={classes.burger}
              opened={opened}
              onClick={toggle}
              size="sm"
            />
          </Flex>
        </header>
        <main style={{ height: "100%" }}>
          <Outlet />
        </main>
      </Container>
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
      >
        <Flex direction="column" h="100%">
          <Center h="100%">
            <Flex direction="column" gap="md">
              {LINKS.map((_link) => (
                <a
                  className={cx(classes.link, {
                    [classes.linkActive]: location.href.includes(_link.link),
                  })}
                  key={_link.key}
                  href={_link.link}
                >
                  {t(_link.key)}
                </a>
              ))}
            </Flex>
          </Center>
          {renderSocialGroup({ className: classes.socialInModal })}
        </Flex>
      </Modal>
    </>
  );
};

export default Root;
