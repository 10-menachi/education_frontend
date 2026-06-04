"use client";

import { useMemo } from "react";
import {
  Avatar,
  Badge,
  Box,
  Grid,
  Group,
  Paper,
  Progress,
  Stack,
  Tabs,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconTrendingUp,
  IconTrendingDown,
  IconTarget,
  IconBookmark,
  IconChartBar,
  IconAward,
  IconBolt,
} from "@tabler/icons-react";
import { courses } from "@/lib/utils/constants";
import { gradeLabel, weightedTotal } from "@/lib/utils/helpers";
import StudentProgressPageHeader from "@/components/shared/student/progress/student-progress-page-header";
import KeyMetricsStrip from "@/components/shared/student/progress/key-metrics-strip/key-metrics-strip";

export default function StudentProgressPage() {
  const published = useMemo(() => courses.filter((c) => c.published), []);
  const totals = useMemo(
    () => published.map(weightedTotal).filter(Boolean) as number[],
    [published],
  );
  const avg = useMemo(
    () =>
      totals.length
        ? Math.round(totals.reduce((a, b) => a + b, 0) / totals.length)
        : null,
    [totals],
  );
  const { label: avgLabel, color: avgColor } = gradeLabel(avg);

  const cat1Scores = published
    .map((c) => (c.cat1.score ? (c.cat1.score / c.cat1.max) * 100 : 0))
    .filter((s) => s > 0);
  const cat2Scores = published
    .map((c) => (c.cat2.score ? (c.cat2.score / c.cat2.max) * 100 : 0))
    .filter((s) => s > 0);
  const examScores = published
    .map((c) => (c.exam.score ? (c.exam.score / c.exam.max) * 100 : 0))
    .filter((s) => s > 0);

  const cat1Avg =
    cat1Scores.length > 0
      ? Math.round(cat1Scores.reduce((a, b) => a + b, 0) / cat1Scores.length)
      : 0;
  const cat2Avg =
    cat2Scores.length > 0
      ? Math.round(cat2Scores.reduce((a, b) => a + b, 0) / cat2Scores.length)
      : 0;
  const examAvg =
    examScores.length > 0
      ? Math.round(examScores.reduce((a, b) => a + b, 0) / examScores.length)
      : 0;

  return (
    <Box px={28} py={24}>
      <StudentProgressPageHeader />

      <KeyMetricsStrip
        avg={avg!}
        avgColor={avgColor}
        avgLabel={avgLabel}
        published={published}
        courses={courses}
      />

      {/* Main Content - Tabs */}
      <Tabs defaultValue="overview" color="teal" radius="lg">
        <Tabs.List mb="md">
          <Tabs.Tab value="overview" leftSection={<IconChartBar size={14} />}>
            Overview
          </Tabs.Tab>
          <Tabs.Tab
            value="assessments"
            leftSection={<IconBookmark size={14} />}
          >
            Assessments
          </Tabs.Tab>
          <Tabs.Tab value="trends" leftSection={<IconTrendingUp size={14} />}>
            Trends
          </Tabs.Tab>
        </Tabs.List>

        {/* Overview Tab */}
        <Tabs.Panel value="overview">
          <Grid gap="lg">
            {/* GPA Summary */}
            <Grid.Col span={6}>
              <Paper radius="lg" p="lg" shadow="sm">
                <Text fw={700} fz={14} mb="lg">
                  GPA Breakdown
                </Text>
                <Stack gap="lg">
                  {[
                    { label: "CAT 1 Average", value: cat1Avg, color: "blue" },
                    { label: "CAT 2 Average", value: cat2Avg, color: "teal" },
                    { label: "Exam Average", value: examAvg, color: "cyan" },
                  ].map((item) => (
                    <Box key={item.label}>
                      <Group justify="space-between" mb={6}>
                        <Text fz={13} fw={600}>
                          {item.label}
                        </Text>
                        <Badge color={item.color} size="lg">
                          {item.value}%
                        </Badge>
                      </Group>
                      <Progress
                        value={item.value}
                        color={item.color}
                        size="lg"
                        radius="xl"
                      />
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </Grid.Col>

            {/* Course Performance */}
            <Grid.Col span={6}>
              <Paper radius="lg" p="lg" shadow="sm">
                <Text fw={700} fz={14} mb="lg">
                  Course Performance
                </Text>
                <Stack gap={12}>
                  {published.map((course) => {
                    const total = weightedTotal(course);
                    const { color } = gradeLabel(total);
                    return (
                      <Box key={course.id}>
                        <Group justify="space-between" mb={4}>
                          <Text fz={12} fw={600} lineClamp={1}>
                            {course.code}
                          </Text>
                          <Badge
                            size="sm"
                            color={color}
                            radius="xl"
                            variant="light"
                          >
                            {total}/100
                          </Badge>
                        </Group>
                        <Progress
                          value={total ?? 0}
                          color={color}
                          size="sm"
                          radius="xl"
                        />
                      </Box>
                    );
                  })}
                </Stack>
              </Paper>
            </Grid.Col>

            {/* Course Status */}
            <Grid.Col span={12}>
              <Paper radius="lg" p="lg" shadow="sm">
                <Text fw={700} fz={14} mb="lg">
                  All Courses Overview
                </Text>
                <Grid gap="md">
                  {courses.map((course) => {
                    const total = weightedTotal(course);
                    const { label: gradeL, color } = gradeLabel(total);
                    const completionPct = course.published ? 100 : 66;

                    return (
                      <Grid.Col span={6} key={course.id}>
                        <Paper
                          p="md"
                          radius="md"
                          style={{ background: "#f8f9fa" }}
                        >
                          <Group justify="space-between" mb={10}>
                            <Group gap={10}>
                              <Avatar
                                size={32}
                                radius="md"
                                color="teal"
                                fw={700}
                                fz={12}
                              >
                                {course.code.replace(" ", "")}
                              </Avatar>
                              <Box>
                                <Text fz={12} fw={600}>
                                  {course.name}
                                </Text>
                                <Text fz={10} c="dimmed">
                                  {course.code}
                                </Text>
                              </Box>
                            </Group>
                            <Badge
                              size="sm"
                              color={total !== null ? color : "gray"}
                              radius="xl"
                              variant={total === null ? "outline" : "filled"}
                            >
                              {total !== null
                                ? `${total} · ${gradeL}`
                                : "Pending"}
                            </Badge>
                          </Group>
                          <Progress
                            value={completionPct}
                            color={completionPct === 100 ? "teal" : "yellow"}
                            size="sm"
                            radius="xl"
                            mb={6}
                          />
                          <Text fz={10} c="dimmed">
                            {completionPct === 100
                              ? "Results published"
                              : "Awaiting exam results"}
                          </Text>
                        </Paper>
                      </Grid.Col>
                    );
                  })}
                </Grid>
              </Paper>
            </Grid.Col>
          </Grid>
        </Tabs.Panel>

        {/* Assessments Tab */}
        <Tabs.Panel value="assessments">
          <Grid gap="lg">
            {/* Assessment Breakdown */}
            <Grid.Col span={12}>
              <Paper radius="lg" p="lg" shadow="sm">
                <Text fw={700} fz={14} mb="lg">
                  Assessment Performance by Type
                </Text>
                <Grid gap="lg">
                  {[
                    {
                      title: "CAT 1 Scores",
                      icon: IconBookmark,
                      color: "blue",
                      data: published
                        .filter((c) => c.cat1.score !== null)
                        .map((c) => ({
                          course: c.code,
                          score: c.cat1.score!,
                          max: c.cat1.max,
                        })),
                    },
                    {
                      title: "CAT 2 Scores",
                      icon: IconBookmark,
                      color: "teal",
                      data: published
                        .filter((c) => c.cat2.score !== null)
                        .map((c) => ({
                          course: c.code,
                          score: c.cat2.score!,
                          max: c.cat2.max,
                        })),
                    },
                    {
                      title: "Exam Scores",
                      icon: IconAward,
                      color: "cyan",
                      data: published
                        .filter((c) => c.exam.score !== null)
                        .map((c) => ({
                          course: c.code,
                          score: c.exam.score!,
                          max: c.exam.max,
                        })),
                    },
                  ].map((assessment) => (
                    <Grid.Col span={4} key={assessment.title}>
                      <Paper
                        p="lg"
                        radius="lg"
                        style={{ background: "#f8f9fa" }}
                      >
                        <Group gap={10} mb="lg">
                          <ThemeIcon
                            size={36}
                            radius="md"
                            color={assessment.color}
                            variant="light"
                          >
                            <assessment.icon size={18} />
                          </ThemeIcon>
                          <Box>
                            <Text fz={13} fw={600}>
                              {assessment.title}
                            </Text>
                            <Text fz={11} c="dimmed">
                              {assessment.data.length} results
                            </Text>
                          </Box>
                        </Group>
                        <Stack gap={8}>
                          {assessment.data.map((item) => (
                            <Box key={item.course}>
                              <Group justify="space-between" mb={4}>
                                <Text fz={11} fw={500}>
                                  {item.course}
                                </Text>
                                <Text fz={11} fw={700}>
                                  {item.score}/{item.max}
                                </Text>
                              </Group>
                              <Progress
                                value={(item.score / item.max) * 100}
                                color={assessment.color}
                                size="sm"
                                radius="xl"
                              />
                            </Box>
                          ))}
                        </Stack>
                      </Paper>
                    </Grid.Col>
                  ))}
                </Grid>
              </Paper>
            </Grid.Col>

            {/* Individual Course Breakdown */}
            <Grid.Col span={12}>
              <Paper radius="lg" p="lg" shadow="sm">
                <Text fw={700} fz={14} mb="lg">
                  Detailed Course Assessments
                </Text>
                <Stack gap="md">
                  {published.map((course) => (
                    <Box key={course.id}>
                      <Text fz={12} fw={600} mb={10}>
                        {course.code} — {course.name}
                      </Text>
                      <Grid gap="xs">
                        {[
                          {
                            label: "CAT 1",
                            score: course.cat1.score,
                            max: course.cat1.max,
                            weight: course.cat1.weight,
                          },
                          {
                            label: "CAT 2",
                            score: course.cat2.score,
                            max: course.cat2.max,
                            weight: course.cat2.weight,
                          },
                          {
                            label: "Exam",
                            score: course.exam.score,
                            max: course.exam.max,
                            weight: course.exam.weight,
                          },
                        ].map((item) => {
                          const pct =
                            item.score !== null
                              ? Math.round((item.score / item.max) * 100)
                              : 0;
                          return (
                            <Grid.Col span={4} key={item.label}>
                              <Box>
                                <Group justify="space-between" mb={4}>
                                  <Text fz={11} fw={500}>
                                    {item.label} ({item.weight}%)
                                  </Text>
                                  <Text fz={11} fw={700}>
                                    {item.score !== null
                                      ? `${item.score}/${item.max}`
                                      : "Pending"}
                                  </Text>
                                </Group>
                                <Progress
                                  value={pct}
                                  color={
                                    item.score === null
                                      ? "gray"
                                      : pct >= 70
                                        ? "teal"
                                        : pct >= 50
                                          ? "yellow"
                                          : "red"
                                  }
                                  size="sm"
                                  radius="xl"
                                />
                              </Box>
                            </Grid.Col>
                          );
                        })}
                      </Grid>
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </Grid.Col>
          </Grid>
        </Tabs.Panel>

        {/* Trends Tab */}
        <Tabs.Panel value="trends">
          <Grid gap="lg">
            {/* GPA Trend */}
            <Grid.Col span={12}>
              <Paper radius="lg" p="lg" shadow="sm">
                <Text fw={700} fz={14} mb="lg">
                  GPA Progression
                </Text>
                <Box style={{ height: 300 }}>
                  <Text fz={12} c="dimmed">
                    Your GPA has improved from 65 in January to {avg ?? 70} in
                    May. Keep up the consistent effort!
                  </Text>
                </Box>
              </Paper>
            </Grid.Col>

            {/* Trend Analysis */}
            <Grid.Col span={6}>
              <Paper radius="lg" p="lg" shadow="sm">
                <Text fw={700} fz={14} mb="lg">
                  Performance Trends
                </Text>
                <Stack gap="lg">
                  {[
                    {
                      label: "Improving",
                      count: courses.filter((c) => c.trend === "up").length,
                      color: "teal",
                      icon: IconTrendingUp,
                    },
                    {
                      label: "Stable",
                      count: courses.filter((c) => c.trend === "stable").length,
                      color: "gray",
                      icon: IconBookmark,
                    },
                    {
                      label: "Declining",
                      count: courses.filter((c) => c.trend === "down").length,
                      color: "red",
                      icon: IconTrendingDown,
                    },
                  ].map((trend) => (
                    <Box key={trend.label}>
                      <Group justify="space-between" mb={6}>
                        <Group gap={8}>
                          <ThemeIcon
                            size={28}
                            radius="md"
                            color={trend.color}
                            variant="light"
                          >
                            <trend.icon size={14} />
                          </ThemeIcon>
                          <Text fz={12} fw={600}>
                            {trend.label}
                          </Text>
                        </Group>
                        <Badge color={trend.color} size="lg">
                          {trend.count} {trend.count === 1 ? "unit" : "units"}
                        </Badge>
                      </Group>
                      <Progress
                        value={(trend.count / courses.length) * 100}
                        color={trend.color}
                        size="md"
                        radius="xl"
                      />
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </Grid.Col>

            {/* Grade Distribution */}
            <Grid.Col span={6}>
              <Paper radius="lg" p="lg" shadow="sm">
                <Text fw={700} fz={14} mb="lg">
                  Grade Distribution
                </Text>
                <Stack gap="lg">
                  {[
                    { grade: "A (70+)", count: 2, color: "teal" },
                    { grade: "B (60-69)", count: 1, color: "blue" },
                    { grade: "C (50-59)", count: 0, color: "yellow" },
                    { grade: "D (40-49)", count: 0, color: "orange" },
                    { grade: "E (<40)", count: 0, color: "red" },
                  ].map((item) => (
                    <Box key={item.grade}>
                      <Group justify="space-between" mb={6}>
                        <Text fz={12} fw={600}>
                          {item.grade}
                        </Text>
                        <Badge color={item.color} size="lg">
                          {item.count}
                        </Badge>
                      </Group>
                      <Progress
                        value={(item.count / published.length) * 100 || 0}
                        color={item.color}
                        size="md"
                        radius="xl"
                      />
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </Grid.Col>

            {/* Goals & Recommendations */}
            <Grid.Col span={12}>
              <Paper radius="lg" p="lg" shadow="sm">
                <Text fw={700} fz={14} mb="lg">
                  Recommendations
                </Text>
                <Stack gap="md">
                  <Box
                    p="md"
                    style={{
                      background: "#f0fdf9",
                      border: "1px solid #b2f2e0",
                      borderRadius: "10px",
                    }}
                  >
                    <Group gap={10} mb={6}>
                      <ThemeIcon size={28} radius="md" color="teal">
                        <IconTrendingUp size={14} />
                      </ThemeIcon>
                      <Text fw={700} fz={12}>
                        Maintain Momentum
                      </Text>
                    </Group>
                    <Text fz={12} c="dark.6">
                      You're performing well in Database Systems and Software
                      Engineering. Maintain this consistency across all units.
                    </Text>
                  </Box>

                  <Box
                    p="md"
                    style={{
                      background: "#fff5f5",
                      border: "1px solid #fcd5d5",
                      borderRadius: "10px",
                    }}
                  >
                    <Group gap={10} mb={6}>
                      <ThemeIcon size={28} radius="md" color="red">
                        <IconTrendingDown size={14} />
                      </ThemeIcon>
                      <Text fw={700} fz={12}>
                        Focus on Struggling Units
                      </Text>
                    </Group>
                    <Text fz={12} c="dark.6">
                      Algorithms & Data Structures shows a declining trend.
                      Consider organizing study groups or seeking clarification
                      from your lecturer.
                    </Text>
                  </Box>
                </Stack>
              </Paper>
            </Grid.Col>
          </Grid>
        </Tabs.Panel>
      </Tabs>
    </Box>
  );
}
