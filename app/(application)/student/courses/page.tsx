"use client";

import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Group,
  Paper,
  Progress,
  rem,
  RingProgress,
  Select,
  Stack,
  Tabs,
  Text,
  TextInput,
  ThemeIcon,
  Title,
  Tooltip,
} from "@mantine/core";
import {
  IconAlertTriangle,
  IconBook,
  IconChartBar,
  IconCheck,
  IconChevronRight,
  IconClock,
  IconFileText,
  IconFolderOpen,
  IconSearch,
  IconTrendingDown,
  IconTrendingUp,
} from "@tabler/icons-react";
import { useState } from "react";
import Link from "next/link";

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

// ─── Sub-components ───────────────────────────────────────────────────────────

/** Trend badge matching dashboard style */
function TrendBadge({ trend }: { trend: Course["trend"] }) {
  if (trend === "up")
    return (
      <Badge
        color="teal"
        size="xs"
        radius="xl"
        variant="light"
        leftSection={<IconTrendingUp size={11} />}
      >
        Improving
      </Badge>
    );
  if (trend === "down")
    return (
      <Badge
        color="red"
        size="xs"
        radius="xl"
        variant="light"
        leftSection={<IconTrendingDown size={11} />}
      >
        Declining
      </Badge>
    );
  return (
    <Badge color="gray" size="xs" radius="xl" variant="light">
      Stable
    </Badge>
  );
}

/** Resource type icon */
function ResourceIcon({ type }: { type: "pdf" | "video" | "link" }) {
  if (type === "pdf")
    return <IconFileText size={14} color="var(--mantine-color-red-5)" />;
  if (type === "video")
    return <IconBook size={14} color="var(--mantine-color-blue-5)" />;
  return <IconChevronRight size={14} color="var(--mantine-color-teal-5)" />;
}

// ─── Course Card ──────────────────────────────────────────────────────────────

function CourseCard({ course }: { course: Course }) {
  const total = weightedTotal(course);
  const { label, color } = gradeLabel(total);

  return (
    <Paper radius="lg" p="lg" shadow="sm" style={{ cursor: "pointer" }}>
      {/* Header */}
      <Group justify="space-between" mb={12}>
        <Group gap={10}>
          <ThemeIcon size={38} radius="md" color="teal" variant="light">
            <IconFolderOpen size={18} />
          </ThemeIcon>
          <Box>
            <Text fw={700} fz={13}>
              {course.name}
            </Text>
            <Text fz={11} c="dimmed">
              {course.code} · {course.creditHours} CH
            </Text>
          </Box>
        </Group>
        <Group gap={6}>
          <TrendBadge trend={course.trend} />
          {course.published && total !== null ? (
            <Badge color={color} size="sm" radius="xl">
              {total}/100 · {label}
            </Badge>
          ) : (
            <Badge color="gray" size="sm" radius="xl" variant="outline">
              Exam Pending
            </Badge>
          )}
        </Group>
      </Group>

      {/* Lecturer */}
      <Group gap={8} mb={14}>
        <Avatar size={24} radius="xl" color="grape" fz={10}>
          {course.lecturerInitials}
        </Avatar>
        <Text fz={11} c="dimmed">
          {course.lecturer}
        </Text>
      </Group>

      {/* Score bars */}
      <Grid gap="xs">
        {[
          { label: `CAT 1 (${course.cat1.weight}%)`, item: course.cat1 },
          { label: `CAT 2 (${course.cat2.weight}%)`, item: course.cat2 },
          { label: `Exam (${course.exam.weight}%)`, item: course.exam },
        ].map(({ label: lbl, item }) => {
          const pct = componentPct(item);
          return (
            <Grid.Col span={4} key={lbl}>
              <Text fz={11} c="dimmed" mb={4}>
                {lbl}
              </Text>
              <Tooltip
                label={
                  item.score !== null
                    ? `${item.score}/${item.max} (${pct}%)`
                    : "Not yet published"
                }
                withArrow
              >
                <Progress
                  value={pct}
                  color={
                    item.score === null ? "gray" : pct >= 60 ? "teal" : "orange"
                  }
                  radius="xl"
                  size="sm"
                />
              </Tooltip>
              <Text fz={11} mt={3} fw={600} c="dark.6">
                {item.score !== null ? `${item.score}/${item.max}` : "—"}
              </Text>
            </Grid.Col>
          );
        })}
      </Grid>

      {/* Footer action */}
      <Divider my="sm" />
      <Link
        href={`/student/courses/${course.id}`}
        style={{ textDecoration: "none" }}
      >
        <Button
          component="div"
          variant="subtle"
          color="teal"
          size="xs"
          radius="xl"
          rightSection={<IconChevronRight size={13} />}
        >
          View Details
        </Button>
      </Link>
    </Paper>
  );
}

// ─── Summary Strip ────────────────────────────────────────────────────────────

function CourseSummaryStrip() {
  const published = courses.filter((c) => c.published);
  const totals = published.map(weightedTotal).filter(Boolean) as number[];
  const avg = totals.length
    ? Math.round(totals.reduce((a, b) => a + b, 0) / totals.length)
    : null;
  const atRisk = courses.filter((c) => c.trend === "down").length;
  const totalCH = courses.reduce((a, c) => a + c.creditHours, 0);

  const stats = [
    {
      icon: IconFolderOpen,
      color: "teal",
      value: `${courses.length}`,
      label: "Enrolled Units",
      sub: `${totalCH} credit hours`,
    },
    {
      icon: IconChartBar,
      color: "blue",
      value: avg ? `${avg}%` : "—",
      label: "Average Grade",
      sub: "Across published results",
    },
    {
      icon: IconCheck,
      color: "teal",
      value: `${published.length}`,
      label: "Results Published",
      sub: `${courses.length - published.length} pending`,
    },
    {
      icon: IconAlertTriangle,
      color: atRisk > 0 ? "red" : "teal",
      value: `${atRisk}`,
      label: "Units At Risk",
      sub: "Based on AI analysis",
    },
  ];

  return (
    <Grid gap="md" mb="xl">
      {stats.map((s) => (
        <Grid.Col span={3} key={s.label}>
          <Paper radius="lg" p="lg" shadow="sm">
            <Group justify="space-between" mb={8}>
              <ThemeIcon size={40} radius="md" color={s.color} variant="light">
                <s.icon size={20} />
              </ThemeIcon>
              <Text fz={24} fw={700} c={`${s.color}.6`}>
                {s.value}
              </Text>
            </Group>
            <Text fz={13} fw={600} c="dark.7">
              {s.label}
            </Text>
            <Text fz={11} c="dimmed">
              {s.sub}
            </Text>
          </Paper>
        </Grid.Col>
      ))}
    </Grid>
  );
}

// ─── Filters Bar ──────────────────────────────────────────────────────────────

function FiltersBar({
  search,
  onSearch,
  filter,
  onFilter,
}: {
  search: string;
  onSearch: (v: string) => void;
  filter: string | null;
  onFilter: (v: string | null) => void;
}) {
  return (
    <Flex gap="md" mb="xl" align="center" wrap="wrap">
      <TextInput
        placeholder="Search units..."
        leftSection={<IconSearch size={15} />}
        radius="xl"
        size="sm"
        value={search}
        onChange={(e) => onSearch(e.currentTarget.value)}
        style={{ flex: 1, minWidth: 200 }}
      />
      <Select
        placeholder="Filter by status"
        radius="xl"
        size="sm"
        clearable
        data={[
          { label: "All Units", value: "all" },
          { label: "Results Published", value: "published" },
          { label: "Exam Pending", value: "pending" },
          { label: "At Risk", value: "at-risk" },
          { label: "Improving", value: "improving" },
        ]}
        value={filter}
        onChange={onFilter}
        style={{ width: 200 }}
      />
    </Flex>
  );
}

// ─── GPA Sidebar ──────────────────────────────────────────────────────────────

function GPASidebar() {
  const published = courses.filter((c) => c.published);
  const totals = published.map(weightedTotal).filter(Boolean) as number[];
  const avg = totals.length
    ? Math.round(totals.reduce((a, b) => a + b, 0) / totals.length)
    : null;
  const { label, color } = gradeLabel(avg);

  return (
    <Stack gap="md">
      {/* GPA Card */}
      <Paper radius="lg" p="lg" shadow="sm">
        <Text fw={700} fz={14} c="dark.7" mb="md">
          Semester GPA
        </Text>
        <Stack align="center" gap={6}>
          <RingProgress
            size={120}
            thickness={10}
            roundCaps
            sections={[{ value: avg ?? 0, color: color }]}
            label={
              <Stack gap={2} align="center">
                <Text fz={22} fw={700} c={`${color}.6`} lh={1}>
                  {avg ?? "—"}
                </Text>
                <Text fz={10} c="dimmed">
                  / 100
                </Text>
              </Stack>
            }
          />
          <Badge color={color} size="md" radius="xl" mt={4}>
            Grade {label}
          </Badge>
          <Text fz={11} c="dimmed" ta="center">
            Based on {published.length} published result
            {published.length !== 1 ? "s" : ""}
          </Text>
        </Stack>
      </Paper>

      {/* Per-course mini grades */}
      <Paper radius="lg" p="lg" shadow="sm">
        <Text fw={700} fz={14} c="dark.7" mb="md">
          Grade Breakdown
        </Text>
        <Stack gap={10}>
          {courses.map((c) => {
            const t = weightedTotal(c);
            const { label: gl, color: gc } = gradeLabel(t);
            return (
              <Group key={c.code} justify="space-between">
                <Box style={{ flex: 1, minWidth: 0 }}>
                  <Text fz={12} fw={600} lineClamp={1}>
                    {c.name}
                  </Text>
                  <Progress
                    value={t ?? 0}
                    color={t !== null ? gc : "gray"}
                    size="xs"
                    radius="xl"
                    mt={4}
                  />
                </Box>
                <Badge
                  color={t !== null ? gc : "gray"}
                  size="xs"
                  radius="xl"
                  ml={8}
                  variant={t === null ? "outline" : "filled"}
                >
                  {t !== null ? `${t} · ${gl}` : "Pending"}
                </Badge>
              </Group>
            );
          })}
        </Stack>
      </Paper>

      {/* Upcoming assessments mini */}
      <Paper radius="lg" p="lg" shadow="sm">
        <Group gap={8} mb="md">
          <ThemeIcon size={28} radius="md" color="blue" variant="light">
            <IconClock size={15} />
          </ThemeIcon>
          <Text fw={700} fz={14} c="dark.7">
            Next Assessments
          </Text>
        </Group>
        <Stack gap={8}>
          {[
            { name: "Algorithms CAT 2", date: "19 May", course: "CS 302" },
            { name: "Networks Exam", date: "2 Jun", course: "CN 201" },
          ].map((a, i) => (
            <Group
              key={i}
              justify="space-between"
              p="xs"
              style={{ background: "#f8f9fa", borderRadius: rem(8) }}
            >
              <Box>
                <Text fz={11} fw={600}>
                  {a.name}
                </Text>
                <Text fz={10} c="dimmed">
                  {a.course}
                </Text>
              </Box>
              <Text fz={11} fw={600} c="teal.6">
                {a.date}
              </Text>
            </Group>
          ))}
        </Stack>
      </Paper>
    </Stack>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function MyCoursesPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string | null>(null);

  const filtered = courses.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.code.toLowerCase().includes(search.toLowerCase());

    if (!matchesSearch) return false;
    if (!filter || filter === "all") return true;
    if (filter === "published") return c.published;
    if (filter === "pending") return !c.published;
    if (filter === "at-risk") return c.trend === "down";
    if (filter === "improving") return c.trend === "up";
    return true;
  });

  return (
    <Box px={28} py={24}>
      {/* Page header */}
      <Box mb="xl">
        <Title
          order={2}
          fz={26}
          fw={700}
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          My Courses 📚
        </Title>
        <Text fz={14} c="dimmed">
          View your enrolled units, marks breakdown, and academic resources.
        </Text>
      </Box>

      {/* Summary strip */}
      <CourseSummaryStrip />

      {/* Filters */}
      <FiltersBar
        search={search}
        onSearch={setSearch}
        filter={filter}
        onFilter={setFilter}
      />

      {/* Main content + sidebar */}
      <Grid gap="lg">
        <Grid.Col span={8}>
          {filtered.length === 0 ? (
            <Paper radius="lg" p="xl" shadow="sm" ta="center">
              <Text fz={13} c="dimmed">
                No courses match your search or filter.
              </Text>
            </Paper>
          ) : (
            <Stack gap="md">
              {filtered.map((c) => (
                <CourseCard key={c.code} course={c} />
              ))}
            </Stack>
          )}
        </Grid.Col>

        <Grid.Col span={4}>
          <GPASidebar />
        </Grid.Col>
      </Grid>
    </Box>
  );
}
