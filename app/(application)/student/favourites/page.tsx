"use client";

import React, { useMemo, useState } from "react";
import {
  ActionIcon,
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Group,
  Menu,
  Paper,
  Progress,
  RingProgress,
  SimpleGrid,
  Stack,
  Tabs,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";

import {
  IconBookmark,
  IconBook,
  IconClock,
  IconDots,
  IconExternalLink,
  IconFileText,
  IconHeart,
  IconMessageCircle,
  IconPlayerPlay,
  IconSparkles,
  IconStarFilled,
  IconTrash,
  IconTrendingUp,
} from "@tabler/icons-react";

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

interface FavouriteResource {
  id: string;
  title: string;
  type: "pdf" | "video" | "discussion" | "note";
  course: string;
  lecturer: string;
  savedAt: string;
  progress?: number;
  duration?: string;
  description: string;
  tags: string[];
  favoriteLevel: "high" | "medium";
}

interface FavouriteCourse {
  id: string;
  code: string;
  name: string;
  lecturer: string;
  progress: number;
  nextLesson: string;
  resourcesSaved: number;
  performance: number;
  color: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Mock Data
// ─────────────────────────────────────────────────────────────────────────────

const favouriteCourses: FavouriteCourse[] = [
  {
    id: "cs301",
    code: "CS 301",
    name: "Database Systems",
    lecturer: "Dr. Kamau Njoroge",
    progress: 82,
    nextLesson: "Database Indexing",
    resourcesSaved: 12,
    performance: 74,
    color: "teal",
  },
  {
    id: "se201",
    code: "SE 201",
    name: "Software Engineering",
    lecturer: "Ms. Amina Hassan",
    progress: 91,
    nextLesson: "System Design Patterns",
    resourcesSaved: 8,
    performance: 79,
    color: "grape",
  },
  {
    id: "cn201",
    code: "CN 201",
    name: "Computer Networks",
    lecturer: "Prof. James Otieno",
    progress: 58,
    nextLesson: "Routing Protocols",
    resourcesSaved: 5,
    performance: 48,
    color: "blue",
  },
];

const favouriteResources: FavouriteResource[] = [
  {
    id: "1",
    title: "SQL Advanced Joins & Optimization",
    type: "pdf",
    course: "CS 301",
    lecturer: "Dr. Kamau Njoroge",
    savedAt: "2 days ago",
    progress: 72,
    description:
      "Comprehensive guide on SQL joins, optimization strategies, and indexing.",
    tags: ["SQL", "Optimization", "Databases"],
    favoriteLevel: "high",
  },
  {
    id: "2",
    title: "Agile Sprint Planning Session",
    type: "video",
    course: "SE 201",
    lecturer: "Ms. Amina Hassan",
    savedAt: "Yesterday",
    progress: 45,
    duration: "1h 12m",
    description:
      "Recorded sprint planning session covering agile methodologies.",
    tags: ["Agile", "Scrum", "Project Management"],
    favoriteLevel: "high",
  },
  {
    id: "3",
    title: "OSI Model Summary Notes",
    type: "note",
    course: "CN 201",
    lecturer: "Prof. James Otieno",
    savedAt: "5 hours ago",
    progress: 100,
    description:
      "Quick-reference notes for all 7 OSI layers and networking protocols.",
    tags: ["OSI", "Networking", "TCP/IP"],
    favoriteLevel: "medium",
  },
  {
    id: "4",
    title: "Dynamic Programming Discussion",
    type: "discussion",
    course: "CS 302",
    lecturer: "Dr. Kamau Njoroge",
    savedAt: "3 days ago",
    description:
      "Student discussion thread explaining memoization and recursion.",
    tags: ["Algorithms", "DP", "Problem Solving"],
    favoriteLevel: "medium",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

function resourceIcon(type: FavouriteResource["type"]) {
  switch (type) {
    case "pdf":
      return IconFileText;
    case "video":
      return IconPlayerPlay;
    case "discussion":
      return IconMessageCircle;
    case "note":
      return IconBook;
    default:
      return IconBookmark;
  }
}

function resourceColor(type: FavouriteResource["type"]) {
  switch (type) {
    case "pdf":
      return "red";
    case "video":
      return "grape";
    case "discussion":
      return "blue";
    case "note":
      return "teal";
    default:
      return "gray";
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export default function StudentFavouritesPage() {
  const [activeTab, setActiveTab] = useState<string | null>("resources");

  const totalSaved = useMemo(
    () => favouriteResources.length + favouriteCourses.length,
    [],
  );

  const completedResources = useMemo(
    () => favouriteResources.filter((r) => (r.progress ?? 0) >= 100).length,
    [],
  );

  return (
    <Box px={28} py={24}>
      {/* Header */}
      <Group justify="space-between" mb="xl">
        <Group gap={14}>
          <ThemeIcon size={52} radius="xl" color="pink" variant="light">
            <IconHeart size={26} />
          </ThemeIcon>

          <Box>
            <Title
              order={2}
              fw={800}
              fz={30}
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Favourites
            </Title>

            <Text c="dimmed" fz={13}>
              Quickly access your saved courses, materials, and learning
              resources.
            </Text>
          </Box>
        </Group>

        <Button
          radius="xl"
          leftSection={<IconSparkles size={16} />}
          color="grape"
        >
          AI Recommendations
        </Button>
      </Group>

      {/* Stats */}
      <SimpleGrid cols={{ base: 1, md: 3 }} mb="xl">
        <Paper radius="xl" p="lg" shadow="sm">
          <Group justify="space-between">
            <Box>
              <Text c="dimmed" fz={12}>
                Total Saved
              </Text>

              <Text fw={800} fz={30}>
                {totalSaved}
              </Text>
            </Box>

            <ThemeIcon size={54} radius="xl" color="pink" variant="light">
              <IconBookmark size={28} />
            </ThemeIcon>
          </Group>
        </Paper>

        <Paper radius="xl" p="lg" shadow="sm">
          <Group justify="space-between">
            <Box>
              <Text c="dimmed" fz={12}>
                Completed Resources
              </Text>

              <Text fw={800} fz={30}>
                {completedResources}
              </Text>
            </Box>

            <ThemeIcon size={54} radius="xl" color="teal" variant="light">
              <IconTrendingUp size={28} />
            </ThemeIcon>
          </Group>
        </Paper>

        <Paper radius="xl" p="lg" shadow="sm">
          <Group justify="space-between">
            <Box>
              <Text c="dimmed" fz={12}>
                Favorite Courses
              </Text>

              <Text fw={800} fz={30}>
                {favouriteCourses.length}
              </Text>
            </Box>

            <RingProgress
              size={72}
              thickness={7}
              sections={[{ value: 78, color: "grape" }]}
              label={
                <Text ta="center" fw={700} fz={12}>
                  78%
                </Text>
              }
            />
          </Group>
        </Paper>
      </SimpleGrid>

      {/* Tabs */}
      <Tabs value={activeTab} onChange={setActiveTab} radius="xl">
        <Tabs.List mb="lg">
          <Tabs.Tab value="resources" leftSection={<IconBookmark size={14} />}>
            Saved Resources
          </Tabs.Tab>

          <Tabs.Tab value="courses" leftSection={<IconBook size={14} />}>
            Favorite Courses
          </Tabs.Tab>
        </Tabs.List>

        {/* Resources */}
        <Tabs.Panel value="resources">
          <Grid>
            {favouriteResources.map((resource) => {
              const Icon = resourceIcon(resource.type);

              return (
                <Grid.Col span={{ base: 12, lg: 6 }} key={resource.id}>
                  <Card radius="xl" shadow="sm" p="lg">
                    <Group justify="space-between" mb="md">
                      <Group gap={12}>
                        <ThemeIcon
                          size={48}
                          radius="xl"
                          color={resourceColor(resource.type)}
                          variant="light"
                        >
                          <Icon size={22} />
                        </ThemeIcon>

                        <Box>
                          <Text fw={700} fz={15}>
                            {resource.title}
                          </Text>

                          <Group gap={8} mt={4}>
                            <Badge radius="xl" variant="light">
                              {resource.course}
                            </Badge>

                            <Badge
                              radius="xl"
                              color={
                                resource.favoriteLevel === "high"
                                  ? "pink"
                                  : "gray"
                              }
                            >
                              {resource.favoriteLevel} favorite
                            </Badge>
                          </Group>
                        </Box>
                      </Group>

                      <Menu shadow="md" width={180}>
                        <Menu.Target>
                          <ActionIcon variant="subtle" color="gray">
                            <IconDots size={18} />
                          </ActionIcon>
                        </Menu.Target>

                        <Menu.Dropdown>
                          <Menu.Item
                            leftSection={<IconExternalLink size={14} />}
                          >
                            Open Resource
                          </Menu.Item>

                          <Menu.Item leftSection={<IconBookmark size={14} />}>
                            Add to Collection
                          </Menu.Item>

                          <Divider my={4} />

                          <Menu.Item
                            color="red"
                            leftSection={<IconTrash size={14} />}
                          >
                            Remove Favorite
                          </Menu.Item>
                        </Menu.Dropdown>
                      </Menu>
                    </Group>

                    <Text fz={13} c="dimmed" lh={1.8}>
                      {resource.description}
                    </Text>

                    <Group gap={8} mt="md">
                      {resource.tags.map((tag) => (
                        <Badge key={tag} radius="xl" variant="dot" size="sm">
                          {tag}
                        </Badge>
                      ))}
                    </Group>

                    {resource.progress !== undefined && (
                      <Box mt="lg">
                        <Group justify="space-between" mb={6}>
                          <Text fz={12} fw={600}>
                            Progress
                          </Text>

                          <Text fz={12} c="dimmed">
                            {resource.progress}%
                          </Text>
                        </Group>

                        <Progress
                          value={resource.progress}
                          radius="xl"
                          color="grape"
                        />
                      </Box>
                    )}

                    <Group justify="space-between" mt="lg">
                      <Group gap={6}>
                        <IconClock size={14} />

                        <Text fz={12} c="dimmed">
                          Saved {resource.savedAt}
                        </Text>
                      </Group>

                      {resource.duration && (
                        <Badge radius="xl" variant="outline">
                          {resource.duration}
                        </Badge>
                      )}
                    </Group>
                  </Card>
                </Grid.Col>
              );
            })}
          </Grid>
        </Tabs.Panel>

        {/* Courses */}
        <Tabs.Panel value="courses">
          <Grid>
            {favouriteCourses.map((course) => (
              <Grid.Col span={{ base: 12, lg: 4 }} key={course.id}>
                <Card radius="xl" shadow="sm" p="lg">
                  <Group justify="space-between" mb="lg">
                    <Avatar
                      size={56}
                      radius="xl"
                      color={course.color}
                      variant="light"
                    >
                      <IconStarFilled size={24} />
                    </Avatar>

                    <Badge radius="xl" color={course.color}>
                      {course.code}
                    </Badge>
                  </Group>

                  <Text fw={700} fz={18}>
                    {course.name}
                  </Text>

                  <Text c="dimmed" fz={13} mt={4}>
                    {course.lecturer}
                  </Text>

                  <Box mt="lg">
                    <Group justify="space-between" mb={6}>
                      <Text fz={12}>Course Progress</Text>

                      <Text fz={12} fw={700}>
                        {course.progress}%
                      </Text>
                    </Group>

                    <Progress
                      value={course.progress}
                      radius="xl"
                      color={course.color}
                    />
                  </Box>

                  <Stack gap={10} mt="lg">
                    <Paper radius="lg" p="sm" bg="gray.0">
                      <Text fz={11} c="dimmed">
                        Next Lesson
                      </Text>

                      <Text fw={600} fz={13}>
                        {course.nextLesson}
                      </Text>
                    </Paper>

                    <Paper radius="lg" p="sm" bg="gray.0">
                      <Group justify="space-between">
                        <Box>
                          <Text fz={11} c="dimmed">
                            Saved Resources
                          </Text>

                          <Text fw={700}>{course.resourcesSaved}</Text>
                        </Box>

                        <Box ta="right">
                          <Text fz={11} c="dimmed">
                            Performance
                          </Text>

                          <Text fw={700}>{course.performance}%</Text>
                        </Box>
                      </Group>
                    </Paper>
                  </Stack>

                  <Button
                    fullWidth
                    radius="xl"
                    mt="lg"
                    color={course.color}
                    variant="light"
                  >
                    Open Course
                  </Button>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Tabs.Panel>
      </Tabs>
    </Box>
  );
}
