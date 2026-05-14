"use client";

import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Container,
  Divider,
  Flex,
  Grid,
  Group,
  Indicator,
  NavLink,
  Paper,
  Progress,
  RingProgress,
  ScrollArea,
  Stack,
  Text,
  ThemeIcon,
  Title,
  createTheme,
  rem,
  MantineProvider,
  ActionIcon,
} from "@mantine/core";
import {
  IconAward,
  IconBell,
  IconBrain,
  IconChartBar,
  IconChartLine,
  IconCheckbox,
  IconClock,
  IconFolderOpen,
  IconHome,
  IconLogout,
  IconSearch,
  IconSettings,
  IconStar,
  IconTrendingUp,
  IconUsers,
} from "@tabler/icons-react";

// ─── Theme ───────────────────────────────────────────────────────────────────
const theme = createTheme({
  primaryColor: "teal",
  fontFamily: "'DM Sans', sans-serif",
  headings: { fontFamily: "'Sora', sans-serif" },
  colors: {
    teal: [
      "#e6faf5",
      "#b3f0e0",
      "#80e5cb",
      "#4ddab6",
      "#1acfa1",
      "#00c896", // primary-500
      "#00a07a",
      "#00785d",
      "#005041",
      "#002820",
    ],
    amber: [
      "#fff8e1",
      "#ffecb3",
      "#ffe082",
      "#ffd54f",
      "#ffca28",
      "#ffc107",
      "#ffb300",
      "#ffa000",
      "#ff8f00",
      "#ff6f00",
    ],
  },
  radius: { md: rem(12), lg: rem(16), xl: rem(24) },
  shadows: {
    sm: "0 1px 4px rgba(0,0,0,0.06)",
    md: "0 4px 16px rgba(0,0,0,0.08)",
    lg: "0 8px 32px rgba(0,0,0,0.10)",
  },
});

// ─── Mock Data ────────────────────────────────────────────────────────────────
const student = {
  name: "Faith Wanjiku",
  reg: "CS/2021/043",
  department: "Computer Science — Strathmore University",
  year: "Year 3",
  avatar: null,
  overallGrade: 68,
};

const courses = [
  {
    code: "CS 301",
    name: "Database Systems",
    cat1: { score: 12, max: 30, weight: 15 },
    cat2: { score: 15, max: 30, weight: 15 },
    exam: { score: 34, max: 70, weight: 70 },
    published: true,
    avg: 64,
    trend: "down",
  },
  {
    code: "CS 312",
    name: "Algorithms & Data Structures",
    cat1: { score: 24, max: 30, weight: 15 },
    cat2: { score: 22, max: 30, weight: 15 },
    exam: { score: 55, max: 70, weight: 70 },
    published: true,
    avg: 78,
    trend: "up",
  },
  {
    code: "CS 325",
    name: "Software Engineering",
    cat1: { score: 27, max: 30, weight: 15 },
    cat2: { score: 25, max: 30, weight: 15 },
    exam: { score: null, max: 70, weight: 70 },
    published: false,
    avg: null,
    trend: null,
  },
  {
    code: "CS 330",
    name: "Computer Networks",
    cat1: { score: 19, max: 30, weight: 15 },
    cat2: { score: 20, max: 30, weight: 15 },
    exam: { score: 48, max: 70, weight: 70 },
    published: true,
    avg: 72,
    trend: "stable",
  },
];

const aiAlerts = [
  {
    course: "Database Systems",
    severity: "high",
    message:
      "Your scores on CAT 1 (12/30) and CAT 2 (15/30) are consistently below the class averages of 18.4 and 20.1. Focus on database normalisation and SQL query optimisation before the exam resit window.",
    time: "Today, 06:00 AM",
  },
  {
    course: "Algorithms & Data Structures",
    severity: "good",
    message:
      "Strong performance! Your CAT 2 improved by 8 points over CAT 1. Keep up revision on dynamic programming — it accounts for ~30% of past exam papers.",
    time: "Yesterday, 06:00 AM",
  },
];

const upcomingAssessments = [
  { course: "CS 325", name: "Final Exam", date: "28 May 2026", time: "09:00" },
  {
    course: "CS 330",
    name: "CAT 3 (Bonus)",
    date: "22 May 2026",
    time: "14:00",
  },
  {
    course: "CS 301",
    name: "Resit — CAT 2",
    date: "20 May 2026",
    time: "11:00",
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────
function weightedTotal(course: (typeof courses)[0]) {
  if (!course.published || course.exam.score === null) return null;
  const c1 = (course.cat1.score / course.cat1.max) * course.cat1.weight;
  const c2 = (course.cat2.score / course.cat2.max) * course.cat2.weight;
  const ex = (course.exam.score / course.exam.max) * course.exam.weight;
  return Math.round(c1 + c2 + ex);
}

function gradeLabel(score: number | null) {
  if (score === null) return { label: "—", color: "gray" };
  if (score >= 70) return { label: "A", color: "teal" };
  if (score >= 60) return { label: "B", color: "blue" };
  if (score >= 50) return { label: "C", color: "yellow" };
  if (score >= 40) return { label: "D", color: "orange" };
  return { label: "F", color: "red" };
}

function TrendBadge({ trend }: { trend: string | null }) {
  if (!trend)
    return (
      <Badge color="gray" variant="light" size="xs">
        Pending
      </Badge>
    );
  if (trend === "up")
    return (
      <Badge
        color="teal"
        variant="light"
        size="xs"
        leftSection={<IconTrendingUp size={10} />}
      >
        Improving
      </Badge>
    );
  if (trend === "down")
    return (
      <Badge color="red" variant="light" size="xs">
        At Risk
      </Badge>
    );
  return (
    <Badge color="blue" variant="light" size="xs">
      Stable
    </Badge>
  );
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────
function Sidebar() {
  const links = [
    { icon: IconHome, label: "Dashboard", active: true },
    { icon: IconFolderOpen, label: "My Courses" },
    { icon: IconChartLine, label: "Progress" },
    { icon: IconBrain, label: "AI Insights" },
    { icon: IconStar, label: "Favourites" },
    { icon: IconSettings, label: "Settings" },
  ];

  return (
    <Box
      style={{
        width: 220,
        minHeight: "100vh",
        background: "linear-gradient(160deg, #00c896 0%, #009973 100%)",
        display: "flex",
        flexDirection: "column",
        padding: "28px 14px",
        flexShrink: 0,
      }}
    >
      {/* Logo */}
      <Group gap={8} mb={36} px={8}>
        <ThemeIcon
          radius="md"
          size={36}
          color="white"
          variant="filled"
          style={{ background: "rgba(255,255,255,0.2)" }}
        >
          <IconAward size={20} color="white" />
        </ThemeIcon>
        <Text
          fw={700}
          fz={18}
          c="white"
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          Vibetech
        </Text>
      </Group>

      {/* Nav links */}
      <Stack gap={4} flex={1}>
        {links.map((l) => (
          <NavLink
            key={l.label}
            label={
              <Text fz={14} fw={l.active ? 600 : 400} c="white">
                {l.label}
              </Text>
            }
            leftSection={
              <l.icon
                size={18}
                color={l.active ? "white" : "rgba(255,255,255,0.65)"}
              />
            }
            style={{
              borderRadius: rem(10),
              background: l.active ? "rgba(255,255,255,0.18)" : "transparent",
              padding: "10px 12px",
            }}
          />
        ))}
      </Stack>

      {/* AI upsell card */}
      <Paper
        radius="lg"
        p="md"
        mt={24}
        style={{
          background: "rgba(255,255,255,0.14)",
          border: "1px solid rgba(255,255,255,0.22)",
        }}
      >
        <ThemeIcon size={32} radius="xl" color="amber" mb={8}>
          <IconBrain size={16} />
        </ThemeIcon>
        <Text fz={12} c="white" fw={600} mb={4}>
          AI Insights Active
        </Text>
        <Text fz={11} c="rgba(255,255,255,0.75)" mb={10}>
          Nightly analysis running. 2 new alerts today.
        </Text>
        <Button
          size="xs"
          fullWidth
          variant="white"
          color="teal"
          radius="xl"
          fw={600}
        >
          View Insights
        </Button>
      </Paper>

      {/* Logout */}
      <NavLink
        mt={16}
        label={
          <Text fz={14} c="rgba(255,255,255,0.7)">
            Log out
          </Text>
        }
        leftSection={<IconLogout size={18} color="rgba(255,255,255,0.7)" />}
        style={{ borderRadius: rem(10), padding: "10px 12px" }}
      />
    </Box>
  );
}

// ─── Header ──────────────────────────────────────────────────────────────────
function Header() {
  return (
    <Flex
      align="center"
      justify="space-between"
      px={28}
      py={16}
      style={{ borderBottom: "1px solid #f0f0f0", background: "#fff" }}
    >
      {/* Search */}
      <Group
        gap={8}
        style={{
          background: "#f5f5f5",
          borderRadius: rem(10),
          padding: "8px 14px",
          width: 280,
        }}
      >
        <IconSearch size={16} color="#aaa" />
        <Text fz={13} c="dimmed">
          Search courses, assessments…
        </Text>
      </Group>

      {/* Date */}
      <Text fz={13} c="dimmed">
        Thursday, 14 May 2026
      </Text>

      {/* Right */}
      <Group gap={12}>
        <Indicator color="red" size={8} offset={3}>
          <ActionIcon variant="light" color="gray" radius="xl" size="lg">
            <IconBell size={18} />
          </ActionIcon>
        </Indicator>
        <Group gap={10}>
          <Avatar radius="xl" size={38} color="teal">
            FW
          </Avatar>
          <Box>
            <Text fz={13} fw={600} lh={1.2}>
              {student.name}
            </Text>
            <Text fz={11} c="dimmed">
              {student.reg}
            </Text>
          </Box>
        </Group>
      </Group>
    </Flex>
  );
}

// ─── Stats Strip ─────────────────────────────────────────────────────────────
function StatsStrip() {
  const stats = [
    {
      label: "Overall Average",
      value: `${student.overallGrade}/100`,
      sub: "Across 4 units",
      icon: IconChartBar,
      color: "teal",
    },
    {
      label: "Enrolled Units",
      value: "4",
      sub: "Sem 1, 2025/26",
      icon: IconFolderOpen,
      color: "blue",
    },
    {
      label: "AI Alerts",
      value: "2",
      sub: "Since last night",
      icon: IconBrain,
      color: "amber",
    },
    {
      label: "Published Results",
      value: "3 / 4",
      sub: "1 pending",
      icon: IconCheckbox,
      color: "grape",
    },
  ];

  return (
    <Grid gap="md" mb="xl">
      {stats.map((s) => (
        <Grid.Col span={3} key={s.label}>
          <Paper radius="lg" p="lg" shadow="sm" style={{ background: "#fff" }}>
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

// ─── Grade Ring ───────────────────────────────────────────────────────────────
function GradeRing() {
  const { label, color } = gradeLabel(student.overallGrade);
  return (
    <Paper radius="lg" p="lg" shadow="sm" h="100%">
      <Text fw={700} fz={14} mb="md" c="dark.7">
        Grade Overview
      </Text>
      <Flex direction="column" align="center">
        <RingProgress
          size={140}
          thickness={14}
          roundCaps
          sections={[{ value: student.overallGrade, color: "teal" }]}
          label={
            <Text ta="center" fw={800} fz={22} c="teal.6">
              {student.overallGrade}
            </Text>
          }
        />
        <Badge color={color} size="lg" mt={8} radius="xl">
          {label} Grade
        </Badge>
        <Text fz={12} c="dimmed" mt={6}>
          {student.department}
        </Text>
        <Text fz={12} c="dimmed">
          {student.year}
        </Text>
      </Flex>
      <Divider my="md" />
      <Stack gap={8}>
        {courses
          .filter((c) => c.published && weightedTotal(c) !== null)
          .map((c) => {
            const wt = weightedTotal(c)!;
            const g = gradeLabel(wt);
            return (
              <Group key={c.code} justify="space-between">
                <Text
                  fz={12}
                  c="dimmed"
                  style={{ maxWidth: 130 }}
                  lineClamp={1}
                >
                  {c.name}
                </Text>
                <Badge color={g.color} size="sm" variant="light">
                  {wt}/100
                </Badge>
              </Group>
            );
          })}
      </Stack>
    </Paper>
  );
}

// ─── Course Cards ─────────────────────────────────────────────────────────────
function CourseCards() {
  return (
    <Box>
      <Text fw={700} fz={14} mb="md" c="dark.7">
        My Courses — Mark Breakdown
      </Text>
      <Stack gap="md">
        {courses.map((c) => {
          const total = weightedTotal(c);
          const { label, color } = gradeLabel(total);
          return (
            <Paper key={c.code} radius="lg" p="lg" shadow="sm">
              <Group justify="space-between" mb={10}>
                <Group gap={10}>
                  <ThemeIcon size={36} radius="md" color="teal" variant="light">
                    <IconFolderOpen size={18} />
                  </ThemeIcon>
                  <Box>
                    <Text fw={700} fz={13}>
                      {c.name}
                    </Text>
                    <Text fz={11} c="dimmed">
                      {c.code}
                    </Text>
                  </Box>
                </Group>
                <Group gap={8}>
                  <TrendBadge trend={c.trend} />
                  {c.published && total !== null && (
                    <Badge color={color} size="sm" radius="xl">
                      {total}/100 • {label}
                    </Badge>
                  )}
                  {!c.published && (
                    <Badge color="gray" size="sm" radius="xl" variant="outline">
                      Exam Pending
                    </Badge>
                  )}
                </Group>
              </Group>

              {/* Progress bars */}
              <Grid gap="xs">
                {[
                  {
                    label: `CAT 1 (${c.cat1.weight}%)`,
                    score: c.cat1.score,
                    max: c.cat1.max,
                  },
                  {
                    label: `CAT 2 (${c.cat2.weight}%)`,
                    score: c.cat2.score,
                    max: c.cat2.max,
                  },
                  {
                    label: `Exam (${c.exam.weight}%)`,
                    score: c.exam.score,
                    max: c.exam.max,
                  },
                ].map((item) => (
                  <Grid.Col span={4} key={item.label}>
                    <Text fz={11} c="dimmed" mb={4}>
                      {item.label}
                    </Text>
                    <Progress
                      value={
                        item.score !== null ? (item.score / item.max) * 100 : 0
                      }
                      color={
                        item.score !== null
                          ? item.score / item.max >= 0.6
                            ? "teal"
                            : "orange"
                          : "gray"
                      }
                      radius="xl"
                      size="sm"
                    />
                    <Text fz={11} mt={3} fw={600} c="dark.6">
                      {item.score !== null ? `${item.score}/${item.max}` : "—"}
                    </Text>
                  </Grid.Col>
                ))}
              </Grid>
            </Paper>
          );
        })}
      </Stack>
    </Box>
  );
}

// ─── AI Alerts Panel ─────────────────────────────────────────────────────────
function AIAlertsPanel() {
  return (
    <Paper radius="lg" p="lg" shadow="sm" mb="md">
      <Group mb="md" gap={8}>
        <ThemeIcon size={28} radius="md" color="amber" variant="light">
          <IconBrain size={15} />
        </ThemeIcon>
        <Text fw={700} fz={14} c="dark.7">
          AI Performance Alerts
        </Text>
      </Group>
      <Stack gap="md">
        {aiAlerts.map((a, i) => (
          <Box
            key={i}
            p="md"
            style={{
              borderRadius: rem(12),
              background: a.severity === "high" ? "#fff5f5" : "#f0fdf9",
              border: `1px solid ${a.severity === "high" ? "#fcd5d5" : "#b2f2e0"}`,
            }}
          >
            <Group justify="space-between" mb={6}>
              <Badge
                color={a.severity === "high" ? "red" : "teal"}
                size="xs"
                radius="xl"
              >
                {a.severity === "high" ? "⚠ At Risk" : "✓ Performing Well"}
              </Badge>
              <Text fz={10} c="dimmed">
                {a.time}
              </Text>
            </Group>
            <Text fz={12} fw={600} mb={4} c="dark.8">
              {a.course}
            </Text>
            <Text fz={12} c="dark.5" lh={1.6}>
              {a.message}
            </Text>
          </Box>
        ))}
      </Stack>
    </Paper>
  );
}

// ─── Upcoming Assessments ────────────────────────────────────────────────────
function UpcomingAssessments() {
  return (
    <Paper radius="lg" p="lg" shadow="sm">
      <Group mb="md" gap={8}>
        <ThemeIcon size={28} radius="md" color="blue" variant="light">
          <IconClock size={15} />
        </ThemeIcon>
        <Text fw={700} fz={14} c="dark.7">
          Upcoming Assessments
        </Text>
      </Group>
      <Stack gap={12}>
        {upcomingAssessments.map((a, i) => (
          <Group
            key={i}
            justify="space-between"
            p="sm"
            style={{ background: "#f8f9fa", borderRadius: rem(10) }}
          >
            <Box>
              <Text fz={12} fw={600}>
                {a.name}
              </Text>
              <Text fz={11} c="dimmed">
                {a.course}
              </Text>
            </Box>
            <Box ta="right">
              <Text fz={12} fw={600} c="teal.6">
                {a.date}
              </Text>
              <Text fz={11} c="dimmed">
                {a.time}
              </Text>
            </Box>
          </Group>
        ))}
      </Stack>
    </Paper>
  );
}

// ─── Right Column (profile + teachers) ───────────────────────────────────────
function RightPanel() {
  const lecturers = [
    {
      name: "Dr. Kamau Njoroge",
      unit: "Database Systems, Algorithms",
      initials: "KN",
    },
    { name: "Ms. Amina Hassan", unit: "Software Engineering", initials: "AH" },
    { name: "Prof. James Otieno", unit: "Computer Networks", initials: "JO" },
  ];

  return (
    <Stack gap="md">
      {/* Student card */}
      <Paper radius="lg" p="lg" shadow="sm">
        <Stack align="center" gap={6}>
          <Avatar size={60} radius="xl" color="teal" fw={700} fz={22}>
            FW
          </Avatar>
          <Text fw={700} fz={15} mt={4}>
            {student.name}
          </Text>
          <Text fz={11} c="dimmed" ta="center">
            {student.department}
          </Text>
          <Badge color="teal" radius="xl" size="sm">
            {student.year}
          </Badge>
        </Stack>
        <Divider my="md" />
        <Stack gap={6}>
          <Group justify="space-between">
            <Text fz={12} c="dimmed">
              Reg. Number
            </Text>
            <Text fz={12} fw={600}>
              {student.reg}
            </Text>
          </Group>
          <Group justify="space-between">
            <Text fz={12} c="dimmed">
              AVR Grade
            </Text>
            <Text fz={12} fw={700} c="teal.6">
              {student.overallGrade}/100
            </Text>
          </Group>
          <Group justify="space-between">
            <Text fz={12} c="dimmed">
              Units Enrolled
            </Text>
            <Text fz={12} fw={600}>
              4
            </Text>
          </Group>
        </Stack>
        <Button fullWidth mt="md" color="teal" radius="xl" size="sm">
          View Full Transcript
        </Button>
      </Paper>

      <GradeRing />

      {/* Lecturers */}
      <Paper radius="lg" p="lg" shadow="sm">
        <Group mb="md" gap={8}>
          <ThemeIcon size={28} radius="md" color="grape" variant="light">
            <IconUsers size={15} />
          </ThemeIcon>
          <Text fw={700} fz={14} c="dark.7">
            Your Lecturers
          </Text>
        </Group>
        <Stack gap={10}>
          {lecturers.map((l) => (
            <Group key={l.name} gap={10}>
              <Avatar size={36} radius="xl" color="grape">
                {l.initials}
              </Avatar>
              <Box>
                <Text fz={12} fw={600}>
                  {l.name}
                </Text>
                <Text fz={11} c="dimmed" lineClamp={1}>
                  {l.unit}
                </Text>
              </Box>
            </Group>
          ))}
        </Stack>
      </Paper>
    </Stack>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function StudentDashboard() {
  return (
    <MantineProvider theme={theme}>
      {/* Google Fonts — add to your Next.js layout <head> or use next/font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; background: #f4f6f8; }
      `}</style>

      <Flex style={{ minHeight: "100vh" }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main */}
        <Box flex={1} style={{ overflow: "auto" }}>
          <Header />

          <Box px={28} py={24}>
            {/* Greeting */}
            <Box mb="xl">
              <Title
                order={2}
                fz={26}
                fw={700}
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                Hello, Faith! 👋
              </Title>
              <Text fz={14} c="dimmed">
                Here is your current academic performance summary.
              </Text>
            </Box>

            {/* Stats */}
            <StatsStrip />

            {/* Body Grid */}
            <Grid gap="lg">
              {/* Left — courses + AI alerts */}
              <Grid.Col span={8}>
                <AIAlertsPanel />
                <CourseCards />
              </Grid.Col>

              {/* Right column */}
              <Grid.Col span={4}>
                <RightPanel />
                <Box mt="md">
                  <UpcomingAssessments />
                </Box>
              </Grid.Col>
            </Grid>
          </Box>
        </Box>
      </Flex>
    </MantineProvider>
  );
}
