"use client";

import { notifications } from "@/lib/utils/constants/data";
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
import { IconBell, IconExternalLink, IconX } from "@tabler/icons-react";
import { useState } from "react";

export default function LecturerNotificationBell() {
  const [notifs, setNotifs] = useState(notifications);
  const unread = notifs.filter((n) => !n.read).length;

  const markAllRead = () =>
    setNotifs((prev) => prev.map((n) => ({ ...n, read: true })));
  const markRead = (id: number) =>
    setNotifs((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n)),
    );
  const dismiss = (id: number) =>
    setNotifs((prev) => prev.filter((n) => n.id !== id));

  return (
    <Menu
      width={380}
      position="bottom-end"
      shadow="lg"
      radius="lg"
      offset={8}
      closeOnItemClick={false}
    >
      <Menu.Target>
        <Box style={{ cursor: "pointer" }}>
          <Indicator
            color="red"
            size={unread > 0 ? 18 : 0}
            offset={4}
            label={unread > 0 ? String(unread) : ""}
            styles={{ indicator: { fontSize: 10, fontWeight: 700 } }}
          >
            <ActionIcon variant="light" color="gray" radius="xl" size="lg">
              <IconBell size={17} />
            </ActionIcon>
          </Indicator>
        </Box>
      </Menu.Target>

      <Menu.Dropdown
        p={0}
        style={{ border: "1px solid #e2e8f0", overflow: "hidden" }}
      >
        {/* Header */}
        <Flex
          align="center"
          justify="space-between"
          px="md"
          py={14}
          style={{ borderBottom: "1px solid #f1f5f9" }}
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
              <Text fz={12} c="indigo.5" fw={500}>
                Mark all read
              </Text>
            </UnstyledButton>
          )}
        </Flex>

        <ScrollArea.Autosize mah={400}>
          <Stack gap={0}>
            {notifs.map((n, i) => (
              <Box key={n.id}>
                <Box
                  px="md"
                  py={12}
                  onClick={() => markRead(n.id)}
                  style={{
                    background: n.read ? "transparent" : "#eef2ff",
                    cursor: "pointer",
                    transition: "background 0.15s",
                    position: "relative",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLDivElement).style.background =
                      n.read ? "#f8fafc" : "#e0e7ff")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLDivElement).style.background =
                      n.read ? "transparent" : "#eef2ff")
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
                      <Group justify="space-between" mb={2} align="flex-start">
                        <Text
                          fz={13}
                          fw={n.read ? 500 : 700}
                          c="dark.8"
                          style={{ flex: 1, paddingRight: 8 }}
                        >
                          {n.title}
                        </Text>
                        <Group gap={4}>
                          {!n.read && (
                            <Box
                              style={{
                                width: 7,
                                height: 7,
                                borderRadius: "50%",
                                background: "#6366f1",
                                flexShrink: 0,
                                marginTop: 4,
                              }}
                            />
                          )}
                          <ActionIcon
                            size="xs"
                            variant="subtle"
                            color="gray"
                            onClick={(e) => {
                              e.stopPropagation();
                              dismiss(n.id);
                            }}
                          >
                            <IconX size={11} />
                          </ActionIcon>
                        </Group>
                      </Group>
                      <Text fz={12} c="dimmed" lh={1.5} lineClamp={2}>
                        {n.body}
                      </Text>
                      <Text fz={11} c="dimmed" mt={4}>
                        {n.time}
                      </Text>
                    </Box>
                  </Group>
                </Box>
                {i < notifs.length - 1 && <Divider />}
              </Box>
            ))}
            {notifs.length === 0 && (
              <Box p="xl" ta="center">
                <ThemeIcon
                  size={40}
                  radius="xl"
                  color="gray"
                  variant="light"
                  mx="auto"
                  mb={8}
                >
                  <IconBell size={20} />
                </ThemeIcon>
                <Text fz={13} c="dimmed">
                  All caught up!
                </Text>
              </Box>
            )}
          </Stack>
        </ScrollArea.Autosize>

        <Box
          px="md"
          py={12}
          style={{ borderTop: "1px solid #f1f5f9", background: "#f8fafc" }}
        >
          <Button
            variant="subtle"
            color="indigo"
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
