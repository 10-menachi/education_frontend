"use client";

// ─────────────────────────────────────────────────────────────────────────────
// Vibetech Education — Lecturer Dashboard
// Stack: Next.js (App Router) + Mantine v7
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from "react";
import {
  ActionIcon,
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Group,
  Indicator,
  MantineProvider,
  Menu,
  NavLink,
  Paper,
  Popover,
  Progress,
  RingProgress,
  ScrollArea,
  Stack,
  Table,
  Text,
  TextInput,
  ThemeIcon,
  Title,
  Tooltip,
  UnstyledButton,
  createTheme,
  rem,
} from "@mantine/core";
import {
  IconAlertTriangle,
  IconBell,
  IconBrain,
  IconChartBar,
  IconChartLine,
  IconCheck,
  IconChevronRight,
  IconCirclePlus,
  IconCloudDownload,
  IconDots,
  IconFileExport,
  IconFileSpreadsheet,
  IconFile,
  IconFolderOpen,
  IconLogout,
  IconMail,
  IconPencil,
  IconPlus,
  IconRefresh,
  IconSearch,
  IconSettings,
  IconSend,
  IconTrendingDown,
  IconTrendingUp,
  IconUpload,
  IconUser,
  IconUsers,
  IconUsersGroup,
  IconKey,
  IconHelp,
  IconX,
  IconExternalLink,
  IconClock,
  IconShieldCheck,
  IconBuildingCommunity,
} from "@tabler/icons-react";

// ─── Theme ───────────────────────────────────────────────────────────────────
const theme = createTheme({
  primaryColor: "indigo",
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  headings: { fontFamily: "'Plus Jakarta Sans', sans-serif" },
  colors: {
    indigo: [
      "#eef2ff",
      "#e0e7ff",
      "#c7d2fe",
      "#a5b4fc",
      "#818cf8",
      "#6366f1",
      "#4f46e5",
      "#4338ca",
      "#3730a3",
      "#312e81",
    ],
    teal: [
      "#f0fdfa",
      "#ccfbf1",
      "#99f6e4",
      "#5eead4",
      "#2dd4bf",
      "#14b8a6",
      "#0d9488",
      "#0f766e",
      "#115e59",
      "#134e4a",
    ],
    rose: [
      "#fff1f2",
      "#ffe4e6",
      "#fecdd3",
      "#fda4af",
      "#fb7185",
      "#f43f5e",
      "#e11d48",
      "#be123c",
      "#9f1239",
      "#881337",
    ],
  },
  radius: { md: rem(12), lg: rem(16), xl: rem(24) },
  shadows: {
    sm: "0 1px 4px rgba(0,0,0,0.06)",
    md: "0 4px 20px rgba(0,0,0,0.08)",
    lg: "0 8px 36px rgba(0,0,0,0.11)",
  },
});

// ─── Mock Data ────────────────────────────────────────────────────────────────
const lecturer = {
  name: "Dr. Kamau Njoroge",
  title: "Senior Lecturer — CS",
  email: "k.njoroge@strathmore.edu",
  department: "Computer Science",
  avatar: "KN",
  employeeId: "STR/LECT/2019/042",
};

const classes = [
  {
    id: 1,
    code: "CS 301",
    name: "Database Systems",
    students: 48,
    published: 2,
    totalAssessments: 3,
    avgScore: 64.2,
    atRisk: 9,
    trend: "down",
    structure: [
      { name: "CAT 1", weight: 15 },
      { name: "CAT 2", weight: 15 },
      { name: "Final Exam", weight: 70 },
    ],
  },
  {
    id: 2,
    code: "CS 312",
    name: "Algorithms & DS",
    students: 52,
    published: 3,
    totalAssessments: 3,
    avgScore: 71.5,
    atRisk: 5,
    trend: "up",
    structure: [
      { name: "CAT 1", weight: 15 },
      { name: "CAT 2", weight: 15 },
      { name: "Final Exam", weight: 70 },
    ],
  },
  {
    id: 3,
    code: "CS 325",
    name: "Software Engineering",
    students: 39,
    published: 2,
    totalAssessments: 3,
    avgScore: 68.0,
    atRisk: 6,
    trend: "stable",
    structure: [
      { name: "CAT 1", weight: 15 },
      { name: "CAT 2", weight: 15 },
      { name: "Project", weight: 70 },
    ],
  },
];

const atRiskStudents = [
  {
    name: "Faith Wanjiku",
    reg: "CS/2021/043",
    course: "Database Systems",
    score: 47,
    cat1: "12/30",
    cat2: "15/30",
    exam: "34/70",
    reason:
      "Consistent underperformance. Foundational gaps in normalisation & SQL.",
  },
  {
    name: "Brian Omondi",
    reg: "CS/2021/078",
    course: "Database Systems",
    score: 42,
    cat1: "10/30",
    cat2: "12/30",
    exam: "30/70",
    reason:
      "Below class average in all three components. Recommend early intervention.",
  },
  {
    name: "Cynthia Akinyi",
    reg: "CS/2021/112",
    course: "Algorithms & DS",
    score: 51,
    cat1: "16/30",
    cat2: "14/30",
    exam: "36/70",
    reason:
      "Dropped 2 points from CAT 1 to CAT 2. Revise recursion and graph traversal.",
  },
  {
    name: "Dennis Mwangi",
    reg: "CS/2021/055",
    course: "Software Engineering",
    score: 49,
    cat1: "18/30",
    cat2: "13/30",
    exam: "33/70",
    reason:
      "Significant dip in CAT 2. Engagement and attendance may be factors.",
  },
  {
    name: "Eunice Chebet",
    reg: "CS/2021/090",
    course: "Database Systems",
    score: 45,
    cat1: "11/30",
    cat2: "14/30",
    exam: "32/70",
    reason:
      "Struggling with complex joins and indexing. Peer-study group recommended.",
  },
];

const recentActivity = [
  {
    action: "Marks published",
    detail: "CS 312 — CAT 2",
    time: "2 hrs ago",
    icon: IconCheck,
    color: "teal",
  },
  {
    action: "AI insights generated",
    detail: "CS 301 nightly analysis",
    time: "6 hrs ago",
    icon: IconBrain,
    color: "indigo",
  },
  {
    action: "9 students invited",
    detail: "CS 325 — bulk CSV import",
    time: "Yesterday",
    icon: IconMail,
    color: "blue",
  },
  {
    action: "Report exported",
    detail: "CS 312 mark sheet (Excel)",
    time: "2 days ago",
    icon: IconFileSpreadsheet,
    color: "green",
  },
  {
    action: "AI alert sent",
    detail: "5 at-risk students — CS 301",
    time: "2 days ago",
    icon: IconAlertTriangle,
    color: "orange",
  },
];

const aiInsights = [
  {
    course: "Database Systems",
    severity: "high",
    time: "Today, 06:00 AM",
    message:
      "9 of 48 students (18.8%) are performing below 50%. Class average of 64.2 is 6 points below the departmental benchmark. Consider a revision session focusing on normalisation and transaction management before the exam window.",
  },
  {
    course: "Algorithms & DS",
    severity: "good",
    time: "Yesterday, 06:00 AM",
    message:
      "Class average improved from 67.1 (CAT 1) to 71.5 (CAT 2). Top quartile performing strongly. Monitor the bottom 5 students — they may need targeted support on dynamic programming.",
  },
];

// Lecturer notifications
const notifications = [
  {
    id: 1,
    read: false,
    title: "AI Alert — 9 Students at Risk",
    body: "CS 301 nightly analysis flagged 9 students performing below 50%. Review and send interventions.",
    time: "Today, 06:00 AM",
    icon: IconAlertTriangle,
    color: "red",
  },
  {
    id: 2,
    read: false,
    title: "CSV Import Complete",
    body: "39 students successfully imported into CS 325 Software Engineering.",
    time: "3 hrs ago",
    icon: IconCheck,
    color: "teal",
  },
  {
    id: 3,
    read: false,
    title: "AI Insights Ready",
    body: "Nightly analysis complete for all 3 classes. 2 class-level summaries available.",
    time: "6 hrs ago",
    icon: IconBrain,
    color: "indigo",
  },
  {
    id: 4,
    read: true,
    title: "Mark Sheet Export",
    body: "CS 312 Excel mark sheet was downloaded successfully.",
    time: "Yesterday",
    icon: IconFileSpreadsheet,
    color: "green",
  },
  {
    id: 5,
    read: true,
    title: "Student Alert Delivered",
    body: "5 at-risk students in CS 301 received personalised AI feedback emails.",
    time: "2 days ago",
    icon: IconMail,
    color: "blue",
  },
];

// Search suggestions for lecturer
const searchSuggestions = [
  {
    group: "Classes",
    items: [
      {
        label: "Database Systems",
        sub: "CS 301 · 48 students · 9 at risk",
        icon: IconFolderOpen,
      },
      {
        label: "Algorithms & DS",
        sub: "CS 312 · 52 students · Improving",
        icon: IconFolderOpen,
      },
      {
        label: "Software Engineering",
        sub: "CS 325 · 39 students",
        icon: IconFolderOpen,
      },
    ],
  },
  {
    group: "Students",
    items: [
      {
        label: "Faith Wanjiku",
        sub: "CS/2021/043 · Database Systems · At Risk",
        icon: IconUser,
      },
      {
        label: "Brian Omondi",
        sub: "CS/2021/078 · Database Systems · At Risk",
        icon: IconUser,
      },
      {
        label: "Cynthia Akinyi",
        sub: "CS/2021/112 · Algorithms & DS",
        icon: IconUser,
      },
    ],
  },
  {
    group: "Quick Actions",
    items: [
      {
        label: "Import Students (CSV)",
        sub: "Bulk enrol students into a class",
        icon: IconUpload,
      },
      {
        label: "AI Insights",
        sub: "View nightly AI class analysis",
        icon: IconBrain,
      },
      {
        label: "Export Reports",
        sub: "Download mark sheets or result slips",
        icon: IconFileExport,
      },
    ],
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────
function gradeColor(score: number) {
  if (score >= 70) return "teal";
  if (score >= 60) return "blue";
  if (score >= 50) return "yellow";
  if (score >= 40) return "orange";
  return "red";
}

function TrendBadge({ trend }: { trend: string }) {
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
      <Badge
        color="red"
        variant="light"
        size="xs"
        leftSection={<IconTrendingDown size={10} />}
      >
        Declining
      </Badge>
    );
  return (
    <Badge color="gray" variant="light" size="xs">
      Stable
    </Badge>
  );
}

// ─── Search Popover ───────────────────────────────────────────────────────────
function SearchBar() {
  const [opened, setOpened] = useState(false);
  const [query, setQuery] = useState("");

  const filtered =
    query.trim().length > 0
      ? searchSuggestions
          .map((g) => ({
            ...g,
            items: g.items.filter(
              (i) =>
                i.label.toLowerCase().includes(query.toLowerCase()) ||
                i.sub.toLowerCase().includes(query.toLowerCase()),
            ),
          }))
          .filter((g) => g.items.length > 0)
      : searchSuggestions;

  return (
    <Popover
      opened={opened}
      onClose={() => {
        setOpened(false);
        setQuery("");
      }}
      width={400}
      position="bottom-start"
      shadow="lg"
      radius="lg"
      offset={8}
    >
      <Popover.Target>
        <Box onClick={() => setOpened(true)} style={{ cursor: "pointer" }}>
          {opened ? (
            <TextInput
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.currentTarget.value)}
              placeholder="Search classes, students, actions…"
              leftSection={<IconSearch size={15} color="#94a3b8" />}
              rightSection={
                query ? (
                  <ActionIcon
                    size="xs"
                    variant="subtle"
                    color="gray"
                    onClick={() => setQuery("")}
                  >
                    <IconX size={12} />
                  </ActionIcon>
                ) : null
              }
              styles={{
                input: {
                  background: "#f8fafc",
                  border: "2px solid #6366f1",
                  borderRadius: rem(10),
                  fontSize: 13,
                  width: 300,
                },
              }}
            />
          ) : (
            <Group
              gap={10}
              style={{
                background: "#f8fafc",
                borderRadius: rem(10),
                padding: "9px 14px",
                width: 300,
              }}
            >
              <IconSearch size={15} color="#94a3b8" />
              <Text fz={13} c="dimmed">
                Search classes, students…
              </Text>
              <Box style={{ marginLeft: "auto" }}>
                <Badge
                  size="xs"
                  variant="outline"
                  color="gray"
                  radius="sm"
                  style={{ fontFamily: "monospace" }}
                >
                  ⌘K
                </Badge>
              </Box>
            </Group>
          )}
        </Box>
      </Popover.Target>

      <Popover.Dropdown
        p={0}
        style={{ border: "1px solid #e2e8f0", overflow: "hidden" }}
      >
        <ScrollArea.Autosize mah={400}>
          {filtered.length === 0 ? (
            <Box p="lg" ta="center">
              <Text fz={13} c="dimmed">
                No results for "{query}"
              </Text>
            </Box>
          ) : (
            <Stack gap={0} p="xs">
              {filtered.map((group) => (
                <Box key={group.group} mb={4}>
                  <Text
                    fz={10}
                    fw={700}
                    c="dimmed"
                    px={8}
                    py={6}
                    style={{
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {group.group}
                  </Text>
                  {group.items.map((item) => (
                    <UnstyledButton
                      key={item.label}
                      w="100%"
                      px={8}
                      py={8}
                      style={{ borderRadius: rem(8) }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background = "#f1f5f9")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "transparent")
                      }
                      onClick={() => {
                        setOpened(false);
                        setQuery("");
                      }}
                    >
                      <Group gap={10}>
                        <ThemeIcon
                          size={32}
                          radius="md"
                          color="indigo"
                          variant="light"
                        >
                          <item.icon size={15} />
                        </ThemeIcon>
                        <Box>
                          <Text fz={13} fw={500}>
                            {item.label}
                          </Text>
                          <Text fz={11} c="dimmed">
                            {item.sub}
                          </Text>
                        </Box>
                        <IconChevronRight
                          size={13}
                          color="#cbd5e1"
                          style={{ marginLeft: "auto" }}
                        />
                      </Group>
                    </UnstyledButton>
                  ))}
                </Box>
              ))}
            </Stack>
          )}
        </ScrollArea.Autosize>
        <Box
          px="md"
          py={10}
          style={{ borderTop: "1px solid #f1f5f9", background: "#f8fafc" }}
        >
          <Group gap={12}>
            <Text fz={11} c="dimmed">
              <kbd
                style={{
                  fontFamily: "monospace",
                  background: "#e2e8f0",
                  padding: "1px 5px",
                  borderRadius: 4,
                  fontSize: 10,
                }}
              >
                ↵
              </kbd>{" "}
              to select
            </Text>
            <Text fz={11} c="dimmed">
              <kbd
                style={{
                  fontFamily: "monospace",
                  background: "#e2e8f0",
                  padding: "1px 5px",
                  borderRadius: 4,
                  fontSize: 10,
                }}
              >
                Esc
              </kbd>{" "}
              to close
            </Text>
          </Group>
        </Box>
      </Popover.Dropdown>
    </Popover>
  );
}

// ─── Notification Dropdown ────────────────────────────────────────────────────
function NotificationBell() {
  const [notifs, setNotifs] = useState(notifications);
  const unread = notifs.filter((n) => !n.read).length;

  const markAllRead = () =>
    setNotifs((prev) => prev.map((n) => ({ ...n, read: true })));
  const markRead = (id: number) =>
    setNotifs((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n)),
    );
  const dismiss = (id: number) =>
    setNotifs((prev) => prev.filter((n) => n.id !== id));

  return (
    <Menu
      width={380}
      position="bottom-end"
      shadow="lg"
      radius="lg"
      offset={8}
      closeOnItemClick={false}
    >
      <Menu.Target>
        <Box style={{ cursor: "pointer" }}>
          <Indicator
            color="red"
            size={unread > 0 ? 18 : 0}
            offset={4}
            label={unread > 0 ? String(unread) : ""}
            styles={{ indicator: { fontSize: 10, fontWeight: 700 } }}
          >
            <ActionIcon variant="light" color="gray" radius="xl" size="lg">
              <IconBell size={17} />
            </ActionIcon>
          </Indicator>
        </Box>
      </Menu.Target>

      <Menu.Dropdown
        p={0}
        style={{ border: "1px solid #e2e8f0", overflow: "hidden" }}
      >
        {/* Header */}
        <Flex
          align="center"
          justify="space-between"
          px="md"
          py={14}
          style={{ borderBottom: "1px solid #f1f5f9" }}
        >
          <Group gap={8}>
            <Text fw={700} fz={14} c="dark.8">
              Notifications
            </Text>
            {unread > 0 && (
              <Badge color="red" size="sm" circle>
                {unread}
              </Badge>
            )}
          </Group>
          {unread > 0 && (
            <UnstyledButton onClick={markAllRead}>
              <Text fz={12} c="indigo.5" fw={500}>
                Mark all read
              </Text>
            </UnstyledButton>
          )}
        </Flex>

        <ScrollArea.Autosize mah={400}>
          <Stack gap={0}>
            {notifs.map((n, i) => (
              <Box key={n.id}>
                <Box
                  px="md"
                  py={12}
                  onClick={() => markRead(n.id)}
                  style={{
                    background: n.read ? "transparent" : "#eef2ff",
                    cursor: "pointer",
                    transition: "background 0.15s",
                    position: "relative",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLDivElement).style.background =
                      n.read ? "#f8fafc" : "#e0e7ff")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLDivElement).style.background =
                      n.read ? "transparent" : "#eef2ff")
                  }
                >
                  <Group gap={12} align="flex-start">
                    <ThemeIcon
                      size={36}
                      radius="xl"
                      color={n.color}
                      variant="light"
                      mt={2}
                    >
                      <n.icon size={17} />
                    </ThemeIcon>
                    <Box flex={1}>
                      <Group justify="space-between" mb={2} align="flex-start">
                        <Text
                          fz={13}
                          fw={n.read ? 500 : 700}
                          c="dark.8"
                          style={{ flex: 1, paddingRight: 8 }}
                        >
                          {n.title}
                        </Text>
                        <Group gap={4}>
                          {!n.read && (
                            <Box
                              style={{
                                width: 7,
                                height: 7,
                                borderRadius: "50%",
                                background: "#6366f1",
                                flexShrink: 0,
                                marginTop: 4,
                              }}
                            />
                          )}
                          <ActionIcon
                            size="xs"
                            variant="subtle"
                            color="gray"
                            onClick={(e) => {
                              e.stopPropagation();
                              dismiss(n.id);
                            }}
                          >
                            <IconX size={11} />
                          </ActionIcon>
                        </Group>
                      </Group>
                      <Text fz={12} c="dimmed" lh={1.5} lineClamp={2}>
                        {n.body}
                      </Text>
                      <Text fz={11} c="dimmed" mt={4}>
                        {n.time}
                      </Text>
                    </Box>
                  </Group>
                </Box>
                {i < notifs.length - 1 && <Divider />}
              </Box>
            ))}
            {notifs.length === 0 && (
              <Box p="xl" ta="center">
                <ThemeIcon
                  size={40}
                  radius="xl"
                  color="gray"
                  variant="light"
                  mx="auto"
                  mb={8}
                >
                  <IconBell size={20} />
                </ThemeIcon>
                <Text fz={13} c="dimmed">
                  All caught up!
                </Text>
              </Box>
            )}
          </Stack>
        </ScrollArea.Autosize>

        <Box
          px="md"
          py={12}
          style={{ borderTop: "1px solid #f1f5f9", background: "#f8fafc" }}
        >
          <Button
            variant="subtle"
            color="indigo"
            size="xs"
            fullWidth
            rightSection={<IconExternalLink size={12} />}
          >
            View all notifications
          </Button>
        </Box>
      </Menu.Dropdown>
    </Menu>
  );
}

// ─── User Dropdown ────────────────────────────────────────────────────────────
function UserMenu() {
  const totalStudents = classes.reduce((a, c) => a + c.students, 0);
  const totalAtRisk = classes.reduce((a, c) => a + c.atRisk, 0);

  return (
    <Menu width={280} position="bottom-end" shadow="lg" radius="lg" offset={8}>
      <Menu.Target>
        <UnstyledButton style={{ cursor: "pointer" }}>
          <Group gap={10}>
            <Avatar size={36} radius="xl" color="indigo">
              {lecturer.avatar}
            </Avatar>
            <Box>
              <Text fz={13} fw={600} lh={1.2}>
                {lecturer.name}
              </Text>
              <Text fz={11} c="dimmed">
                Lecturer
              </Text>
            </Box>
          </Group>
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown style={{ border: "1px solid #e2e8f0" }}>
        {/* Profile header */}
        <Box
          px="md"
          py={14}
          style={{
            background: "linear-gradient(135deg, #eef2ff 0%, #fff 80%)",
            borderBottom: "1px solid #e2e8f0",
          }}
        >
          <Group gap={12}>
            <Avatar size={46} radius="xl" color="indigo" fw={700} fz={18}>
              {lecturer.avatar}
            </Avatar>
            <Box>
              <Text fz={14} fw={700} c="dark.8">
                {lecturer.name}
              </Text>
              <Text fz={11} c="dimmed">
                {lecturer.email}
              </Text>
              <Badge color="indigo" size="xs" radius="xl" mt={4}>
                {lecturer.department}
              </Badge>
            </Box>
          </Group>
        </Box>

        {/* Quick stats */}
        <Box px="md" py={10} style={{ borderBottom: "1px solid #f1f5f9" }}>
          <Grid gap={8}>
            <Grid.Col span={4}>
              <Box
                ta="center"
                p={6}
                style={{ background: "#f8fafc", borderRadius: rem(8) }}
              >
                <Text fz={16} fw={800} c="indigo.6">
                  {classes.length}
                </Text>
                <Text fz={10} c="dimmed">
                  Classes
                </Text>
              </Box>
            </Grid.Col>
            <Grid.Col span={4}>
              <Box
                ta="center"
                p={6}
                style={{ background: "#f8fafc", borderRadius: rem(8) }}
              >
                <Text fz={16} fw={800} c="teal.6">
                  {totalStudents}
                </Text>
                <Text fz={10} c="dimmed">
                  Students
                </Text>
              </Box>
            </Grid.Col>
            <Grid.Col span={4}>
              <Box
                ta="center"
                p={6}
                style={{ background: "#fff5f5", borderRadius: rem(8) }}
              >
                <Text fz={16} fw={800} c="red.6">
                  {totalAtRisk}
                </Text>
                <Text fz={10} c="dimmed">
                  At Risk
                </Text>
              </Box>
            </Grid.Col>
          </Grid>
        </Box>

        <Box py={6}>
          <Menu.Item leftSection={<IconUser size={15} />}>My Profile</Menu.Item>
          <Menu.Item leftSection={<IconBuildingCommunity size={15} />}>
            Department Portal
          </Menu.Item>
          <Menu.Item leftSection={<IconBrain size={15} />}>
            AI Insights
            <Badge size="xs" color="indigo" ml={6}>
              3 new
            </Badge>
          </Menu.Item>
          <Menu.Item leftSection={<IconShieldCheck size={15} />}>
            Privacy & Data
          </Menu.Item>
          <Menu.Item leftSection={<IconKey size={15} />}>
            Change Password
          </Menu.Item>
          <Menu.Item leftSection={<IconSettings size={15} />}>
            Account Settings
          </Menu.Item>
        </Box>

        <Divider />

        <Box py={6}>
          <Menu.Item leftSection={<IconHelp size={15} />} color="gray">
            Help & Documentation
          </Menu.Item>
          <Menu.Item leftSection={<IconLogout size={15} />} color="red">
            Sign Out
          </Menu.Item>
        </Box>
      </Menu.Dropdown>
    </Menu>
  );
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────
function Sidebar() {
  const links = [
    { icon: IconFolderOpen, label: "Dashboard", active: true },
    { icon: IconUsersGroup, label: "My Classes" },
    { icon: IconChartLine, label: "Analytics" },
    { icon: IconBrain, label: "AI Insights", badge: "3" },
    { icon: IconFileExport, label: "Reports" },
    { icon: IconSettings, label: "Settings" },
  ];
  return (
    <Box
      style={{
        width: 230,
        minHeight: "100vh",
        background: "#0f172a",
        display: "flex",
        flexDirection: "column",
        padding: "28px 14px",
        flexShrink: 0,
      }}
    >
      <Group gap={10} mb={40} px={8}>
        <Box
          style={{
            width: 36,
            height: 36,
            borderRadius: 10,
            background: "linear-gradient(135deg, #6366f1, #14b8a6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconChartBar size={20} color="white" />
        </Box>
        <Box>
          <Text fw={700} fz={16} c="white" lh={1.1}>
            Vibetech
          </Text>
          <Text fz={10} c="rgba(255,255,255,0.35)" lh={1}>
            Education
          </Text>
        </Box>
      </Group>

      <Text
        fz={10}
        fw={600}
        c="rgba(255,255,255,0.3)"
        mb={8}
        px={8}
        style={{ letterSpacing: "0.1em", textTransform: "uppercase" }}
      >
        Navigation
      </Text>

      <Stack gap={2} flex={1}>
        {links.map((l) => (
          <NavLink
            key={l.label}
            label={
              <Group justify="space-between">
                <Text
                  fz={13}
                  fw={l.active ? 600 : 400}
                  c={l.active ? "white" : "rgba(255,255,255,0.55)"}
                >
                  {l.label}
                </Text>
                {l.badge && (
                  <Badge size="xs" color="indigo" circle>
                    {l.badge}
                  </Badge>
                )}
              </Group>
            }
            leftSection={
              <l.icon
                size={17}
                color={l.active ? "#818cf8" : "rgba(255,255,255,0.38)"}
              />
            }
            style={{
              borderRadius: rem(10),
              background: l.active ? "rgba(99,102,241,0.15)" : "transparent",
              borderLeft: l.active
                ? "2px solid #6366f1"
                : "2px solid transparent",
              padding: "10px 12px",
            }}
          />
        ))}
      </Stack>

      <Divider color="rgba(255,255,255,0.08)" mb={16} />

      <Box px={8} mb={16}>
        <Group gap={10}>
          <Avatar size={34} radius="xl" color="indigo">
            {lecturer.avatar}
          </Avatar>
          <Box style={{ flex: 1, overflow: "hidden" }}>
            <Text fz={12} fw={600} c="white" lineClamp={1}>
              {lecturer.name}
            </Text>
            <Text fz={10} c="rgba(255,255,255,0.4)">
              {lecturer.title}
            </Text>
          </Box>
        </Group>
      </Box>

      <NavLink
        label={
          <Text fz={13} c="rgba(255,255,255,0.4)">
            Log out
          </Text>
        }
        leftSection={<IconLogout size={15} color="rgba(255,255,255,0.3)" />}
        style={{ borderRadius: rem(10), padding: "8px 12px" }}
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
      py={14}
      style={{
        borderBottom: "1px solid #f1f5f9",
        background: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 200,
      }}
    >
      <SearchBar />
      <Text fz={13} c="dimmed" fw={500}>
        Thursday, 14 May 2026
      </Text>
      <Group gap={12}>
        <Button
          size="xs"
          leftSection={<IconCirclePlus size={14} />}
          variant="filled"
          color="indigo"
          radius="xl"
        >
          New Class
        </Button>
        <NotificationBell />
        <UserMenu />
      </Group>
    </Flex>
  );
}

// ─── Stats Strip ─────────────────────────────────────────────────────────────
function StatsStrip() {
  const totalStudents = classes.reduce((a, c) => a + c.students, 0);
  const totalAtRisk = classes.reduce((a, c) => a + c.atRisk, 0);
  const avgScore = (
    classes.reduce((a, c) => a + c.avgScore, 0) / classes.length
  ).toFixed(1);

  const stats = [
    {
      label: "Total Students",
      value: String(totalStudents),
      sub: "Across 3 classes",
      icon: IconUsers,
      color: "indigo",
      ring: Math.round((totalStudents / 200) * 100),
    },
    {
      label: "Class Average",
      value: `${avgScore}/100`,
      sub: "Weighted average",
      icon: IconChartBar,
      color: "teal",
      ring: parseFloat(avgScore),
    },
    {
      label: "At-Risk Students",
      value: String(totalAtRisk),
      sub: "Need intervention",
      icon: IconAlertTriangle,
      color: "rose",
      ring: Math.round((totalAtRisk / totalStudents) * 100),
    },
    {
      label: "Active Classes",
      value: String(classes.length),
      sub: "Sem 1 · 2025/26",
      icon: IconFolderOpen,
      color: "blue",
      ring: 75,
    },
  ];

  return (
    <Grid gap="md" mb="xl">
      {stats.map((s) => (
        <Grid.Col span={3} key={s.label}>
          <Paper radius="lg" p="lg" shadow="sm" style={{ background: "#fff" }}>
            <Group justify="space-between" align="flex-start">
              <Box>
                <Text
                  fz={10}
                  c="dimmed"
                  fw={600}
                  mb={4}
                  style={{
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  {s.label}
                </Text>
                <Text fz={26} fw={800} c={`${s.color}.6`} lh={1}>
                  {s.value}
                </Text>
                <Text fz={11} c="dimmed" mt={4}>
                  {s.sub}
                </Text>
              </Box>
              <RingProgress
                size={56}
                thickness={5}
                roundCaps
                sections={[{ value: s.ring, color: s.color }]}
                label={
                  <ThemeIcon
                    size={30}
                    radius="xl"
                    color={s.color}
                    variant="light"
                  >
                    <s.icon size={15} />
                  </ThemeIcon>
                }
              />
            </Group>
          </Paper>
        </Grid.Col>
      ))}
    </Grid>
  );
}

// ─── Class Cards ─────────────────────────────────────────────────────────────
function ClassCards() {
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

// ─── At-Risk Table ────────────────────────────────────────────────────────────
function AtRiskTable() {
  return (
    <Paper radius="lg" shadow="sm" mb="xl" style={{ overflow: "hidden" }}>
      <Flex
        align="center"
        justify="space-between"
        px="lg"
        py="md"
        style={{ borderBottom: "1px solid #f1f5f9" }}
      >
        <Group gap={8}>
          <ThemeIcon size={30} radius="md" color="rose" variant="light">
            <IconAlertTriangle size={15} />
          </ThemeIcon>
          <Box>
            <Text fw={700} fz={14} c="dark.8">
              At-Risk Students
            </Text>
            <Text fz={11} c="dimmed">
              AI-identified — requires intervention
            </Text>
          </Box>
        </Group>
        <Group gap={8}>
          <Button
            size="xs"
            variant="light"
            color="indigo"
            leftSection={<IconSend size={12} />}
          >
            Send Alerts
          </Button>
          <Button
            size="xs"
            variant="light"
            color="gray"
            leftSection={<IconRefresh size={12} />}
          >
            Refresh
          </Button>
        </Group>
      </Flex>

      <ScrollArea>
        <Table highlightOnHover style={{ minWidth: 800 }}>
          <Table.Thead style={{ background: "#f8fafc" }}>
            <Table.Tr>
              {[
                "Student",
                "Course",
                "CAT 1",
                "CAT 2",
                "Exam",
                "Total",
                "AI Note",
                "",
              ].map((h) => (
                <Table.Th
                  key={h}
                  style={{
                    fontSize: 11,
                    color: "#64748b",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {h}
                </Table.Th>
              ))}
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {atRiskStudents.map((s, i) => (
              <Table.Tr key={i}>
                <Table.Td>
                  <Group gap={8}>
                    <Avatar size={30} radius="xl" color="rose" fz={11}>
                      {s.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </Avatar>
                    <Box>
                      <Text fz={12} fw={600}>
                        {s.name}
                      </Text>
                      <Text fz={10} c="dimmed">
                        {s.reg}
                      </Text>
                    </Box>
                  </Group>
                </Table.Td>
                <Table.Td>
                  <Text fz={12} c="dimmed">
                    {s.course}
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Badge
                    size="sm"
                    color={parseInt(s.cat1) / 30 >= 0.6 ? "teal" : "orange"}
                    variant="light"
                  >
                    {s.cat1}
                  </Badge>
                </Table.Td>
                <Table.Td>
                  <Badge
                    size="sm"
                    color={parseInt(s.cat2) / 30 >= 0.6 ? "teal" : "orange"}
                    variant="light"
                  >
                    {s.cat2}
                  </Badge>
                </Table.Td>
                <Table.Td>
                  <Badge
                    size="sm"
                    color={parseInt(s.exam) / 70 >= 0.6 ? "teal" : "red"}
                    variant="light"
                  >
                    {s.exam}
                  </Badge>
                </Table.Td>
                <Table.Td>
                  <Text fz={13} fw={700} c={gradeColor(s.score)}>
                    {s.score}/100
                  </Text>
                </Table.Td>
                <Table.Td style={{ maxWidth: 220 }}>
                  <Text fz={11} c="dimmed" lineClamp={2}>
                    {s.reason}
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Group gap={4}>
                    <Tooltip label="Send alert">
                      <ActionIcon
                        size="sm"
                        variant="light"
                        color="indigo"
                        radius="md"
                      >
                        <IconMail size={12} />
                      </ActionIcon>
                    </Tooltip>
                    <Tooltip label="View profile">
                      <ActionIcon
                        size="sm"
                        variant="light"
                        color="gray"
                        radius="md"
                      >
                        <IconUser size={12} />
                      </ActionIcon>
                    </Tooltip>
                  </Group>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </ScrollArea>
    </Paper>
  );
}

// ─── AI Insights ─────────────────────────────────────────────────────────────
function AIInsightsPanel() {
  return (
    <Paper radius="lg" shadow="sm" style={{ overflow: "hidden" }}>
      <Flex
        align="center"
        justify="space-between"
        px="lg"
        py="md"
        style={{ borderBottom: "1px solid #f1f5f9" }}
      >
        <Group gap={8}>
          <ThemeIcon
            size={30}
            radius="md"
            variant="filled"
            style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
          >
            <IconBrain size={15} color="white" />
          </ThemeIcon>
          <Box>
            <Text fw={700} fz={14} c="dark.8">
              AI Class Insights
            </Text>
            <Text fz={11} c="dimmed">
              Generated nightly via Anthropic API
            </Text>
          </Box>
        </Group>
        <Badge color="indigo" variant="dot" size="sm">
          Live · 06:00 AM
        </Badge>
      </Flex>
      <Stack gap={0}>
        {aiInsights.map((ins, i) => (
          <Box
            key={i}
            p="lg"
            style={{
              borderBottom:
                i < aiInsights.length - 1 ? "1px solid #f1f5f9" : "none",
              background:
                ins.severity === "high"
                  ? "linear-gradient(90deg, #fff1f2 0%, #fff 50%)"
                  : "linear-gradient(90deg, #f0fdfa 0%, #fff 50%)",
            }}
          >
            <Group justify="space-between" mb={8}>
              <Group gap={8}>
                <Badge
                  color={ins.severity === "high" ? "rose" : "teal"}
                  size="xs"
                  radius="xl"
                  variant="filled"
                >
                  {ins.severity === "high"
                    ? "⚠ Action Required"
                    : "✓ Positive Trend"}
                </Badge>
                <Badge color="gray" size="xs" variant="outline">
                  {ins.course}
                </Badge>
              </Group>
              <Text fz={10} c="dimmed">
                {ins.time}
              </Text>
            </Group>
            <Text fz={13} c="dark.6" lh={1.7}>
              {ins.message}
            </Text>
            <Group gap={8} mt={10}>
              <Button
                size="xs"
                variant="subtle"
                color={ins.severity === "high" ? "rose" : "teal"}
                px={8}
              >
                View Full Analysis →
              </Button>
              <Button
                size="xs"
                variant="subtle"
                color="gray"
                px={8}
                leftSection={<IconSend size={11} />}
              >
                Forward to Students
              </Button>
            </Group>
          </Box>
        ))}
      </Stack>
    </Paper>
  );
}

// ─── Right Panel ─────────────────────────────────────────────────────────────
function RightPanel() {
  return (
    <Stack gap="md">
      <Paper radius="lg" p="lg" shadow="sm">
        <Text fw={700} fz={14} c="dark.8" mb="md">
          Quick Actions
        </Text>
        <Stack gap={8}>
          {[
            {
              label: "Import Students (CSV)",
              icon: IconUpload,
              color: "indigo",
            },
            { label: "Publish Results", icon: IconSend, color: "teal" },
            {
              label: "Export Mark Sheet",
              icon: IconFileSpreadsheet,
              color: "green",
            },
            {
              label: "Download Result Slips (PDF)",
              icon: IconFile,
              color: "rose",
            },
            {
              label: "Invite Students via Email",
              icon: IconMail,
              color: "blue",
            },
          ].map((a) => (
            <Button
              key={a.label}
              size="sm"
              variant="light"
              color={a.color}
              radius="md"
              leftSection={<a.icon size={15} />}
              justify="start"
              fullWidth
              styles={{ label: { fontSize: 12 } }}
            >
              {a.label}
            </Button>
          ))}
        </Stack>
      </Paper>

      <Paper radius="lg" p="lg" shadow="sm">
        <Text fw={700} fz={14} c="dark.8" mb="md">
          Recent Activity
        </Text>
        <Stack gap={0}>
          {recentActivity.map((a, i) => (
            <Box key={i}>
              <Group gap={10} py={10}>
                <ThemeIcon
                  size={30}
                  radius="xl"
                  color={a.color}
                  variant="light"
                >
                  <a.icon size={14} />
                </ThemeIcon>
                <Box flex={1}>
                  <Text fz={12} fw={600} c="dark.7">
                    {a.action}
                  </Text>
                  <Text fz={11} c="dimmed">
                    {a.detail}
                  </Text>
                </Box>
                <Text fz={10} c="dimmed" style={{ whiteSpace: "nowrap" }}>
                  {a.time}
                </Text>
              </Group>
              {i < recentActivity.length - 1 && <Divider />}
            </Box>
          ))}
        </Stack>
      </Paper>

      <Paper
        radius="lg"
        p="lg"
        shadow="sm"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)",
        }}
      >
        <Group gap={8} mb={10}>
          <ThemeIcon
            size={28}
            radius="md"
            style={{ background: "rgba(99,102,241,0.3)" }}
          >
            <IconBrain size={14} color="#a5b4fc" />
          </ThemeIcon>
          <Text fw={700} fz={13} c="white">
            AI Monitoring Status
          </Text>
        </Group>
        <Text fz={11} c="rgba(255,255,255,0.55)" mb={12} lh={1.6}>
          Nightly cron running. Last analysis completed at 06:00 AM today. Next
          run in 17 hrs.
        </Text>
        <Group gap={6} mb={12}>
          <Badge color="teal" size="xs" variant="dot">
            3 classes monitored
          </Badge>
          <Badge color="rose" size="xs" variant="dot">
            20 flagged
          </Badge>
        </Group>
        <Progress value={65} color="indigo" size="xs" radius="xl" mb={6} />
        <Text fz={10} c="rgba(255,255,255,0.3)">
          65% of students analysed this cycle
        </Text>
      </Paper>
    </Stack>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function LecturerDashboard() {
  return (
    <MantineProvider theme={theme}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; background: #f8fafc; }
      `}</style>

      <Flex style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Box flex={1} style={{ overflow: "auto" }}>
          <Header />
          <Box px={28} py={24}>
            <Flex justify="space-between" align="flex-start" mb="xl">
              <Box>
                <Title order={2} fz={26} fw={800} c="dark.9" lh={1.2}>
                  Good morning, Dr. Njoroge 👋
                </Title>
                <Text fz={14} c="dimmed" mt={4}>
                  You have{" "}
                  <Text span fw={600} c="red.6">
                    20 at-risk students
                  </Text>{" "}
                  and{" "}
                  <Text span fw={600} c="indigo.6">
                    3 AI insights
                  </Text>{" "}
                  awaiting review.
                </Text>
              </Box>
              <Group gap={8}>
                <Button
                  size="sm"
                  variant="light"
                  color="indigo"
                  leftSection={<IconPlus size={14} />}
                  radius="xl"
                >
                  Add Assessment
                </Button>
                <Button
                  size="sm"
                  variant="filled"
                  color="indigo"
                  leftSection={<IconCloudDownload size={14} />}
                  radius="xl"
                >
                  Export Reports
                </Button>
              </Group>
            </Flex>

            <StatsStrip />
            <ClassCards />

            <Grid gap="lg">
              <Grid.Col span={8}>
                <AtRiskTable />
                <AIInsightsPanel />
              </Grid.Col>
              <Grid.Col span={4}>
                <RightPanel />
              </Grid.Col>
            </Grid>
          </Box>
        </Box>
      </Flex>
    </MantineProvider>
  );
}
