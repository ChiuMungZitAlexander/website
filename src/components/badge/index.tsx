import { Badge as MantineBadge, Center, rem } from "@mantine/core";
import { IconCode, IconNotebook, IconEyeglass } from "@tabler/icons-react";

export type BadgeType = "tech" | "journal" | "min_read";

type BadgeProps = {
  type: BadgeType;
  children: React.ReactNode;
};

const Badge = ({ type, children }: BadgeProps) => {
  const getBadgeProperties = () => {
    switch (type) {
      case "tech": {
        return {
          color: "indigo",
          leftSection: (
            <Center>
              <IconCode size={rem(16)} />
            </Center>
          ),
        };
      }
      case "journal": {
        return {
          color: "orange",
          leftSection: (
            <Center>
              <IconNotebook size={rem(16)} />
            </Center>
          ),
        };
      }
      case "min_read": {
        return {
          color: "gray",
          leftSection: (
            <Center>
              <IconEyeglass size={rem(16)} />
            </Center>
          ),
        };
      }
      default: {
        return {};
      }
    }
  };

  return (
    <MantineBadge variant="light" {...getBadgeProperties()}>
      {children}
    </MantineBadge>
  );
};

export default Badge;
