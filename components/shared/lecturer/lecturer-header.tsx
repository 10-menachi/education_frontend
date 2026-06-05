import { Button, Flex, Group, Text } from "@mantine/core";
import LecturerSearchBar from "./dashboard/lecturer-search-bar";
import { IconCirclePlus } from "@tabler/icons-react";
import LecturerNotificationBell from "./dashboard/lecturer-notification-bell";
import LecturerUserMenu from "./lecturer-user-menu";

export default function LecturerHeader() {
  return (
    <Flex
      align="center"
      justify="space-between"
      px={28}
      py={14}
      style={{
        borderBottom: "1px solid #f1f5f9",
        background: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 200,
      }}
    >
      <LecturerSearchBar />
      <Text fz={13} c="dimmed" fw={500}>
        Thursday, 14 May 2026
      </Text>
      <Group gap={12}>
        <Button
          size="xs"
          leftSection={<IconCirclePlus size={14} />}
          variant="filled"
          color="indigo"
          radius="xl"
        >
          New Class
        </Button>
        <LecturerNotificationBell />
        <LecturerUserMenu />
      </Group>
    </Flex>
  );
}
