"use client";

import { searchSuggestions } from "@/lib/utils/constants";
import {
  Badge,
  ActionIcon,
  Box,
  Group,
  Popover,
  rem,
  Text,
  TextInput,
  ScrollArea,
  Stack,
  UnstyledButton,
  ThemeIcon,
} from "@mantine/core";
import { IconChevronRight, IconSearch, IconX } from "@tabler/icons-react";
import { useState } from "react";

export default function SearchBar() {
  const [opened, setOpened] = useState(false);
  const [query, setQuery] = useState("");

  const filtered =
    query.trim().length > 0
      ? searchSuggestions
          .map((g) => ({
            ...g,
            items: g.items.filter(
              (i) =>
                i.label.toLowerCase().includes(query.toLowerCase()) ||
                i.sub.toLowerCase().includes(query.toLowerCase()),
            ),
          }))
          .filter((g) => g.items.length > 0)
      : searchSuggestions;

  return (
    <Popover
      opened={opened}
      onClose={() => setOpened(false)}
      width={380}
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
              placeholder="Search courses, assessments…"
              leftSection={<IconSearch size={15} color="#aaa" />}
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
                  background: "#f5f5f5",
                  border: "2px solid #00c896",
                  borderRadius: rem(10),
                  fontSize: 13,
                  width: 280,
                },
              }}
            />
          ) : (
            <Group
              gap={8}
              style={{
                background: "#f5f5f5",
                borderRadius: rem(10),
                padding: "9px 14px",
                width: 280,
              }}
            >
              <IconSearch size={15} color="#aaa" />
              <Text fz={13} c="dimmed">
                Search courses, assessments…
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
        style={{ border: "1px solid #e8e8e8", overflow: "hidden" }}
      >
        {!opened && (
          <TextInput
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.currentTarget.value)}
            placeholder="Search courses, assessments…"
            leftSection={<IconSearch size={15} color="#aaa" />}
            px="md"
            py="sm"
            styles={{
              input: {
                border: "none",
                borderBottom: "1px solid #f0f0f0",
                borderRadius: 0,
                fontSize: 13,
              },
            }}
          />
        )}
        <ScrollArea.Autosize mah={360}>
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
                      style={{ borderRadius: rem(8), cursor: "pointer" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background = "#f8f9fa")
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
                          color="teal"
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
                          color="#ccc"
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
          style={{ borderTop: "1px solid #f5f5f5", background: "#fafafa" }}
        >
          <Text fz={11} c="dimmed">
            Press{" "}
            <kbd
              style={{
                fontFamily: "monospace",
                background: "#eee",
                padding: "1px 5px",
                borderRadius: 4,
              }}
            >
              Esc
            </kbd>{" "}
            to close
          </Text>
        </Box>
      </Popover.Dropdown>
    </Popover>
  );
}
