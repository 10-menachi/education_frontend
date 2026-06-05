"use client";

import {
  Box,
  Grid,
  Paper,
  Text,
  ThemeIcon,
  RingProgress,
  Group,
} from "@mantine/core";
import { IconUsers, IconUserCheck, IconTrendingUp } from "@tabler/icons-react";

export default function LecturerStudentsStats() {
  const stats = [
    {
      label: "Total Students",
      value: "24",
      icon: IconUsers,
      color: "indigo",
    },
    {
      label: "Active",
      value: "22",
      icon: IconUserCheck,
      color: "green",
    },
    {
      label: "Avg. Performance",
      value: "74%",
      icon: IconTrendingUp,
      color: "blue",
    },
  ];

  return (
    <Grid gap="md" mb="xl">
      {stats.map((stat) => (
        <Grid.Col span={{ base: 12, md: 4 }} key={stat.label}>
          <Paper radius="lg" p="lg" shadow="sm" style={{ background: "#fff" }}>
            <Group justify="space-between" align="flex-start">
              <Box>
                <Text fz={12} fw={600} c="dimmed" mb={4}>
                  {stat.label}
                </Text>
                <Text fz={28} fw={800} c={`${stat.color}.6`} lh={1}>
                  {stat.value}
                </Text>
              </Box>
              <ThemeIcon
                size={50}
                radius="lg"
                color={stat.color}
                variant="light"
              >
                <stat.icon size={24} />
              </ThemeIcon>
            </Group>
          </Paper>
        </Grid.Col>
      ))}
    </Grid>
  );
}
