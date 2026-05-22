"use client";

// ─────────────────────────────────────────────────────────────────────────────
// Vibetech Education — Landing Page
// Stack: Next.js (App Router) + Mantine v7
// Drop into: app/page.tsx
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect } from "react";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  Group,
  MantineProvider,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
  UnstyledButton,
  createTheme,
  rem,
} from "@mantine/core";
import {
  IconArrowRight,
  IconBrain,
  IconCheck,
  IconChartLine,
  IconFileSpreadsheet,
  IconMail,
  IconMenu2,
  IconShieldCheck,
  IconUsers,
  IconX,
  IconUpload,
  IconBolt,
  IconStar,
  IconQuote,
  IconAlertTriangle,
  IconClock,
} from "@tabler/icons-react";

// ─── Theme ───────────────────────────────────────────────────────────────────
const theme = createTheme({
  primaryColor: "teal",
  fontFamily: "'DM Sans', sans-serif",
  colors: {
    teal: [
      "#e6faf5",
      "#b3f0e0",
      "#80e5cb",
      "#4ddab6",
      "#1acfa1",
      "#00c896",
      "#00a07a",
      "#00785d",
      "#005041",
      "#002820",
    ],
  },
  radius: { md: rem(12), lg: rem(16), xl: rem(24) },
});

// ─── Data ─────────────────────────────────────────────────────────────────────
const features = [
  {
    icon: IconBrain,
    title: "AI-Powered Monitoring",
    color: "#00c896",
    description:
      "A nightly cron job analyses every student's marks via the Anthropic API and delivers natural-language performance insights directly to lecturers and students — no dashboard-checking required.",
  },
  {
    icon: IconChartLine,
    title: "Custom Grading Structures",
    color: "#6366f1",
    description:
      "Define any weighting you need — CAT 1 (15%) + CAT 2 (15%) + Exam (70%) — and let the system auto-calculate weighted totals instantly with zero rounding errors.",
  },
  {
    icon: IconUsers,
    title: "Student-Facing Feedback",
    color: "#f59e0b",
    description:
      "Students receive personalised, AI-generated feedback explaining where they stand and what to focus on — cutting the endless back-and-forth over marks.",
  },
  {
    icon: IconUpload,
    title: "Bulk CSV Import",
    color: "#ec4899",
    description:
      "Enrol hundreds of students in seconds. Upload a CSV, let duplicate detection run, and have invite emails fired automatically — no IT department needed.",
  },
  {
    icon: IconFileSpreadsheet,
    title: "Instant Reports",
    color: "#14b8a6",
    description:
      "Generate class mark sheets (Excel) and individual result slips (PDF) on demand. Everything a department or student needs, one click away.",
  },
  {
    icon: IconShieldCheck,
    title: "Invite-Only & Secure",
    color: "#8b5cf6",
    description:
      "Students can't self-register. Role-based access ensures every student sees only their own marks. Data encrypted at rest. Zero institutional license required.",
  },
];

const stats = [
  { value: "85.7%", label: "of surveyed lecturers would switch to Vibetech" },
  { value: "78.6%", label: "say mark entry is their most time-consuming task" },
  { value: "64.3%", label: "receive frequent student requests for marks" },
  { value: "35.7%", label: "still rely exclusively on Excel for grading" },
];

const testimonials = [
  {
    quote:
      "I used to spend two hours per class just fixing formula errors in Excel. Vibetech eliminated that entirely.",
    name: "Dr. Amina Hassan",
    role: "Lecturer, Software Engineering",
    initials: "AH",
    color: "#00c896",
  },
  {
    quote:
      "My students stopped emailing me about marks. The AI feedback gives them context I never had time to provide individually.",
    name: "Prof. James Otieno",
    role: "Lecturer, Computer Networks",
    initials: "JO",
    color: "#6366f1",
  },
  {
    quote:
      "Set up my entire class — grading structure, 48 students imported, invite emails sent — in under 20 minutes.",
    name: "Dr. Kamau Njoroge",
    role: "Senior Lecturer, Computer Science",
    initials: "KN",
    color: "#f59e0b",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Create a class",
    body: "Define your grading structure — any percentage split you need. Validated to sum to 100%.",
  },
  {
    step: "02",
    title: "Enrol students",
    body: "Add students manually or bulk-import via CSV. The system sends invite emails automatically.",
  },
  {
    step: "03",
    title: "Enter & publish marks",
    body: "Enter marks individually or import them. Weighted totals calculate instantly. Publish when ready.",
  },
  {
    step: "04",
    title: "AI works overnight",
    body: "A nightly cron job analyses every student's data and sends personalised alerts to lecturers and students.",
  },
];

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <Box
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <Container size="xl" py={16}>
        <Flex align="center" justify="space-between">
          <Group gap={10}>
            <Box
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: "linear-gradient(135deg, #00c896, #00785d)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconBrain size={20} color="white" />
            </Box>
            <Text
              fw={800}
              fz={20}
              style={{ fontFamily: "'Sora', sans-serif", color: "#0f172a" }}
            >
              Vibetech{" "}
              <Text span c="teal.5">
                Education
              </Text>
            </Text>
          </Group>

          <Group gap={32} visibleFrom="md">
            {["Features", "How It Works", "About"].map((link) => (
              <UnstyledButton
                key={link}
                style={{ color: "#475569", fontSize: 14, fontWeight: 500 }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#00c896")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
              >
                {link}
              </UnstyledButton>
            ))}
          </Group>

          <Group gap={12} visibleFrom="md">
            <Button variant="subtle" color="dark" size="sm" radius="xl">
              Sign in
            </Button>
            <Button
              size="sm"
              radius="xl"
              fw={600}
              style={{
                background: "linear-gradient(135deg, #00c896, #009973)",
              }}
            >
              Request Early Access
            </Button>
          </Group>

          <UnstyledButton
            hiddenFrom="md"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <IconX size={22} /> : <IconMenu2 size={22} />}
          </UnstyledButton>
        </Flex>

        {mobileOpen && (
          <Box py={16} hiddenFrom="md">
            <Stack gap={8}>
              {["Features", "How It Works", "About"].map((link) => (
                <Text key={link} fz={15} fw={500} c="dark.6" py={6}>
                  {link}
                </Text>
              ))}
              <Divider my={4} />
              <Button
                variant="subtle"
                color="dark"
                size="sm"
                radius="xl"
                fullWidth
              >
                Sign in
              </Button>
              <Button
                size="sm"
                radius="xl"
                fw={600}
                fullWidth
                style={{
                  background: "linear-gradient(135deg, #00c896, #009973)",
                }}
              >
                Request Early Access
              </Button>
            </Stack>
          </Box>
        )}
      </Container>
    </Box>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <Box
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(160deg, #f0fdf9 0%, #e6faf5 30%, #fafffe 60%, #f8fafc 100%)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        style={{
          position: "absolute",
          top: -120,
          right: -100,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,200,150,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <Box
        style={{
          position: "absolute",
          bottom: -80,
          left: -80,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Container size="xl" py={160} style={{ position: "relative", zIndex: 1 }}>
        <Grid gap={60} align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Badge
              color="teal"
              size="lg"
              radius="xl"
              mb={28}
              variant="light"
              leftSection={<IconStar size={13} />}
              style={{ paddingInline: 14 }}
            >
              Validated by 14 African university lecturers
            </Badge>

            <Title
              order={1}
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: 800,
                lineHeight: 1.1,
                color: "#0f172a",
                marginBottom: 24,
              }}
            >
              Grading that{" "}
              <Text
                span
                style={{
                  background: "linear-gradient(135deg, #00c896, #6366f1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                thinks for you
              </Text>
            </Title>

            <Text fz={18} c="dark.4" lh={1.7} mb={36} style={{ maxWidth: 520 }}>
              Vibetech Education replaces Excel grade books with an AI-powered
              platform built for African universities — automated calculations,
              real-time student results, and nightly AI insights delivered
              straight to your inbox.
            </Text>

            <Group gap={14} mb={48}>
              <Button
                size="lg"
                radius="xl"
                fw={700}
                rightSection={<IconArrowRight size={18} />}
                style={{
                  background: "linear-gradient(135deg, #00c896, #009973)",
                  paddingInline: 32,
                  height: 52,
                  boxShadow: "0 8px 24px rgba(0,200,150,0.35)",
                }}
              >
                Request Early Access
              </Button>
              <Button
                size="lg"
                radius="xl"
                variant="outline"
                color="dark"
                fw={600}
                style={{ paddingInline: 28, height: 52 }}
              >
                Watch Demo
              </Button>
            </Group>

            <Group gap={24}>
              {[
                { icon: IconShieldCheck, label: "Invite-only security" },
                { icon: IconBolt, label: "No IT setup required" },
                { icon: IconBrain, label: "Anthropic API powered" },
              ].map((item) => (
                <Group key={item.label} gap={6}>
                  <item.icon size={16} color="#00c896" />
                  <Text fz={13} c="dark.4" fw={500}>
                    {item.label}
                  </Text>
                </Group>
              ))}
            </Group>
          </Grid.Col>

          {/* Hero visual */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box style={{ position: "relative" }}>
              {/* Floating AI alert card */}
              <Paper
                radius="xl"
                p="lg"
                shadow="lg"
                style={{
                  position: "absolute",
                  top: -30,
                  right: -20,
                  zIndex: 10,
                  width: 260,
                  background: "#fff",
                  border: "1px solid rgba(0,200,150,0.2)",
                  animation: "float 4s ease-in-out infinite",
                }}
              >
                <Group gap={8} mb={8}>
                  <ThemeIcon size={28} radius="md" color="teal" variant="light">
                    <IconBrain size={14} />
                  </ThemeIcon>
                  <Text fz={11} fw={700} c="dark.8">
                    AI Alert — 06:00 AM
                  </Text>
                </Group>
                <Text fz={11} c="dark.5" lh={1.6}>
                  Faith scored 34/70 on the exam — 17 pts below class avg.
                  Recommend SQL revision before resit.
                </Text>
                <Badge color="red" size="xs" mt={8} radius="xl">
                  ⚠ At Risk
                </Badge>
              </Paper>

              {/* Main dashboard card */}
              <Paper
                radius="2xl"
                p="xl"
                shadow="xl"
                style={{
                  background: "#fff",
                  border: "1px solid #e6faf5",
                  overflow: "hidden",
                  marginTop: 20,
                }}
              >
                <Flex align="center" justify="space-between" mb={20}>
                  <Text fw={700} fz={14} c="dark.8">
                    CS 301 — Database Systems
                  </Text>
                  <Badge color="teal" size="sm">
                    48 students
                  </Badge>
                </Flex>

                <Box mb={20}>
                  <Flex justify="space-between" mb={6}>
                    <Text fz={12} c="dimmed">
                      Class Average
                    </Text>
                    <Text fz={12} fw={700} c="orange">
                      64.2/100
                    </Text>
                  </Flex>
                  <Box
                    style={{
                      height: 8,
                      background: "#f1f5f9",
                      borderRadius: 99,
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      style={{
                        height: "100%",
                        width: "64.2%",
                        background: "linear-gradient(90deg, #fb923c, #f59e0b)",
                        borderRadius: 99,
                      }}
                    />
                  </Box>
                </Box>

                {[
                  { name: "Faith Wanjiku", score: 47, risk: true },
                  { name: "Aisha Kamau", score: 74, risk: false },
                  { name: "Brian Omondi", score: 42, risk: true },
                  { name: "Cynthia Akinyi", score: 68, risk: false },
                ].map((s, i) => (
                  <Flex
                    key={i}
                    align="center"
                    justify="space-between"
                    py={8}
                    style={{
                      borderBottom: i < 3 ? "1px solid #f8f9fa" : "none",
                    }}
                  >
                    <Group gap={8}>
                      <Avatar
                        size={28}
                        radius="xl"
                        color={s.risk ? "red" : "teal"}
                        fz={10}
                      >
                        {s.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </Avatar>
                      <Text fz={12} fw={500} c="dark.7">
                        {s.name}
                      </Text>
                    </Group>
                    <Group gap={8}>
                      <Text fz={12} fw={700} c={s.risk ? "red" : "teal"}>
                        {s.score}/100
                      </Text>
                      {s.risk && (
                        <Badge color="red" size="xs" variant="light">
                          At Risk
                        </Badge>
                      )}
                    </Group>
                  </Flex>
                ))}

                <Flex mt={16} gap={8}>
                  <Button
                    size="xs"
                    color="teal"
                    variant="light"
                    flex={1}
                    leftSection={<IconFileSpreadsheet size={12} />}
                  >
                    Export Excel
                  </Button>
                  <Button
                    size="xs"
                    color="indigo"
                    variant="light"
                    flex={1}
                    leftSection={<IconBrain size={12} />}
                  >
                    AI Insights
                  </Button>
                </Flex>
              </Paper>

              {/* Floating stat */}
              <Paper
                radius="xl"
                p="md"
                shadow="lg"
                style={{
                  position: "absolute",
                  bottom: -20,
                  left: -30,
                  zIndex: 10,
                  background: "linear-gradient(135deg, #0f172a, #1e1b4b)",
                  animation: "float 4s ease-in-out infinite 2s",
                }}
              >
                <Text fz={24} fw={800} c="white">
                  85.7%
                </Text>
                <Text fz={10} c="rgba(255,255,255,0.6)">
                  would switch to Vibetech
                </Text>
              </Paper>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </Box>
  );
}

// ─── Stats Bar ────────────────────────────────────────────────────────────────
function StatsBar() {
  return (
    <Box style={{ background: "#0f172a" }}>
      <Container size="xl" py={48}>
        <Text
          fz={11}
          fw={600}
          ta="center"
          mb={32}
          c="rgba(255,255,255,0.3)"
          style={{ textTransform: "uppercase", letterSpacing: "0.12em" }}
        >
          From a 14-respondent survey of Kenyan university lecturers
        </Text>
        <SimpleGrid cols={{ base: 2, md: 4 }} spacing="xl">
          {stats.map((s) => (
            <Box key={s.value} ta="center">
              <Text
                fz={42}
                fw={800}
                lh={1}
                style={{
                  fontFamily: "'Sora', sans-serif",
                  background: "linear-gradient(135deg, #00c896, #4ddab6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {s.value}
              </Text>
              <Text fz={13} c="rgba(255,255,255,0.45)" mt={8} lh={1.5}>
                {s.label}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

// ─── Problem Section ──────────────────────────────────────────────────────────
function Problem() {
  const problems = [
    {
      icon: IconFileSpreadsheet,
      color: "#ef4444",
      title: "Excel is error-prone",
      body: "35.7% of lecturers use Excel exclusively. Manual formula chains break. Weighted totals get miscalculated. Students pay the price.",
    },
    {
      icon: IconClock,
      color: "#f59e0b",
      title: "Mark entry eats time",
      body: "78.6% of surveyed lecturers say entering marks is their most time-consuming task. That's hours every week that belong in the classroom.",
    },
    {
      icon: IconMail,
      color: "#8b5cf6",
      title: "Students are in the dark",
      body: "64.3% of lecturers field frequent student requests for marks. No visibility means anxiety, repeated emails, and wasted office hours.",
    },
    {
      icon: IconAlertTriangle,
      color: "#ec4899",
      title: "At-risk students go unnoticed",
      body: "Without proactive monitoring, struggling students only surface at the end of semester — too late for meaningful intervention.",
    },
  ];

  return (
    <Box py={100} style={{ background: "#fff" }}>
      <Container size="xl">
        <Box ta="center" mb={64}>
          <Badge color="red" variant="light" size="lg" radius="xl" mb={16}>
            The Problem
          </Badge>
          <Title
            order={2}
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              color: "#0f172a",
            }}
          >
            African universities deserve better tools
          </Title>
          <Text fz={17} c="dark.4" mt={16} maw={560} mx="auto" lh={1.7}>
            Existing LMS platforms were built for Western universities with IT
            departments, institutional licenses, and reliable infrastructure.
            They don't fit here.
          </Text>
        </Box>

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
          {problems.map((p) => (
            <Paper
              key={p.title}
              radius="xl"
              p="xl"
              style={{
                background: "#fafafa",
                border: "1px solid #f1f5f9",
              }}
            >
              <Group gap={14} mb={14} align="flex-start">
                <Box
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    flexShrink: 0,
                    background: `${p.color}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p.icon size={22} color={p.color} />
                </Box>
                <Text fw={700} fz={16} c="dark.8" pt={10}>
                  {p.title}
                </Text>
              </Group>
              <Text fz={14} c="dark.4" lh={1.75}>
                {p.body}
              </Text>
            </Paper>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

// ─── Features ─────────────────────────────────────────────────────────────────
function Features() {
  return (
    <Box py={100} style={{ background: "#f8fafc" }}>
      <Container size="xl">
        <Box ta="center" mb={64}>
          <Badge color="teal" variant="light" size="lg" radius="xl" mb={16}>
            Features
          </Badge>
          <Title
            order={2}
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              color: "#0f172a",
            }}
          >
            Everything lecturers actually need
          </Title>
          <Text fz={17} c="dark.4" mt={16} maw={560} mx="auto" lh={1.7}>
            Designed from 14 real lecturer interviews. No LMS bloat. No
            institutional IT dependency. Just the tools that make grading fast,
            accurate, and transparent.
          </Text>
        </Box>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
          {features.map((f) => (
            <Paper
              key={f.title}
              radius="xl"
              p="xl"
              style={{
                background: "#fff",
                border: "1px solid #f1f5f9",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(-4px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 16px 40px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              <Box
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  marginBottom: 20,
                  background: `${f.color}18`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <f.icon size={24} color={f.color} />
              </Box>
              <Text fw={700} fz={16} c="dark.8" mb={10}>
                {f.title}
              </Text>
              <Text fz={14} c="dark.4" lh={1.7}>
                {f.description}
              </Text>
            </Paper>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────
function HowItWorks() {
  return (
    <Box py={100} style={{ background: "#fff" }}>
      <Container size="xl">
        <Grid gap={80} align="center">
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Badge color="teal" variant="light" size="lg" radius="xl" mb={20}>
              How it works
            </Badge>
            <Title
              order={2}
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "clamp(28px, 3.5vw, 42px)",
                fontWeight: 800,
                color: "#0f172a",
                lineHeight: 1.15,
                marginBottom: 20,
              }}
            >
              From zero to AI-powered grading in one afternoon
            </Title>
            <Text fz={16} c="dark.4" lh={1.8} mb={32}>
              No server setup. No IT ticket. No institutional license. A single
              lecturer can get their entire class running in under an hour.
            </Text>
            <Button
              size="md"
              radius="xl"
              fw={600}
              rightSection={<IconArrowRight size={16} />}
              style={{
                background: "linear-gradient(135deg, #00c896, #009973)",
              }}
            >
              Request Early Access
            </Button>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 7 }}>
            <Stack gap="lg">
              {howItWorks.map((step, i) => (
                <Flex key={step.step} gap={20} align="flex-start">
                  <Box style={{ flexShrink: 0 }}>
                    <Box
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: 16,
                        background:
                          i === 0
                            ? "linear-gradient(135deg, #00c896, #009973)"
                            : "#f1f5f9",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        fw={800}
                        fz={15}
                        style={{ fontFamily: "'Sora', sans-serif" }}
                        c={i === 0 ? "white" : "dark.4"}
                      >
                        {step.step}
                      </Text>
                    </Box>
                    {i < howItWorks.length - 1 && (
                      <Box
                        style={{
                          width: 2,
                          height: 24,
                          background: "#e2e8f0",
                          margin: "6px auto",
                        }}
                      />
                    )}
                  </Box>
                  <Box pt={10}>
                    <Text fw={700} fz={16} c="dark.8" mb={6}>
                      {step.title}
                    </Text>
                    <Text fz={14} c="dark.4" lh={1.7}>
                      {step.body}
                    </Text>
                  </Box>
                </Flex>
              ))}
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}

// ─── AI Spotlight ─────────────────────────────────────────────────────────────
function AISpotlight() {
  return (
    <Box
      py={100}
      style={{
        background:
          "linear-gradient(160deg, #0f172a 0%, #1e1b4b 60%, #0f172a 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 600,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(0,200,150,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Container size="xl" style={{ position: "relative", zIndex: 1 }}>
        <Box ta="center" mb={64}>
          <Badge
            size="lg"
            radius="xl"
            mb={20}
            style={{
              background: "rgba(0,200,150,0.15)",
              color: "#4ddab6",
              border: "1px solid rgba(0,200,150,0.25)",
            }}
          >
            <Group gap={6}>
              <IconBrain size={13} />
              AI Differentiation
            </Group>
          </Badge>
          <Title
            order={2}
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "clamp(28px, 4vw, 46px)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.15,
              marginBottom: 20,
            }}
          >
            The AI works while{" "}
            <Text
              span
              style={{
                background: "linear-gradient(135deg, #00c896, #4ddab6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              you sleep
            </Text>
          </Title>
          <Text fz={17} c="rgba(255,255,255,0.5)" maw={600} mx="auto" lh={1.7}>
            Every night, a scheduled cron job analyses all student data, calls
            the Anthropic API, and delivers personalised natural-language
            insights — to both lecturers and students.
          </Text>
        </Box>

        <Grid gap="lg" justify="center">
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Paper
              radius="xl"
              p="xl"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                height: "100%",
              }}
            >
              <Group gap={8} mb={16}>
                <ThemeIcon
                  size={32}
                  radius="md"
                  style={{ background: "rgba(99,102,241,0.2)" }}
                >
                  <IconUsers size={16} color="#818cf8" />
                </ThemeIcon>
                <Text fw={700} fz={13} c="white">
                  Lecturer Digest
                </Text>
                <Badge size="xs" color="red" variant="filled" ml="auto">
                  9 flagged
                </Badge>
              </Group>
              <Text fz={12} c="rgba(255,255,255,0.35)" mb={12}>
                CS 301 — Database Systems · Today, 06:02 AM
              </Text>
              <Box
                p="md"
                style={{
                  background: "rgba(239,68,68,0.08)",
                  borderRadius: rem(12),
                  border: "1px solid rgba(239,68,68,0.15)",
                }}
              >
                <Text fz={13} c="rgba(255,255,255,0.75)" lh={1.7}>
                  <Text span fw={700} c="white">
                    9 of 48 students
                  </Text>{" "}
                  are performing below 50%. Class average (64.2) is 6 points
                  below the departmental benchmark. Suggested intervention:
                  revision session on normalisation before the exam window.
                </Text>
              </Box>
              <Group gap={8} mt={16}>
                <Badge size="sm" color="red" variant="dot">
                  Faith Wanjiku — 47/100
                </Badge>
                <Badge size="sm" color="red" variant="dot">
                  Brian Omondi — 42/100
                </Badge>
                <Badge size="sm" color="orange" variant="dot">
                  +7 more
                </Badge>
              </Group>
            </Paper>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 5 }}>
            <Paper
              radius="xl"
              p="xl"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                height: "100%",
              }}
            >
              <Group gap={8} mb={16}>
                <ThemeIcon
                  size={32}
                  radius="md"
                  style={{ background: "rgba(0,200,150,0.15)" }}
                >
                  <IconBrain size={16} color="#4ddab6" />
                </ThemeIcon>
                <Text fw={700} fz={13} c="white">
                  Student Feedback
                </Text>
                <Badge
                  size="xs"
                  style={{
                    background: "rgba(0,200,150,0.2)",
                    color: "#4ddab6",
                  }}
                  ml="auto"
                >
                  Personal
                </Badge>
              </Group>
              <Text fz={12} c="rgba(255,255,255,0.35)" mb={12}>
                Faith Wanjiku · CS/2021/043 · Today, 06:04 AM
              </Text>
              <Box
                p="md"
                style={{
                  background: "rgba(0,200,150,0.06)",
                  borderRadius: rem(12),
                  border: "1px solid rgba(0,200,150,0.15)",
                }}
              >
                <Text
                  fz={13}
                  c="rgba(255,255,255,0.75)"
                  lh={1.7}
                  style={{ fontStyle: "italic" }}
                >
                  "Faith scored 12/30 on CAT 1 and 15/30 on CAT 2 (class
                  averages: 18.4 and 20.1). Her exam score of 34/70 is 17 points
                  below the class average of 51.3. Recommended focus areas: core
                  database normalisation concepts and SQL query optimisation."
                </Text>
              </Box>
            </Paper>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function Testimonials() {
  return (
    <Box py={100} style={{ background: "#f8fafc" }}>
      <Container size="xl">
        <Box ta="center" mb={64}>
          <Badge color="teal" variant="light" size="lg" radius="xl" mb={16}>
            From the pilot
          </Badge>
          <Title
            order={2}
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              color: "#0f172a",
            }}
          >
            Lecturers who've seen it
          </Title>
        </Box>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
          {testimonials.map((t) => (
            <Paper
              key={t.name}
              radius="xl"
              p="xl"
              shadow="sm"
              style={{
                background: "#fff",
                border: "1px solid #f1f5f9",
                position: "relative",
              }}
            >
              <IconQuote
                size={32}
                color={t.color}
                style={{ opacity: 0.2, marginBottom: 16 }}
              />
              <Text
                fz={15}
                c="dark.6"
                lh={1.8}
                mb={24}
                style={{ fontStyle: "italic" }}
              >
                "{t.quote}"
              </Text>
              <Divider mb={20} />
              <Group gap={12}>
                <Avatar
                  size={40}
                  radius="xl"
                  style={{
                    background: t.color,
                    color: "#fff",
                    fontWeight: 700,
                  }}
                >
                  {t.initials}
                </Avatar>
                <Box>
                  <Text fz={13} fw={700} c="dark.8">
                    {t.name}
                  </Text>
                  <Text fz={11} c="dimmed">
                    {t.role}
                  </Text>
                </Box>
              </Group>
            </Paper>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function CTA() {
  return (
    <Box
      py={100}
      style={{
        background:
          "linear-gradient(135deg, #00c896 0%, #009973 40%, #006b52 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        style={{
          position: "absolute",
          top: -60,
          right: -60,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.06)",
          pointerEvents: "none",
        }}
      />
      <Box
        style={{
          position: "absolute",
          bottom: -80,
          left: -40,
          width: 250,
          height: 250,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.04)",
          pointerEvents: "none",
        }}
      />

      <Container
        size="md"
        ta="center"
        style={{ position: "relative", zIndex: 1 }}
      >
        <Title
          order={2}
          style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.15,
            marginBottom: 20,
          }}
        >
          Ready to stop fighting Excel?
        </Title>
        <Text
          fz={18}
          c="rgba(255,255,255,0.75)"
          mb={40}
          lh={1.7}
          maw={500}
          mx="auto"
        >
          Vibetech Education is in its pilot phase. If you are a lecturer at a
          Kenyan university and want to be part of the first cohort, reach out.
        </Text>

        <Group justify="center" gap={14} mb={40}>
          <Button
            size="xl"
            radius="xl"
            fw={700}
            rightSection={<IconArrowRight size={20} />}
            style={{
              background: "#fff",
              color: "#00a07a",
              paddingInline: 40,
              height: 58,
              boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
            }}
          >
            Request Early Access
          </Button>
          <Button
            size="xl"
            radius="xl"
            fw={600}
            variant="outline"
            leftSection={<IconMail size={18} />}
            style={{
              borderColor: "rgba(255,255,255,0.4)",
              color: "#fff",
              paddingInline: 32,
              height: 58,
            }}
          >
            Contact the Team
          </Button>
        </Group>

        <Group justify="center" gap={32}>
          {[
            "Free pilot semester",
            "No credit card required",
            "Set up in under 1 hour",
          ].map((item) => (
            <Group key={item} gap={6}>
              <IconCheck size={15} color="rgba(255,255,255,0.7)" />
              <Text fz={13} c="rgba(255,255,255,0.7)" fw={500}>
                {item}
              </Text>
            </Group>
          ))}
        </Group>
      </Container>
    </Box>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <Box
      style={{
        background: "#0f172a",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <Container size="xl" py={60}>
        <Grid gap={48} mb={48}>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Group gap={10} mb={16}>
              <Box
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 9,
                  background: "linear-gradient(135deg, #00c896, #009973)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconBrain size={17} color="white" />
              </Box>
              <Text
                fw={800}
                fz={18}
                c="white"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                Vibetech Education
              </Text>
            </Group>
            <Text fz={13} c="rgba(255,255,255,0.4)" lh={1.8} maw={280}>
              Lightweight, AI-powered grading for African universities. Built
              from surveying real lecturers. Not adapted from Western tools.
            </Text>
          </Grid.Col>

          {[
            {
              title: "Product",
              links: ["Features", "How it works", "Roadmap"],
            },
            { title: "Company", links: ["About", "Survey Data", "Contact"] },
            { title: "Legal", links: ["Privacy Policy", "Terms of Service"] },
          ].map((col) => (
            <Grid.Col span={{ base: 6, md: "auto" }} key={col.title}>
              <Text
                fz={12}
                fw={700}
                c="rgba(255,255,255,0.3)"
                mb={16}
                style={{ textTransform: "uppercase", letterSpacing: "0.1em" }}
              >
                {col.title}
              </Text>
              <Stack gap={10}>
                {col.links.map((link) => (
                  <Text
                    key={link}
                    fz={13}
                    c="rgba(255,255,255,0.5)"
                    style={{ cursor: "pointer" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#00c896")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
                    }
                  >
                    {link}
                  </Text>
                ))}
              </Stack>
            </Grid.Col>
          ))}
        </Grid>

        <Divider color="rgba(255,255,255,0.06)" mb={24} />

        <Flex justify="space-between" align="center" wrap="wrap" gap={12}>
          <Text fz={12} c="rgba(255,255,255,0.25)">
            © 2026 Vibetech Education. Built by Wamalwa Christian Timbe.
          </Text>
          <Text fz={12} c="rgba(255,255,255,0.25)">
            Powered by{" "}
            <Text span c="rgba(0,200,150,0.6)" fw={600}>
              Anthropic Claude
            </Text>
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function LandingPage() {
  return (
    <MantineProvider theme={theme}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; background: #fff; }
        html { scroll-behavior: smooth; }
      `}</style>

      <Navbar />
      <Hero />
      <StatsBar />
      <Problem />
      <Features />
      <HowItWorks />
      <AISpotlight />
      <Testimonials />
      <CTA />
      <Footer />
    </MantineProvider>
  );
}
