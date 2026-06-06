"use client";

import {
  Badge,
  Box,
  Flex,
  Grid,
  Group,
  Paper,
  Progress,
  Stack,
  Text,
  ThemeIcon,
} from "@mantine/core";
import {
  IconTrendingUp,
  IconTrendingDown,
  IconMinus,
  IconUsers,
} from "@tabler/icons-react";
import { classes } from "@/lib/utils/constants/data";

function TrendBadge({ trend }: { trend: string }) {
  if (trend === "up")
    return (
      <Badge
        color="teal"
        variant="light"
        size="sm"
        leftSection={<IconTrendingUp size={11} />}
      >
        Improving
      </Badge>
    );
  if (trend === "down")
    return (
      <Badge
        color="red"
        variant="light"
        size="sm"
        leftSection={<IconTrendingDown size={11} />}
      >
        Declining
      </Badge>
    );
  return (
    <Badge
      color="gray"
      variant="light"
      size="sm"
      leftSection={<IconMinus size={11} />}
    >
      Stable
    </Badge>
  );
}

function gradeColor(score: number) {
  if (score >= 70) return "teal";
  if (score >= 60) return "blue";
  if (score >= 50) return "yellow";
  return "red";
}

export default function LecturerAIInsightsTrends() {
  const improving = classes.filter((c) => c.trend === "up").length;
  const stable = classes.filter((c) => c.trend === "stable").length;
  const declining = classes.filter((c) => c.trend === "down").length;

  const overallAvg = (
    classes.reduce((a, c) => a + c.avgScore, 0) / classes.length
  ).toFixed(1);

  const totalAtRisk = classes.reduce((a, c) => a + c.atRisk, 0);
  const totalStudents = classes.reduce((a, c) => a + c.students, 0);

  return (
    <Box mb="xl">
      <Text fw={700} fz={15} c="dark.8" mb="md">
        Trend Analysis
      </Text>

      <Grid gap="md" mb="md">
        {/* Overall trend summary */}
        <Grid.Col span={4}>
          <Paper
            radius="lg"
            p="lg"
            shadow="sm"
            style={{ background: "#fff", height: "100%" }}
          >
            <Text
              fz={12}
              fw={700}
              c="dimmed"
              mb="md"
              style={{ textTransform: "uppercase", letterSpacing: "0.06em" }}
            >
              Trend Overview
            </Text>
            <Stack gap="md">
              {[
                {
                  label: "Improving",
                  count: improving,
                  color: "teal",
                  icon: IconTrendingUp,
                },
                {
                  label: "Stable",
                  count: stable,
                  color: "gray",
                  icon: IconMinus,
                },
                {
                  label: "Declining",
                  count: declining,
                  color: "red",
                  icon: IconTrendingDown,
                },
              ].map((t) => (
                <Box key={t.label}>
                  <Flex justify="space-between" align="center" mb={6}>
                    <Group gap={6}>
                      <ThemeIcon
                        size={22}
                        radius="md"
                        color={t.color}
                        variant="light"
                      >
                        <t.icon size={12} />
                      </ThemeIcon>
                      <Text fz={12} fw={600}>
                        {t.label}
                      </Text>
                    </Group>
                    <Badge color={t.color} size="sm">
                      {t.count} {t.count === 1 ? "class" : "classes"}
                    </Badge>
                  </Flex>
                  <Progress
                    value={(t.count / classes.length) * 100}
                    color={t.color}
                    size="sm"
                    radius="xl"
                  />
                </Box>
              ))}
            </Stack>
          </Paper>
        </Grid.Col>

        {/* Per-class breakdown */}
        <Grid.Col span={8}>
          <Paper
            radius="lg"
            p="lg"
            shadow="sm"
            style={{ background: "#fff", height: "100%" }}
          >
            <Text
              fz={12}
              fw={700}
              c="dimmed"
              mb="md"
              style={{ textTransform: "uppercase", letterSpacing: "0.06em" }}
            >
              Class Performance
            </Text>
            <Stack gap="lg">
              {classes.map((cls) => (
                <Box key={cls.id}>
                  <Flex justify="space-between" align="center" mb={8}>
                    <Group gap={10}>
                      <Box>
                        <Group gap={8}>
                          <Text fz={13} fw={700} c="dark.8">
                            {cls.name}
                          </Text>
                          <Badge size="xs" color="indigo" variant="light">
                            {cls.code}
                          </Badge>
                          <TrendBadge trend={cls.trend} />
                        </Group>
                        <Group gap={12} mt={3}>
                          <Group gap={4}>
                            <IconUsers size={11} color="#94a3b8" />
                            <Text fz={11} c="dimmed">
                              {cls.students} students
                            </Text>
                          </Group>
                          <Text fz={11} c="dimmed">
                            {cls.published}/{cls.totalAssessments} published
                          </Text>
                          <Text fz={11} c="red.5">
                            {cls.atRisk} at risk
                          </Text>
                        </Group>
                      </Box>
                    </Group>
                    <Text
                      fz={20}
                      fw={800}
                      c={`${gradeColor(cls.avgScore)}.6`}
                      lh={1}
                    >
                      {cls.avgScore}
                    </Text>
                  </Flex>
                  <Progress
                    value={cls.avgScore}
                    color={gradeColor(cls.avgScore)}
                    size="md"
                    radius="xl"
                  />
                </Box>
              ))}
            </Stack>
          </Paper>
        </Grid.Col>

        {/* Key numbers */}
        {[
          {
            label: "Overall Average",
            value: `${overallAvg}/100`,
            sub: "Across all classes",
            color: "indigo",
          },
          {
            label: "At-Risk Rate",
            value: `${Math.round((totalAtRisk / totalStudents) * 100)}%`,
            sub: `${totalAtRisk} of ${totalStudents} students`,
            color: "red",
          },
          {
            label: "Best Performing",
            value: classes.reduce((a, b) => (a.avgScore > b.avgScore ? a : b))
              .code,
            sub: `Avg ${classes.reduce((a, b) => (a.avgScore > b.avgScore ? a : b)).avgScore}/100`,
            color: "teal",
          },
        ].map((stat) => (
          <Grid.Col span={4} key={stat.label}>
            <Paper
              radius="lg"
              p="lg"
              shadow="sm"
              style={{ background: "#fff", textAlign: "center" }}
            >
              <Text
                fz={10}
                fw={700}
                c="dimmed"
                mb={6}
                style={{ textTransform: "uppercase", letterSpacing: "0.06em" }}
              >
                {stat.label}
              </Text>
              <Text fz={28} fw={800} c={`${stat.color}.6`} lh={1} mb={4}>
                {stat.value}
              </Text>
              <Text fz={11} c="dimmed">
                {stat.sub}
              </Text>
            </Paper>
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
}
