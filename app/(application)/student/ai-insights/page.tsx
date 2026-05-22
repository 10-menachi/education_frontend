"use client";

import React, { useMemo, useState } from "react";
import {
  Avatar,
  Badge,
  Box,
  Grid,
  Group,
  Paper,
  Stack,
  Text,
  ThemeIcon,
  Title,
  Tabs,
  Progress,
  Button,
  Card,
  RingProgress,
  Drawer,
  TextInput,
  ScrollArea,
  ActionIcon,
} from "@mantine/core";

import {
  IconBrain,
  IconTrendingUp,
  IconAlertTriangle,
  IconTarget,
  IconBook,
  IconCircleCheck,
  IconClock,
  IconMessageCircle,
  IconStar,
  IconBulb,
  IconSend,
  IconMessageChatbot,
} from "@tabler/icons-react";

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

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function AIInsightsPage() {
  const [opened, setOpened] = useState(false);
  const [message, setMessage] = useState("");

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

  const chatMessages = [
    {
      role: "ai",
      text: "Hello 👋 I'm your academic AI assistant. Ask me about your GPA, study plans, or course performance.",
    },
    {
      role: "user",
      text: "Which course should I focus on this week?",
    },
    {
      role: "ai",
      text: "You should prioritize CS 302 and CN 201 because they show declining performance trends.",
    },
  ];

  return (
    <Box px={28} py={24}>
      {/* Header */}
      <Box mb="xl">
        <Group gap={12}>
          <ThemeIcon size={44} radius="md" color="grape" variant="light">
            <IconBrain size={24} />
          </ThemeIcon>

          <Box>
            <Title
              order={2}
              fz={28}
              fw={700}
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              AI Insights
            </Title>

            <Text fz={13} c="dimmed">
              Personalized analysis powered by machine learning algorithms.
            </Text>
          </Box>
        </Group>
      </Box>

      {/* AI Confidence */}
      <Paper radius="lg" p="lg" shadow="sm" mb="xl">
        <Group justify="space-between">
          <Box>
            <Text fw={700} fz={14}>
              AI Analysis Confidence
            </Text>

            <Text fz={12} c="dimmed" mt={4}>
              Based on 4 published courses and 156 data points
            </Text>

            <Group mt="md">
              <Badge color="teal" radius="xl">
                85% Confidence
              </Badge>

              <Badge variant="outline" radius="xl">
                Updated Today
              </Badge>
            </Group>
          </Box>

          <RingProgress
            size={120}
            thickness={8}
            roundCaps
            sections={[{ value: 85, color: "teal" }]}
            label={
              <Stack gap={0} align="center">
                <Text fw={700} fz={20}>
                  85%
                </Text>

                <Text fz={10} c="dimmed">
                  Overall
                </Text>
              </Stack>
            }
          />
        </Group>
      </Paper>

      {/* Tabs */}
      <Tabs defaultValue="insights" color="teal" radius="lg">
        <Tabs.List mb="lg">
          <Tabs.Tab value="insights" leftSection={<IconBulb size={14} />}>
            Key Insights
          </Tabs.Tab>

          <Tabs.Tab
            value="predictions"
            leftSection={<IconTrendingUp size={14} />}
          >
            Predictions
          </Tabs.Tab>

          <Tabs.Tab
            value="recommendations"
            leftSection={<IconTarget size={14} />}
          >
            Recommendations
          </Tabs.Tab>
        </Tabs.List>

        {/* Insights */}
        <Tabs.Panel value="insights">
          <Stack gap="lg">
            <Paper radius="lg" p="lg" shadow="sm">
              <Group gap={12} mb="md">
                <ThemeIcon color="teal" radius="md" size={44} variant="light">
                  <IconStar size={20} />
                </ThemeIcon>

                <Box>
                  <Text fw={700}>You're excelling in theory-based courses</Text>

                  <Badge mt={4} size="xs" color="teal" variant="dot">
                    92% confidence
                  </Badge>
                </Box>
              </Group>

              <Text fz={13} c="dimmed" lh={1.8}>
                Your strong performance in Database Systems and Software
                Engineering indicates excellent conceptual understanding.
              </Text>
            </Paper>

            <Paper radius="lg" p="lg" shadow="sm">
              <Group gap={12} mb="md">
                <ThemeIcon color="red" radius="md" size={44} variant="light">
                  <IconAlertTriangle size={20} />
                </ThemeIcon>

                <Box>
                  <Text fw={700}>Algorithms needs urgent attention</Text>

                  <Badge mt={4} size="xs" color="red" variant="dot">
                    95% confidence
                  </Badge>
                </Box>
              </Group>

              <Text fz={13} c="dimmed" lh={1.8}>
                Your CAT scores in CS 302 are declining. Focus on algorithmic
                problem-solving and revision before exams.
              </Text>
            </Paper>
          </Stack>
        </Tabs.Panel>

        {/* Predictions */}
        <Tabs.Panel value="predictions">
          <Paper radius="lg" p="lg" shadow="sm">
            <Text fw={700} mb="lg">
              Predicted Final Grades
            </Text>

            <Stack gap="lg">
              {[
                { course: "CS 301", predicted: 74 },
                { course: "CS 302", predicted: 52 },
                { course: "SE 201", predicted: 79 },
                { course: "CN 201", predicted: 48 },
              ].map((pred) => {
                const { label, color } = gradeLabel(pred.predicted);

                return (
                  <Box key={pred.course}>
                    <Group justify="space-between" mb={6}>
                      <Text fw={600} fz={13}>
                        {pred.course}
                      </Text>

                      <Badge color={color} radius="xl">
                        {pred.predicted} · Grade {label}
                      </Badge>
                    </Group>

                    <Progress
                      value={pred.predicted}
                      color={color}
                      radius="xl"
                    />
                  </Box>
                );
              })}
            </Stack>
          </Paper>
        </Tabs.Panel>

        {/* Recommendations */}
        <Tabs.Panel value="recommendations">
          <Stack gap="lg">
            <Paper radius="lg" p="lg" shadow="sm">
              <Group justify="space-between" mb="md">
                <Group gap={12}>
                  <Avatar color="red" radius="md">
                    CS302
                  </Avatar>

                  <Box>
                    <Text fw={700}>Start exam revision now</Text>

                    <Badge mt={4} size="xs" color="red">
                      High Priority
                    </Badge>
                  </Box>
                </Group>

                <Badge color="teal" variant="light">
                  +12 points
                </Badge>
              </Group>

              <Text fz={13} c="dimmed" lh={1.8}>
                Dedicate 2 hours daily to algorithm problems and revision.
              </Text>

              <Group mt="md">
                <Button size="xs" variant="light">
                  View Resources
                </Button>

                <Button
                  size="xs"
                  variant="subtle"
                  leftSection={<IconCircleCheck size={12} />}
                >
                  Mark Complete
                </Button>
              </Group>
            </Paper>
          </Stack>
        </Tabs.Panel>
      </Tabs>

      {/* Study Tips */}
      <Paper radius="lg" p="lg" shadow="sm" mt="xl">
        <Group gap={10} mb="lg">
          <ThemeIcon size={32} radius="md" color="grape" variant="light">
            <IconBook size={16} />
          </ThemeIcon>

          <Text fw={700}>AI-Powered Study Tips</Text>
        </Group>

        <Grid>
          {[
            {
              title: "Spaced Repetition",
              desc: "Review concepts at increasing intervals for better retention.",
              icon: IconClock,
            },
            {
              title: "Active Learning",
              desc: "Solve problems before reading solutions for deeper understanding.",
              icon: IconMessageCircle,
            },
            {
              title: "Study Groups",
              desc: "Collaborate with peers for accountability and learning.",
              icon: IconStar,
            },
            {
              title: "Time Management",
              desc: "Spend more time on weak subjects than strong ones.",
              icon: IconTarget,
            },
          ].map((item, idx) => {
            const Icon = item.icon;

            return (
              <Grid.Col span={{ base: 12, md: 6 }} key={idx}>
                <Card
                  radius="md"
                  p="md"
                  style={{
                    background: "#f8f9fa",
                    border: "1px solid #ececec",
                  }}
                >
                  <Group gap={8} mb={8}>
                    <ThemeIcon color="grape" radius="md" variant="light">
                      <Icon size={14} />
                    </ThemeIcon>

                    <Text fw={600} fz={13}>
                      {item.title}
                    </Text>
                  </Group>

                  <Text fz={12} c="dimmed" lh={1.7}>
                    {item.desc}
                  </Text>
                </Card>
              </Grid.Col>
            );
          })}
        </Grid>
      </Paper>

      {/* Floating Chat Button */}
      <ActionIcon
        size={64}
        radius="xl"
        color="grape"
        variant="filled"
        onClick={() => setOpened(true)}
        style={{
          position: "fixed",
          bottom: 28,
          right: 28,
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          zIndex: 1000,
        }}
      >
        <IconMessageChatbot size={30} />
      </ActionIcon>

      {/* AI Chat Drawer */}
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        position="right"
        size={420}
        padding="md"
        title={
          <Group gap={10}>
            <ThemeIcon color="grape" variant="light" radius="md">
              <IconBrain size={18} />
            </ThemeIcon>

            <Box>
              <Text fw={700}>Academic AI Assistant</Text>

              <Text fz={11} c="dimmed">
                Ask anything about your academic progress
              </Text>
            </Box>
          </Group>
        }
      >
        <Stack h="100%" justify="space-between">
          {/* Messages */}
          <ScrollArea h="75vh">
            <Stack gap="md">
              {chatMessages.map((msg, idx) => (
                <Group
                  key={idx}
                  justify={msg.role === "user" ? "flex-end" : "flex-start"}
                >
                  <Paper
                    p="sm"
                    radius="lg"
                    maw="80%"
                    bg={msg.role === "user" ? "grape.6" : "gray.1"}
                    c={msg.role === "user" ? "white" : "dark"}
                  >
                    <Text fz={13} lh={1.7}>
                      {msg.text}
                    </Text>
                  </Paper>
                </Group>
              ))}
            </Stack>
          </ScrollArea>

          {/* Input */}
          <Group align="flex-end" mt="md">
            <TextInput
              placeholder="Ask the AI assistant..."
              value={message}
              onChange={(e) => setMessage(e.currentTarget.value)}
              radius="xl"
              size="md"
              style={{ flex: 1 }}
            />

            <ActionIcon size={44} radius="xl" color="grape" variant="filled">
              <IconSend size={18} />
            </ActionIcon>
          </Group>
        </Stack>
      </Drawer>
    </Box>
  );
}
