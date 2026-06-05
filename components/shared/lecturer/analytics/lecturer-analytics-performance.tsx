"use client";

import { Paper, Text, Box, Progress, Group, Stack, Badge } from "@mantine/core";

export default function LecturerAnalyticsPerformance() {
  const performanceData = [
    { range: "90-100% (Excellent)", count: 34, percentage: 24, color: "green" },
    { range: "80-89% (Good)", count: 45, percentage: 32, color: "blue" },
    {
      range: "70-79% (Satisfactory)",
      count: 38,
      percentage: 27,
      color: "yellow",
    },
    { range: "60-69% (Fair)", count: 18, percentage: 13, color: "orange" },
    {
      range: "Below 60% (Needs Improvement)",
      count: 7,
      percentage: 4,
      color: "red",
    },
  ];

  return (
    <Paper
      radius="lg"
      p="lg"
      shadow="sm"
      style={{ background: "#fff" }}
      mb="xl"
    >
      <Text fw={700} fz={16} c="dark.8" mb="md">
        Student Performance Distribution
      </Text>

      <Stack gap="md">
        {performanceData.map((data) => (
          <Box key={data.range}>
            <Group justify="space-between" mb={8}>
              <Text fz={13} fw={500}>
                {data.range}
              </Text>
              <Group gap={12}>
                <Badge color={data.color} variant="light">
                  {data.count} students
                </Badge>
                <Text fz={13} fw={600} c="dark.8" w={40} ta="right">
                  {data.percentage}%
                </Text>
              </Group>
            </Group>
            <Progress value={data.percentage} color={data.color} size="md" />
          </Box>
        ))}
      </Stack>

      <Group
        justify="space-between"
        mt="xl"
        pt="xl"
        style={{ borderTop: "1px solid var(--mantine-color-gray-2)" }}
      >
        <Box>
          <Text fz={12} c="dimmed">
            Average Performance
          </Text>
          <Text fz={24} fw={800} c="indigo.6">
            75.4%
          </Text>
        </Box>
        <Box>
          <Text fz={12} c="dimmed">
            Median Performance
          </Text>
          <Text fz={24} fw={800} c="blue.6">
            76%
          </Text>
        </Box>
        <Box>
          <Text fz={12} c="dimmed">
            Total Students
          </Text>
          <Text fz={24} fw={800} c="grape.6">
            142
          </Text>
        </Box>
      </Group>
    </Paper>
  );
}
