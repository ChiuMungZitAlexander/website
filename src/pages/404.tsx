import { createStyles, Center, Button, Title, rem } from "@mantine/core";

const useStyles = createStyles(() => ({
  container: {
    flexDirection: "column",
    fontWeight: "bolder",
    height: "100vh",
  },
}));

const Page404 = () => {
  const { classes } = useStyles();

  return (
    <Center className={classes.container}>
      <Title order={1}>An error as occured.</Title>
      <Title order={1} mb={rem(24)}>
        <span>(╯°□°）╯︵ ┻━┻</span>
      </Title>
      <a href="/">
        <Button variant="gradient" gradient={{ from: "indigo", to: "cyan" }}>
          Go back
        </Button>
      </a>
    </Center>
  );
};

export default Page404;
