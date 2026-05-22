"use client";

import React, { useState } from "react";
import {
  Avatar,
  Badge,
  Box,
  Breadcrumbs,
  Button,
  Divider,
  Group,
  Progress,
  rem,
  RingProgress,
  Stack,
  Tabs,
  Text,
  ThemeIcon,
  Title,
  Paper,
  Modal,
} from "@mantine/core";
import {
  IconAlertTriangle,
  IconBook,
  IconChartBar,
  IconCheck,
  IconChevronLeft,
  IconFileText,
  IconFolderOpen,
  IconDownload,
  IconPlayerPlay,
  IconExternalLink,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";

// ─── Types ────────────────────────────────────────────────────────────────────

type ComponentScore = { score: number | null; max: number; weight: number };

interface Course {
  id: string;
  code: string;
  name: string;
  lecturer: string;
  lecturerInitials: string;
  cat1: ComponentScore;
  cat2: ComponentScore;
  exam: ComponentScore;
  trend: "up" | "down" | "stable";
  published: boolean;
  creditHours: number;
  description: string;
  resources: { label: string; type: "pdf" | "video" | "link" }[];
  assessmentHistory: { label: string; score: number; max: number }[];
}

// ─── Constants ────────────────────────────────────────────────────────────────

const courses: Course[] = [
  {
    id: "cs301",
    code: "CS 301",
    name: "Database Systems",
    lecturer: "Dr. Kamau Njoroge",
    lecturerInitials: "KN",
    cat1: { score: 28, max: 30, weight: 30 },
    cat2: { score: 22, max: 30, weight: 30 },
    exam: { score: 58, max: 70, weight: 40 },
    trend: "up",
    published: true,
    creditHours: 3,
    description:
      "Covers relational databases, SQL, normalization, indexing, and transaction management.",
    resources: [
      { label: "ER Diagrams Notes", type: "pdf" },
      { label: "SQL Practice Queries", type: "pdf" },
      { label: "Lecture Recording — Week 8", type: "video" },
    ],
    assessmentHistory: [
      { label: "CAT 1", score: 28, max: 30 },
      { label: "CAT 2", score: 22, max: 30 },
      { label: "Exam", score: 58, max: 70 },
    ],
  },
  {
    id: "cs302",
    code: "CS 302",
    name: "Algorithms & Data Structures",
    lecturer: "Dr. Kamau Njoroge",
    lecturerInitials: "KN",
    cat1: { score: 18, max: 30, weight: 30 },
    cat2: { score: 14, max: 30, weight: 30 },
    exam: { score: null, max: 70, weight: 40 },
    trend: "down",
    published: false,
    creditHours: 4,
    description:
      "Sorting, searching, graph algorithms, dynamic programming, and complexity analysis.",
    resources: [
      { label: "Big-O Cheat Sheet", type: "pdf" },
      { label: "Graph Traversal Slides", type: "pdf" },
    ],
    assessmentHistory: [
      { label: "CAT 1", score: 18, max: 30 },
      { label: "CAT 2", score: 14, max: 30 },
    ],
  },
  {
    id: "se201",
    code: "SE 201",
    name: "Software Engineering",
    lecturer: "Ms. Amina Hassan",
    lecturerInitials: "AH",
    cat1: { score: 26, max: 30, weight: 30 },
    cat2: { score: 25, max: 30, weight: 30 },
    exam: { score: 62, max: 70, weight: 40 },
    trend: "up",
    published: true,
    creditHours: 3,
    description:
      "SDLC, agile methodologies, UML, software testing, and project management principles.",
    resources: [
      { label: "UML Diagrams Reference", type: "pdf" },
      { label: "Agile Sprint Simulation", type: "link" },
      { label: "Lecture — Requirements Engineering", type: "video" },
    ],
    assessmentHistory: [
      { label: "CAT 1", score: 26, max: 30 },
      { label: "CAT 2", score: 25, max: 30 },
      { label: "Exam", score: 62, max: 70 },
    ],
  },
  {
    id: "cn201",
    code: "CN 201",
    name: "Computer Networks",
    lecturer: "Prof. James Otieno",
    lecturerInitials: "JO",
    cat1: { score: 20, max: 30, weight: 30 },
    cat2: { score: 16, max: 30, weight: 30 },
    exam: { score: null, max: 70, weight: 40 },
    trend: "stable",
    published: false,
    creditHours: 3,
    description:
      "OSI model, TCP/IP, routing protocols, network security, and wireless networking.",
    resources: [
      { label: "OSI Layer Summary", type: "pdf" },
      { label: "Wireshark Lab Guide", type: "pdf" },
    ],
    assessmentHistory: [
      { label: "CAT 1", score: 20, max: 30 },
      { label: "CAT 2", score: 16, max: 30 },
    ],
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function weightedTotal(c: Course): number | null {
  if (!c.published || c.exam.score === null) return null;
  const cat1 = (c.cat1.score! / c.cat1.max) * c.cat1.weight;
  const cat2 = (c.cat2.score! / c.cat2.max) * c.cat2.weight;
  const exam = (c.exam.score / c.exam.max) * c.exam.weight;
  return Math.round(cat1 + cat2 + exam);
}

function gradeLabel(total: number | null): { label: string; color: string } {
  if (total === null) return { label: "—", color: "gray" };
  if (total >= 70) return { label: "A", color: "teal" };
  if (total >= 60) return { label: "B", color: "blue" };
  if (total >= 50) return { label: "C", color: "yellow" };
  if (total >= 40) return { label: "D", color: "orange" };
  return { label: "E", color: "red" };
}

function componentPct(item: ComponentScore): number {
  if (item.score === null) return 0;
  return Math.round((item.score / item.max) * 100);
}

function ResourceIcon({ type }: { type: "pdf" | "video" | "link" }) {
  if (type === "pdf")
    return <IconFileText size={14} color="var(--mantine-color-red-5)" />;
  if (type === "video")
    return <IconBook size={14} color="var(--mantine-color-blue-5)" />;
  return <IconChevronLeft size={14} color="var(--mantine-color-teal-5)" />;
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function CourseDetailsPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const router = useRouter();
  const { code: id } = React.use(params);
  const [selectedResource, setSelectedResource] = useState<{
    label: string;
    type: "pdf" | "video" | "link";
  } | null>(null);

  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <Box px={28} py={24}>
        <Text c="red">Course not found</Text>
        <Button onClick={() => router.back()} mt="md">
          Go Back
        </Button>
      </Box>
    );
  }

  const total = weightedTotal(course);
  const { label, color } = gradeLabel(total);

  return (
    <Box px={28} py={24}>
      {/* Breadcrumb */}
      <Breadcrumbs mb="lg">
        <Button
          variant="subtle"
          size="xs"
          leftSection={<IconChevronLeft size={14} />}
          onClick={() => router.back()}
        >
          Back to Courses
        </Button>
      </Breadcrumbs>

      {/* Header */}
      <Paper radius="lg" p="lg" shadow="sm" mb="xl">
        <Group gap={12} mb={16}>
          <ThemeIcon size={48} radius="md" color="teal" variant="light">
            <IconFolderOpen size={24} />
          </ThemeIcon>
          <Box>
            <Title order={2} fz={24} fw={700}>
              {course.name}
            </Title>
            <Text fz={13} c="dimmed">
              {course.code} · {course.creditHours} Credit Hours
            </Text>
          </Box>
        </Group>
      </Paper>

      {/* Main content */}
      <Tabs defaultValue="overview" color="teal" radius="lg">
        <Tabs.List mb="md">
          <Tabs.Tab value="overview" leftSection={<IconChartBar size={14} />}>
            Overview
          </Tabs.Tab>
          <Tabs.Tab value="resources" leftSection={<IconFileText size={14} />}>
            Resources
          </Tabs.Tab>
        </Tabs.List>

        {/* Overview Tab */}
        <Tabs.Panel value="overview">
          <Stack gap="md">
            {/* Lecturer */}
            <Paper radius="lg" p="lg" shadow="sm">
              <Text fw={700} fz={14} mb="md">
                Instructor
              </Text>
              <Group gap={10}>
                <Avatar size={44} radius="xl" color="grape" fw={700} fz={14}>
                  {course.lecturerInitials}
                </Avatar>
                <Box>
                  <Text fz={14} fw={600}>
                    {course.lecturer}
                  </Text>
                  <Text fz={12} c="dimmed">
                    Lecturer
                  </Text>
                </Box>
              </Group>
            </Paper>

            {/* Description */}
            <Paper radius="lg" p="lg" shadow="sm">
              <Text fw={700} fz={14} mb="md">
                Course Description
              </Text>
              <Text fz={13} c="dimmed" lh={1.8}>
                {course.description}
              </Text>
            </Paper>

            <Divider />

            {/* Grade Analysis */}
            <Paper radius="lg" p="lg" shadow="sm">
              <Text fw={700} fz={14} mb="md">
                Performance & Grades
              </Text>

              <Group align="flex-start" gap="xl">
                {total !== null && (
                  <Stack align="center" gap={8}>
                    <RingProgress
                      size={120}
                      thickness={10}
                      roundCaps
                      sections={[{ value: total, color: color }]}
                      label={
                        <Stack gap={0} align="center">
                          <Text fz={24} fw={700} ta="center" c={`${color}.6`}>
                            {total}
                          </Text>
                          <Text fz={11} c="dimmed">
                            /100
                          </Text>
                        </Stack>
                      }
                    />
                    <Badge color={color} radius="xl" size="lg">
                      Grade {label}
                    </Badge>
                  </Stack>
                )}

                <Stack gap={14} style={{ flex: 1 }}>
                  {[
                    {
                      label: `CAT 1 (${course.cat1.weight}%)`,
                      item: course.cat1,
                    },
                    {
                      label: `CAT 2 (${course.cat2.weight}%)`,
                      item: course.cat2,
                    },
                    {
                      label: `Exam (${course.exam.weight}%)`,
                      item: course.exam,
                    },
                  ].map(({ label: lbl, item }) => {
                    const pct = componentPct(item);
                    return (
                      <Box key={lbl}>
                        <Group justify="space-between" mb={6}>
                          <Text fz={13} fw={600} c="dark.7">
                            {lbl}
                          </Text>
                          <Text fz={13} fw={700}>
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
                              : pct >= 60
                                ? "teal"
                                : "orange"
                          }
                          radius="xl"
                          size="lg"
                        />
                      </Box>
                    );
                  })}
                </Stack>
              </Group>
            </Paper>

            {/* AI Insights */}
            {course.trend === "down" && (
              <Paper
                radius="lg"
                p="lg"
                shadow="sm"
                style={{
                  background: "#fff5f5",
                  border: "1px solid #fcd5d5",
                }}
              >
                <Group gap={10} mb={10}>
                  <ThemeIcon size={36} radius="md" color="red" variant="light">
                    <IconAlertTriangle size={18} />
                  </ThemeIcon>
                  <Box>
                    <Text fw={700} fz={13} c="red.8">
                      AI Alert — At Risk
                    </Text>
                    <Text fz={12} c="dimmed">
                      Based on performance trends
                    </Text>
                  </Box>
                </Group>
                <Text fz={12} c="dark.6" lh={1.7}>
                  Your CAT scores show a declining trend. Focus on past papers
                  and seek clarification from your lecturer before the exam.
                </Text>
              </Paper>
            )}
            {course.trend === "up" && (
              <Paper
                radius="lg"
                p="lg"
                shadow="sm"
                style={{
                  background: "#f0fdf9",
                  border: "1px solid #b2f2e0",
                }}
              >
                <Group gap={10} mb={10}>
                  <ThemeIcon size={36} radius="md" color="teal" variant="light">
                    <IconCheck size={18} />
                  </ThemeIcon>
                  <Box>
                    <Text fw={700} fz={13} c="teal.8">
                      AI Insight — Performing Well
                    </Text>
                    <Text fz={12} c="dimmed">
                      Based on performance trends
                    </Text>
                  </Box>
                </Group>
                <Text fz={12} c="dark.6" lh={1.7}>
                  You are consistently improving in this unit. Keep it up and
                  aim for a distinction in the final exam.
                </Text>
              </Paper>
            )}
          </Stack>
        </Tabs.Panel>

        {/* Resources Tab */}
        <Tabs.Panel value="resources">
          <Stack gap="md">
            {course.resources.length === 0 ? (
              <Paper radius="lg" p="lg" shadow="sm" ta="center">
                <Text fz={13} c="dimmed">
                  No resources uploaded yet.
                </Text>
              </Paper>
            ) : (
              course.resources.map((r, i) => (
                <Paper
                  key={i}
                  radius="lg"
                  p="lg"
                  shadow="sm"
                  style={{
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    border:
                      selectedResource?.label === r.label
                        ? "2px solid var(--mantine-color-teal-5)"
                        : "1px solid var(--mantine-color-gray-2)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 8px 32px rgba(0,0,0,0.10)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 4px 16px rgba(0,0,0,0.08)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                  onClick={() => setSelectedResource(r)}
                >
                  <Group justify="space-between" mb="md">
                    <Group gap={12}>
                      <ThemeIcon
                        size={40}
                        radius="md"
                        color={
                          r.type === "pdf"
                            ? "red"
                            : r.type === "video"
                              ? "blue"
                              : "teal"
                        }
                        variant="light"
                      >
                        {r.type === "pdf" ? (
                          <IconFileText size={20} />
                        ) : r.type === "video" ? (
                          <IconPlayerPlay size={20} />
                        ) : (
                          <IconExternalLink size={20} />
                        )}
                      </ThemeIcon>
                      <Box>
                        <Text fz={13} fw={600}>
                          {r.label}
                        </Text>
                        <Text fz={11} c="dimmed">
                          {r.type === "pdf"
                            ? "PDF Document"
                            : r.type === "video"
                              ? "Video Lecture"
                              : "External Link"}
                        </Text>
                      </Box>
                    </Group>
                    <Badge
                      size="sm"
                      variant="light"
                      color={
                        r.type === "pdf"
                          ? "red"
                          : r.type === "video"
                            ? "blue"
                            : "teal"
                      }
                      radius="xl"
                    >
                      {r.type.toUpperCase()}
                    </Badge>
                  </Group>

                  <Group gap="xs" pt="sm">
                    {r.type === "pdf" && (
                      <>
                        <Button
                          size="xs"
                          variant="light"
                          color="red"
                          leftSection={<IconDownload size={14} />}
                          onClick={(e) => e.stopPropagation()}
                        >
                          Download
                        </Button>
                        <Button
                          size="xs"
                          variant="subtle"
                          color="red"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View
                        </Button>
                      </>
                    )}

                    {r.type === "video" && (
                      <>
                        <Button
                          size="xs"
                          variant="light"
                          color="blue"
                          leftSection={<IconPlayerPlay size={14} />}
                          onClick={(e) => e.stopPropagation()}
                        >
                          Watch
                        </Button>
                        <Button
                          size="xs"
                          variant="subtle"
                          color="blue"
                          leftSection={<IconDownload size={14} />}
                          onClick={(e) => e.stopPropagation()}
                        >
                          Download
                        </Button>
                      </>
                    )}

                    {r.type === "link" && (
                      <Button
                        size="xs"
                        variant="light"
                        color="teal"
                        leftSection={<IconExternalLink size={14} />}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Open Link
                      </Button>
                    )}
                  </Group>
                </Paper>
              ))
            )}
          </Stack>
        </Tabs.Panel>

        {/* Resource Details Modal */}
        <Modal
          opened={selectedResource !== null}
          onClose={() => setSelectedResource(null)}
          title={selectedResource?.label}
          size="md"
          radius="lg"
        >
          <Stack gap="md">
            <Box
              style={{
                background: "#f8f9fa",
                borderRadius: "8px",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <ThemeIcon
                size={64}
                radius="md"
                color={
                  selectedResource?.type === "pdf"
                    ? "red"
                    : selectedResource?.type === "video"
                      ? "blue"
                      : "teal"
                }
                variant="light"
                mx="auto"
                mb="md"
              >
                {selectedResource?.type === "pdf" ? (
                  <IconFileText size={32} />
                ) : selectedResource?.type === "video" ? (
                  <IconPlayerPlay size={32} />
                ) : (
                  <IconExternalLink size={32} />
                )}
              </ThemeIcon>
              <Text fw={700} fz={14} mb="xs">
                {selectedResource?.label}
              </Text>
              <Text fz={12} c="dimmed" mb="md">
                {selectedResource?.type === "pdf"
                  ? "PDF Document · 2.4 MB"
                  : selectedResource?.type === "video"
                    ? "Video Lecture · 45 mins"
                    : "External Resource"}
              </Text>
            </Box>

            <Divider />

            <Box>
              <Text fw={600} fz={12} c="dimmed" mb="xs" tt="uppercase">
                Resource Details
              </Text>
              <Text fz={13} lh={1.8}>
                {selectedResource?.type === "pdf"
                  ? "This PDF document contains comprehensive notes on the topic. You can download it for offline access or view it directly in your browser."
                  : selectedResource?.type === "video"
                    ? "This video lecture covers key concepts and practical examples. You can watch it online or download for offline viewing."
                    : "This is an external link to additional learning resources. Click to open in a new tab."}
              </Text>
            </Box>

            <Divider />

            <Group justify="flex-end" gap="sm">
              <Button
                variant="default"
                radius="xl"
                onClick={() => setSelectedResource(null)}
              >
                Close
              </Button>
              <Button
                color={
                  selectedResource?.type === "pdf"
                    ? "red"
                    : selectedResource?.type === "video"
                      ? "blue"
                      : "teal"
                }
                radius="xl"
                leftSection={
                  selectedResource?.type === "pdf" ? (
                    <IconDownload size={16} />
                  ) : selectedResource?.type === "video" ? (
                    <IconPlayerPlay size={16} />
                  ) : (
                    <IconExternalLink size={16} />
                  )
                }
              >
                {selectedResource?.type === "pdf"
                  ? "Download PDF"
                  : selectedResource?.type === "video"
                    ? "Watch Video"
                    : "Open Link"}
              </Button>
            </Group>
          </Stack>
        </Modal>
      </Tabs>
    </Box>
  );
}
