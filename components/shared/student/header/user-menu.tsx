"use client";

import Link from "next/link";
import { student } from "@/lib/utils/constants";
import {
  Avatar,
  Badge,
  Box,
  Divider,
  Group,
  Menu,
  rem,
  Text,
  ThemeIcon,
  UnstyledButton,
} from "@mantine/core";
import {
  IconBrain,
  IconChartLine,
  IconKey,
  IconLogout,
  IconSettings,
  IconStar,
  IconUser,
} from "@tabler/icons-react";

export default function UserMenu() {
  return (
    <Menu width={260} position="bottom-end" shadow="lg" radius="lg" offset={8}>
      <Menu.Target>
        <UnstyledButton style={{ cursor: "pointer" }}>
          <Group gap={10}>
            <Avatar radius="xl" size={38} color="teal" fw={700}>
              FW
            </Avatar>
            <Box>
              <Text fz={13} fw={600} lh={1.2}>
                {student.name}
              </Text>
              <Text fz={11} c="dimmed">
                {student.reg}
              </Text>
            </Box>
          </Group>
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown style={{ border: "1px solid #e8e8e8" }}>
        {/* Profile header */}
        <Box
          px="md"
          py={14}
          style={{
            background: "linear-gradient(135deg, #e6faf5 0%, #fff 80%)",
            borderBottom: "1px solid #f0f0f0",
          }}
        >
          <Group gap={12}>
            <Avatar size={46} radius="xl" color="teal" fw={700} fz={18}>
              FW
            </Avatar>
            <Box>
              <Text fz={14} fw={700} c="dark.8">
                {student.name}
              </Text>
              <Text fz={11} c="dimmed">
                {student.email}
              </Text>
              <Badge color="teal" size="xs" radius="xl" mt={4}>
                {student.year} · CS
              </Badge>
            </Box>
          </Group>
        </Box>

        <Box py={6}>
          <Menu.Item
            component={Link}
            href="/student/profile"
            leftSection={<IconUser size={15} />}
          >
            My Profile
          </Menu.Item>
          <Menu.Item
            component={Link}
            href="/student/progress"
            leftSection={<IconChartLine size={15} />}
          >
            Performance Overview
          </Menu.Item>
          <Menu.Item
            component={Link}
            href="/student/ai-insights"
            leftSection={<IconBrain size={15} />}
          >
            AI Insights
            <Badge size="xs" color="teal" ml={6}>
              2 new
            </Badge>
          </Menu.Item>
          <Menu.Item
            component={Link}
            href="/student/settings"
            leftSection={<IconKey size={15} />}
          >
            Change Password
          </Menu.Item>
          <Menu.Item
            component={Link}
            href="/student/settings"
            leftSection={<IconSettings size={15} />}
          >
            Account Settings
          </Menu.Item>
        </Box>

        <Divider />

        <Box py={6} px="xs">
          <Group
            px={6}
            py={6}
            gap={8}
            style={{ background: "#f8f9fa", borderRadius: rem(8) }}
          >
            <ThemeIcon size={28} radius="md" color="teal" variant="light">
              <IconStar size={14} />
            </ThemeIcon>
            <Box flex={1}>
              <Text fz={11} fw={600} c="dark.7">
                Overall Grade
              </Text>
              <Text fz={11} c="dimmed">
                {student.overallGrade}/100 — B Grade
              </Text>
            </Box>
          </Group>
        </Box>

        <Divider />

        <Box py={6}>
          <Menu.Item leftSection={<IconLogout size={15} />} color="red">
            Sign Out
          </Menu.Item>
        </Box>
      </Menu.Dropdown>
    </Menu>
  );
}
