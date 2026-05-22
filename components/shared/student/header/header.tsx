import { Flex, Group, Text } from "@mantine/core";
import SearchBar from "./search-bar";
import NotificationBell from "./notification-bell";
import UserMenu from "./user-menu";

export default function Header() {
  return (
    <Flex
      align="center"
      justify="space-between"
      px={28}
      py={14}
      style={{
        borderBottom: "1px solid #f0f0f0",
        background: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 200,
      }}
    >
      <SearchBar />
      <Text fz={13} c="dimmed">
        Thursday, 14 May 2026
      </Text>
      <Group gap={12}>
        <NotificationBell />
        <UserMenu />
      </Group>
    </Flex>
  );
}
