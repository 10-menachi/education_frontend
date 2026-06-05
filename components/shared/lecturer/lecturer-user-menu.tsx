"use client";

import { classes, lecturer } from "@/lib/utils/constants/data";
import {
  Avatar,
  Badge,
  Box,
  Divider,
  Grid,
  Group,
  Menu,
  rem,
  Text,
  UnstyledButton,
} from "@mantine/core";
import {
  IconBrain,
  IconBuildingCommunity,
  IconHelp,
  IconKey,
  IconLogout,
  IconSettings,
  IconShieldCheck,
  IconUser,
} from "@tabler/icons-react";

export default function LecturerUserMenu() {
  const totalStudents = classes.reduce((a, c) => a + c.students, 0);
  const totalAtRisk = classes.reduce((a, c) => a + c.atRisk, 0);

  return (
    <Menu width={280} position="bottom-end" shadow="lg" radius="lg" offset={8}>
      <Menu.Target>
        <UnstyledButton style={{ cursor: "pointer" }}>
          <Group gap={10}>
            <Avatar size={36} radius="xl" color="indigo">
              {lecturer.avatar}
            </Avatar>
            <Box>
              <Text fz={13} fw={600} lh={1.2}>
                {lecturer.name}
              </Text>
              <Text fz={11} c="dimmed">
                Lecturer
              </Text>
            </Box>
          </Group>
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown style={{ border: "1px solid #e2e8f0" }}>
        {/* Profile header */}
        <Box
          px="md"
          py={14}
          style={{
            background: "linear-gradient(135deg, #eef2ff 0%, #fff 80%)",
            borderBottom: "1px solid #e2e8f0",
          }}
        >
          <Group gap={12}>
            <Avatar size={46} radius="xl" color="indigo" fw={700} fz={18}>
              {lecturer.avatar}
            </Avatar>
            <Box>
              <Text fz={14} fw={700} c="dark.8">
                {lecturer.name}
              </Text>
              <Text fz={11} c="dimmed">
                {lecturer.email}
              </Text>
              <Badge color="indigo" size="xs" radius="xl" mt={4}>
                {lecturer.department}
              </Badge>
            </Box>
          </Group>
        </Box>

        {/* Quick stats */}
        <Box px="md" py={10} style={{ borderBottom: "1px solid #f1f5f9" }}>
          <Grid gap={8}>
            <Grid.Col span={4}>
              <Box
                ta="center"
                p={6}
                style={{ background: "#f8fafc", borderRadius: rem(8) }}
              >
                <Text fz={16} fw={800} c="indigo.6">
                  {classes.length}
                </Text>
                <Text fz={10} c="dimmed">
                  Classes
                </Text>
              </Box>
            </Grid.Col>
            <Grid.Col span={4}>
              <Box
                ta="center"
                p={6}
                style={{ background: "#f8fafc", borderRadius: rem(8) }}
              >
                <Text fz={16} fw={800} c="teal.6">
                  {totalStudents}
                </Text>
                <Text fz={10} c="dimmed">
                  Students
                </Text>
              </Box>
            </Grid.Col>
            <Grid.Col span={4}>
              <Box
                ta="center"
                p={6}
                style={{ background: "#fff5f5", borderRadius: rem(8) }}
              >
                <Text fz={16} fw={800} c="red.6">
                  {totalAtRisk}
                </Text>
                <Text fz={10} c="dimmed">
                  At Risk
                </Text>
              </Box>
            </Grid.Col>
          </Grid>
        </Box>

        <Box py={6}>
          <Menu.Item leftSection={<IconUser size={15} />}>My Profile</Menu.Item>
          <Menu.Item leftSection={<IconBuildingCommunity size={15} />}>
            Department Portal
          </Menu.Item>
          <Menu.Item leftSection={<IconBrain size={15} />}>
            AI Insights
            <Badge size="xs" color="indigo" ml={6}>
              3 new
            </Badge>
          </Menu.Item>
          <Menu.Item leftSection={<IconShieldCheck size={15} />}>
            Privacy & Data
          </Menu.Item>
          <Menu.Item leftSection={<IconKey size={15} />}>
            Change Password
          </Menu.Item>
          <Menu.Item leftSection={<IconSettings size={15} />}>
            Account Settings
          </Menu.Item>
        </Box>

        <Divider />

        <Box py={6}>
          <Menu.Item leftSection={<IconHelp size={15} />} color="gray">
            Help & Documentation
          </Menu.Item>
          <Menu.Item leftSection={<IconLogout size={15} />} color="red">
            Sign Out
          </Menu.Item>
        </Box>
      </Menu.Dropdown>
    </Menu>
  );
}
