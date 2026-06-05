"use client";

import { lecturerSearchSuggestions } from "@/lib/utils/constants/data";
import {
  ActionIcon,
  Badge,
  Box,
  Group,
  Popover,
  rem,
  ScrollArea,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
  UnstyledButton,
} from "@mantine/core";
import { IconChevronRight, IconSearch, IconX } from "@tabler/icons-react";
import { useState } from "react";

export default function LecturerSearchBar() {
  const [opened, setOpened] = useState(false);
  const [query, setQuery] = useState("");

  const filtered =
    query.trim().length > 0
      ? lecturerSearchSuggestions
          .map((g) => ({
            ...g,
            items: g.items.filter(
              (i) =>
                i.label.toLowerCase().includes(query.toLowerCase()) ||
                i.sub.toLowerCase().includes(query.toLowerCase()),
            ),
          }))
          .filter((g) => g.items.length > 0)
      : lecturerSearchSuggestions;

  return (
    <Popover
      opened={opened}
      onClose={() => {
        setOpened(false);
        setQuery("");
      }}
      width={400}
      position="bottom-start"
      shadow="lg"
      radius="lg"
      offset={8}
    >
      <Popover.Target>
        <Box onClick={() => setOpened(true)} style={{ cursor: "pointer" }}>
          {opened ? (
            <TextInput
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.currentTarget.value)}
              placeholder="Search classes, students, actions…"
              leftSection={<IconSearch size={15} color="#94a3b8" />}
              rightSection={
                query ? (
                  <ActionIcon
                    size="xs"
                    variant="subtle"
                    color="gray"
                    onClick={() => setQuery("")}
                  >
                    <IconX size={12} />
                  </ActionIcon>
                ) : null
              }
              styles={{
                input: {
                  background: "#f8fafc",
                  border: "2px solid #6366f1",
                  borderRadius: rem(10),
                  fontSize: 13,
                  width: 300,
                },
              }}
            />
          ) : (
            <Group
              gap={10}
              style={{
                background: "#f8fafc",
                borderRadius: rem(10),
                padding: "9px 14px",
                width: 300,
              }}
            >
              <IconSearch size={15} color="#94a3b8" />
              <Text fz={13} c="dimmed">
                Search classes, students…
              </Text>
              <Box style={{ marginLeft: "auto" }}>
                <Badge
                  size="xs"
                  variant="outline"
                  color="gray"
                  radius="sm"
                  style={{ fontFamily: "monospace" }}
                >
                  ⌘K
                </Badge>
              </Box>
            </Group>
          )}
        </Box>
      </Popover.Target>

      <Popover.Dropdown
        p={0}
        style={{ border: "1px solid #e2e8f0", overflow: "hidden" }}
      >
        <ScrollArea.Autosize mah={400}>
          {filtered.length === 0 ? (
            <Box p="lg" ta="center">
              <Text fz={13} c="dimmed">
                No results for "{query}"
              </Text>
            </Box>
          ) : (
            <Stack gap={0} p="xs">
              {filtered.map((group) => (
                <Box key={group.group} mb={4}>
                  <Text
                    fz={10}
                    fw={700}
                    c="dimmed"
                    px={8}
                    py={6}
                    style={{
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {group.group}
                  </Text>
                  {group.items.map((item) => (
                    <UnstyledButton
                      key={item.label}
                      w="100%"
                      px={8}
                      py={8}
                      style={{ borderRadius: rem(8) }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background = "#f1f5f9")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "transparent")
                      }
                      onClick={() => {
                        setOpened(false);
                        setQuery("");
                      }}
                    >
                      <Group gap={10}>
                        <ThemeIcon
                          size={32}
                          radius="md"
                          color="indigo"
                          variant="light"
                        >
                          <item.icon size={15} />
                        </ThemeIcon>
                        <Box>
                          <Text fz={13} fw={500}>
                            {item.label}
                          </Text>
                          <Text fz={11} c="dimmed">
                            {item.sub}
                          </Text>
                        </Box>
                        <IconChevronRight
                          size={13}
                          color="#cbd5e1"
                          style={{ marginLeft: "auto" }}
                        />
                      </Group>
                    </UnstyledButton>
                  ))}
                </Box>
              ))}
            </Stack>
          )}
        </ScrollArea.Autosize>
        <Box
          px="md"
          py={10}
          style={{ borderTop: "1px solid #f1f5f9", background: "#f8fafc" }}
        >
          <Group gap={12}>
            <Text fz={11} c="dimmed">
              <kbd
                style={{
                  fontFamily: "monospace",
                  background: "#e2e8f0",
                  padding: "1px 5px",
                  borderRadius: 4,
                  fontSize: 10,
                }}
              >
                ↵
              </kbd>{" "}
              to select
            </Text>
            <Text fz={11} c="dimmed">
              <kbd
                style={{
                  fontFamily: "monospace",
                  background: "#e2e8f0",
                  padding: "1px 5px",
                  borderRadius: 4,
                  fontSize: 10,
                }}
              >
                Esc
              </kbd>{" "}
              to close
            </Text>
          </Group>
        </Box>
      </Popover.Dropdown>
    </Popover>
  );
}
