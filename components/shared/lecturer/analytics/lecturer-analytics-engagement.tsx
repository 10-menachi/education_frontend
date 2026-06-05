"use client";

import {
  Grid,
  Paper,
  Text,
  Progress,
  Box,
  Group,
  Stack,
  Badge,
} from "@mantine/core";

export default function LecturerAnalyticsEngagement() {
  const engagementMetrics = [
    {
      label: "Assignment Submission Rate",
      value: 89,
      target: 95,
      color: "orange",
      description: "% of students submitting assignments on time",
    },
    {
      label: "Forum Participation",
      value: 62,
      target: 70,
      color: "blue",
      description: "% of students actively participating in discussions",
    },
    {
      label: "Resource Download Rate",
      value: 78,
      target: 85,
      color: "indigo",
      description: "% of students accessing course materials",
    },
    {
      label: "Quiz Completion Rate",
      value: 94,
      target: 95,
      color: "green",
      description: "% of students completing practice quizzes",
    },
  ];

  return (
    <Grid gap="lg">
      {engagementMetrics.map((metric) => (
        <Grid.Col span={{ base: 12, md: 6 }} key={metric.label}>
          <Paper radius="lg" p="lg" shadow="sm" style={{ background: "#fff" }}>
            <Group justify="space-between" mb="md">
              <Box>
                <Text fw={700} fz={15} c="dark.8">
                  {metric.label}
                </Text>
                <Text fz={12} c="dimmed" mt={4}>
                  {metric.description}
                </Text>
              </Box>
              <Badge color={metric.color} variant="light" size="lg">
                {metric.value}%
              </Badge>
            </Group>

            <Stack gap={8}>
              <Progress
                value={metric.value}
                color={metric.color}
                size="md"
                radius="md"
              />
              <Group justify="space-between">
                <Text fz={12} c="dimmed">
                  Current: {metric.value}%
                </Text>
                <Text fz={12} c="dimmed">
                  Target: {metric.target}%
                </Text>
              </Group>
            </Stack>

            {metric.value < metric.target && (
              <Text fz={12} c="orange.6" fw={500} mt="md">
                ⚠ Below target by {metric.target - metric.value}%
              </Text>
            )}
          </Paper>
        </Grid.Col>
      ))}
    </Grid>
  );
}
