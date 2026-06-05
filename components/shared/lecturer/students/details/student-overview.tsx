"use client";

import {
  Box,
  Grid,
  Paper,
  Text,
  Group,
  Avatar,
  Stack,
  Badge,
} from "@mantine/core";
import { IconMail, IconPhone, IconMapPin } from "@tabler/icons-react";

interface StudentOverviewProps {
  student: {
    name: string;
    email: string;
    regNumber: string;
    course: string;
    initials: string;
  };
}

export default function StudentOverview({ student }: StudentOverviewProps) {
  return (
    <Grid gap="lg" mb="xl">
      <Grid.Col span={{ base: 12, md: 8 }}>
        <Paper radius="lg" p="lg" shadow="sm" style={{ background: "#fff" }}>
          <Text fw={700} fz={16} c="dark.8" mb="md">
            Student Information
          </Text>
          <Stack gap="md">
            <Group justify="space-between">
              <Text c="dimmed">Email</Text>
              <Text fw={500}>{student.email}</Text>
            </Group>
            <Group justify="space-between">
              <Text c="dimmed">Registration Number</Text>
              <Text fw={500}>{student.regNumber}</Text>
            </Group>
            <Group justify="space-between">
              <Text c="dimmed">Current Course</Text>
              <Text fw={500}>{student.course}</Text>
            </Group>
          </Stack>
        </Paper>
      </Grid.Col>

      <Grid.Col span={{ base: 12, md: 4 }}>
        <Paper radius="lg" p="lg" shadow="sm" style={{ background: "#fff" }}>
          <Text fw={700} fz={16} c="dark.8" mb="md">
            Contact
          </Text>
          <Stack gap="md">
            <Group gap={12}>
              <IconMail size={20} color="var(--mantine-color-indigo-6)" />
              <Box style={{ flex: 1 }}>
                <Text fz={12} c="dimmed">
                  Email
                </Text>
                <Text fw={500} fz={13}>
                  {student.email}
                </Text>
              </Box>
            </Group>
          </Stack>
        </Paper>
      </Grid.Col>
    </Grid>
  );
}
