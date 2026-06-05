"use client";

import { classes } from "@/lib/utils/constants/data";
import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Grid,
  Group,
  Paper,
  Progress,
  Text,
  Tooltip,
} from "@mantine/core";
import {
  IconAlertTriangle,
  IconBrain,
  IconChevronRight,
  IconDots,
  IconFileSpreadsheet,
  IconPencil,
  IconUsers,
} from "@tabler/icons-react";
import TrendBadge from "../../student/dashboard/trend-badge";
import { gradeColor } from "@/lib/utils/helpers";

export default function LecturerClassCards() {
  return (
    <Box mb="xl">
      <Group justify="space-between" mb="md">
        <Text fw={700} fz={15} c="dark.8">
          My Classes
        </Text>
        <Button
          size="xs"
          variant="subtle"
          color="indigo"
          rightSection={<IconChevronRight size={13} />}
        >
          View all
        </Button>
      </Group>
      <Grid gap="md">
        {classes.map((cls) => (
          <Grid.Col span={4} key={cls.id}>
            <Paper
              radius="lg"
              p="lg"
              shadow="sm"
              style={{ background: "#fff", height: "100%" }}
            >
              <Group justify="space-between" mb={12}>
                <Badge color="indigo" variant="light" radius="md" size="sm">
                  {cls.code}
                </Badge>
                <Group gap={6}>
                  <TrendBadge trend={cls.trend} />
                  <ActionIcon size="sm" variant="subtle" color="gray">
                    <IconDots size={14} />
                  </ActionIcon>
                </Group>
              </Group>

              <Text fw={700} fz={15} mb={4} c="dark.8" lineClamp={1}>
                {cls.name}
              </Text>

              <Group gap={16} mb={14}>
                <Group gap={4}>
                  <IconUsers size={13} color="#94a3b8" />
                  <Text fz={12} c="dimmed">
                    {cls.students} students
                  </Text>
                </Group>
                <Group gap={4}>
                  <IconAlertTriangle
                    size={13}
                    color={cls.atRisk > 7 ? "#f43f5e" : "#fb923c"}
                  />
                  <Text fz={12} c={cls.atRisk > 7 ? "red" : "orange"}>
                    {cls.atRisk} at risk
                  </Text>
                </Group>
              </Group>

              <Box mb={12}>
                <Group justify="space-between" mb={4}>
                  <Text fz={11} c="dimmed">
                    Class Average
                  </Text>
                  <Text fz={12} fw={700} c={gradeColor(cls.avgScore)}>
                    {cls.avgScore}/100
                  </Text>
                </Group>
                <Progress
                  value={cls.avgScore}
                  color={gradeColor(cls.avgScore)}
                  radius="xl"
                  size="sm"
                />
              </Box>

              <Group justify="space-between" mb={14}>
                <Text fz={11} c="dimmed">
                  Results Published
                </Text>
                <Text fz={11} fw={600}>
                  {cls.published} / {cls.totalAssessments}
                </Text>
              </Group>

              <Group gap={4} mb={16}>
                {cls.structure.map((s) => (
                  <Badge
                    key={s.name}
                    size="xs"
                    variant="outline"
                    color="indigo"
                    radius="xl"
                  >
                    {s.name} {s.weight}%
                  </Badge>
                ))}
              </Group>

              <Group gap={6}>
                <Button
                  size="xs"
                  variant="light"
                  color="indigo"
                  flex={1}
                  leftSection={<IconPencil size={12} />}
                >
                  Enter Marks
                </Button>
                <Tooltip label="Export Excel">
                  <ActionIcon
                    size={30}
                    variant="light"
                    color="teal"
                    radius="md"
                  >
                    <IconFileSpreadsheet size={14} />
                  </ActionIcon>
                </Tooltip>
                <Tooltip label="AI Insights">
                  <ActionIcon
                    size={30}
                    variant="light"
                    color="grape"
                    radius="md"
                  >
                    <IconBrain size={14} />
                  </ActionIcon>
                </Tooltip>
              </Group>
            </Paper>
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
}
