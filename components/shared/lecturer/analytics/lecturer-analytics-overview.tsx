"use client";

import { Box, Grid, Paper, Text, ThemeIcon, Group } from "@mantine/core";
import {
  IconUsers,
  IconTrendingUp,
  IconClipboardList,
  IconAward,
} from "@tabler/icons-react";

export default function LecturerAnalyticsOverview() {
  const stats = [
    {
      label: "Total Enrollments",
      value: "142",
      icon: IconUsers,
      color: "indigo",
      change: "+12%",
      changeColor: "green",
    },
    {
      label: "Avg. Student Score",
      value: "75.4%",
      icon: IconTrendingUp,
      color: "blue",
      change: "+5.2%",
      changeColor: "green",
    },
    {
      label: "Assignment Submissions",
      value: "89%",
      icon: IconClipboardList,
      color: "grape",
      change: "+3%",
      changeColor: "green",
    },
    {
      label: "Course Completion",
      value: "92%",
      icon: IconAward,
      color: "green",
      change: "+2%",
      changeColor: "green",
    },
  ];

  return (
    <Grid gap="md" mb="xl">
      {stats.map((stat) => (
        <Grid.Col span={{ base: 12, sm: 6, md: 3 }} key={stat.label}>
          <Paper radius="lg" p="lg" shadow="sm" style={{ background: "#fff" }}>
            <Group justify="space-between" align="flex-start">
              <Box>
                <Text fz={12} fw={600} c="dimmed" mb={4}>
                  {stat.label}
                </Text>
                <Text fz={28} fw={800} c={`${stat.color}.6`} lh={1}>
                  {stat.value}
                </Text>
                <Text fz={12} c={`${stat.changeColor}.6`} fw={500} mt={4}>
                  {stat.change} from last period
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
