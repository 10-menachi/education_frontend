"use client";

import { courses } from "@/lib/utils/constants/data";
import {
  Badge,
  Box,
  Button,
  Grid,
  Group,
  Paper,
  Stack,
  Text,
  ActionIcon,
  Menu,
  ThemeIcon,
} from "@mantine/core";
import {
  IconDots,
  IconUser,
  IconTrendingUp,
  IconTrendingDown,
  IconEdit,
  IconTrash,
} from "@tabler/icons-react";
import Link from "next/link";

export default function LecturerCoursesList() {
  const calculateCourseScore = (course: Course) => {
    const cat1Score = (course.cat1.score || 0) * (course.cat1.weight / 100);
    const cat2Score = (course.cat2.score || 0) * (course.cat2.weight / 100);
    const examScore = (course.exam.score || 0) * (course.exam.weight / 100);
    return Math.round(cat1Score + cat2Score + examScore);
  };

  return (
    <Box mb="xl">
      <Grid gap="md">
        {courses.map((course) => {
          const courseScore = calculateCourseScore(course);
          const trendColor =
            course.trend === "up"
              ? "green"
              : course.trend === "down"
                ? "red"
                : "gray";
          const TrendIcon =
            course.trend === "up" ? IconTrendingUp : IconTrendingDown;

          return (
            <Grid.Col span={{ base: 12, md: 6 }} key={course.id}>
              <Paper
                radius="lg"
                p="lg"
                shadow="sm"
                style={{ background: "#fff", height: "100%" }}
              >
                <Group justify="space-between" align="flex-start" mb="md">
                  <Box>
                    <Text fw={700} fz={16} c="dark.8" mb={4}>
                      {course.name}
                    </Text>
                    <Group gap={8}>
                      <Badge size="sm" variant="light" color="indigo">
                        {course.code}
                      </Badge>
                      <Badge size="sm" variant="light" color="gray">
                        {course.creditHours} credits
                      </Badge>
                    </Group>
                  </Box>
                  <Menu shadow="md" position="bottom-end">
                    <Menu.Target>
                      <ActionIcon variant="subtle" color="gray" size="lg">
                        <IconDots size={16} />
                      </ActionIcon>
                    </Menu.Target>
                    <Menu.Dropdown>
                      <Menu.Item leftSection={<IconEdit size={14} />}>
                        Edit
                      </Menu.Item>
                      <Menu.Item
                        color="red"
                        leftSection={<IconTrash size={14} />}
                      >
                        Delete
                      </Menu.Item>
                    </Menu.Dropdown>
                  </Menu>
                </Group>

                <Text fz={12} c="dimmed" mb="md" lineClamp={2}>
                  {course.description}
                </Text>

                <Stack gap="sm">
                  <Group justify="space-between" align="center">
                    <Group gap={12}>
                      <Group gap={4}>
                        <IconUser
                          size={16}
                          color="var(--mantine-color-gray-6)"
                        />
                        <Text fz={12} c="dimmed">
                          {course.lecturer}
                        </Text>
                      </Group>
                    </Group>
                    <Group gap={4}>
                      <ThemeIcon
                        size={24}
                        radius="lg"
                        color={trendColor}
                        variant="light"
                      >
                        <TrendIcon size={14} />
                      </ThemeIcon>
                      <Text fz={14} fw={700} c={`${trendColor}.6`}>
                        {courseScore}%
                      </Text>
                    </Group>
                  </Group>

                  <Group justify="space-between">
                    <Text fz={11} c="dimmed">
                      {course.published ? "Published" : "Draft"}
                    </Text>
                    <Button
                      size="xs"
                      variant="subtle"
                      color="indigo"
                      component={Link}
                      href={`/lecturer/courses/${course.id}`}
                    >
                      View Details
                    </Button>
                  </Group>
                </Stack>
              </Paper>
            </Grid.Col>
          );
        })}
      </Grid>
    </Box>
  );
}
