"use client";

import { notifications } from "@/lib/utils/constants";
import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Group,
  Indicator,
  Menu,
  ScrollArea,
  Stack,
  Text,
  ThemeIcon,
  UnstyledButton,
} from "@mantine/core";
import { IconBell, IconExternalLink } from "@tabler/icons-react";
import { useState } from "react";

export default function NotificationBell() {
  const [notifs, setNotifs] = useState(notifications);
  const unread = notifs.filter((n) => !n.read).length;

  const markAllRead = () =>
    setNotifs((prev) => prev.map((n) => ({ ...n, read: true })));
  const markRead = (id: number) =>
    setNotifs((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n)),
    );

  return (
    <Menu
      width={360}
      position="bottom-end"
      shadow="lg"
      radius="lg"
      offset={8}
      closeOnItemClick={false}
    >
      <Menu.Target>
        <Box style={{ position: "relative", cursor: "pointer" }}>
          <Indicator
            color="red"
            size={unread > 0 ? 18 : 0}
            offset={4}
            label={unread > 0 ? String(unread) : ""}
            styles={{ indicator: { fontSize: 10, fontWeight: 700 } }}
          >
            <ActionIcon variant="light" color="gray" radius="xl" size="lg">
              <IconBell size={18} />
            </ActionIcon>
          </Indicator>
        </Box>
      </Menu.Target>

      <Menu.Dropdown
        p={0}
        style={{ border: "1px solid #e8e8e8", overflow: "hidden" }}
      >
        {/* Header */}
        <Flex
          align="center"
          justify="space-between"
          px="md"
          py={14}
          style={{ borderBottom: "1px solid #f0f0f0" }}
        >
          <Group gap={8}>
            <Text fw={700} fz={14} c="dark.8">
              Notifications
            </Text>
            {unread > 0 && (
              <Badge color="red" size="sm" circle>
                {unread}
              </Badge>
            )}
          </Group>
          {unread > 0 && (
            <UnstyledButton onClick={markAllRead}>
              <Text fz={12} c="teal.6" fw={500}>
                Mark all read
              </Text>
            </UnstyledButton>
          )}
        </Flex>

        <ScrollArea.Autosize mah={380}>
          <Stack gap={0}>
            {notifs.map((n, i) => (
              <Box key={n.id}>
                <UnstyledButton
                  w="100%"
                  px="md"
                  py={12}
                  onClick={() => markRead(n.id)}
                  style={{
                    background: n.read ? "transparent" : "#f0fdf9",
                    cursor: "pointer",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = n.read
                      ? "#f8f9fa"
                      : "#e6faf5")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = n.read
                      ? "transparent"
                      : "#f0fdf9")
                  }
                >
                  <Group gap={12} align="flex-start">
                    <ThemeIcon
                      size={36}
                      radius="xl"
                      color={n.color}
                      variant="light"
                      mt={2}
                    >
                      <n.icon size={17} />
                    </ThemeIcon>
                    <Box flex={1}>
                      <Group justify="space-between" mb={2}>
                        <Text fz={13} fw={n.read ? 500 : 700} c="dark.8">
                          {n.title}
                        </Text>
                        {!n.read && (
                          <Box
                            style={{
                              width: 7,
                              height: 7,
                              borderRadius: "50%",
                              background: "#00c896",
                              flexShrink: 0,
                              marginTop: 4,
                            }}
                          />
                        )}
                      </Group>
                      <Text fz={12} c="dimmed" lh={1.5} lineClamp={2}>
                        {n.body}
                      </Text>
                      <Text fz={11} c="dimmed" mt={4}>
                        {n.time}
                      </Text>
                    </Box>
                  </Group>
                </UnstyledButton>
                {i < notifs.length - 1 && <Divider />}
              </Box>
            ))}
          </Stack>
        </ScrollArea.Autosize>

        <Box
          px="md"
          py={12}
          style={{ borderTop: "1px solid #f0f0f0", background: "#fafafa" }}
        >
          <Button
            variant="subtle"
            color="teal"
            size="xs"
            fullWidth
            rightSection={<IconExternalLink size={12} />}
          >
            View all notifications
          </Button>
        </Box>
      </Menu.Dropdown>
    </Menu>
  );
}
