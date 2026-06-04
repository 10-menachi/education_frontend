"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Group,
  MantineProvider,
  Select,
  Stack,
  Stepper,
  Text,
  TextInput,
  ThemeIcon,
  Title,
  createTheme,
  rem,
} from "@mantine/core";
import {
  IconArrowLeft,
  IconArrowRight,
  IconChartBar,
  IconCheck,
  IconId,
  IconMail,
  IconPhone,
  IconShieldCheck,
  IconUser,
} from "@tabler/icons-react";

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
  },
  radius: { md: rem(12), lg: rem(16), xl: rem(24) },
});

const departments = [
  "Computer Science",
  "Electrical Engineering",
  "Mechanical Engineering",
  "Information Technology",
  "Mathematics",
  "Physics",
  "Business & Economics",
];
const ranks = [
  "Assistant Lecturer",
  "Lecturer",
  "Senior Lecturer",
  "Associate Professor",
  "Professor",
];

function LeftPanel() {
  return (
    <Box
      style={{
        background:
          "linear-gradient(160deg, #0f172a 0%, #1e1b4b 55%, #0f172a 100%)",
        minHeight: "100vh",
        padding: "60px 48px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        style={{
          position: "absolute",
          top: -80,
          right: -80,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(99,102,241,0.2) 0%,transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <Box
        style={{
          position: "absolute",
          bottom: 80,
          left: -60,
          width: 240,
          height: 240,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(20,184,166,0.15) 0%,transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <Box>
        <Group gap={10} mb={64}>
          <Box
            style={{
              width: 40,
              height: 40,
              borderRadius: 12,
              background: "linear-gradient(135deg,#6366f1,#14b8a6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconChartBar size={22} color="white" />
          </Box>
          <Box>
            <Text fw={700} fz={20} c="white" lh={1.1}>
              Vibetech
            </Text>
            <Text fz={11} c="rgba(255,255,255,0.35)" lh={1}>
              Education
            </Text>
          </Box>
        </Group>
        <Title order={1} fz={30} fw={800} c="white" lh={1.3} mb={12}>
          Educator portal.
          <br />
          <Text span c="indigo.3">
            Your classroom,
            <br />
            your data.
          </Text>
        </Title>
        <Text
          fz={13}
          c="rgba(255,255,255,0.4)"
          lh={1.9}
          style={{ maxWidth: 300 }}
        >
          Register to manage your classes, track student performance, and get
          AI-powered insights — all in one place.
        </Text>
      </Box>
      <Box>
        <Group gap={10} align="flex-start" mb={24}>
          <ThemeIcon
            size={32}
            radius="md"
            style={{ background: "rgba(99,102,241,0.2)", flexShrink: 0 }}
          >
            <IconShieldCheck size={15} color="#818cf8" />
          </ThemeIcon>
          <Box>
            <Text fz={12} fw={600} c="white" mb={2}>
              Admin-approved access
            </Text>
            <Text fz={11} c="rgba(255,255,255,0.4)" lh={1.6}>
              Once approved, your login credentials will be sent to your
              institutional email.
            </Text>
          </Box>
        </Group>
        <Text fz={11} c="rgba(255,255,255,0.2)">
          © 2026 Vibetech Education
        </Text>
      </Box>
    </Box>
  );
}

export default function LecturerRegisterPage() {
  const [active, setActive] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  // Step 1 — Personal
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Step 2 — Professional
  const [staffId, setStaffId] = useState("");
  const [department, setDepartment] = useState<string | null>(null);
  const [rank, setRank] = useState<string | null>(null);

  const steps = ["Personal", "Professional"];

  const canProceed = [
    fullName.trim() !== "" && email.trim() !== "",
    staffId.trim() !== "" && department !== null && rank !== null,
  ];

  if (submitted) {
    return (
      <MantineProvider theme={theme}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');*{box-sizing:border-box;}body{margin:0;}`}</style>
        <Flex style={{ minHeight: "100vh", alignItems: "flex-start" }}>
          <Box
            style={{
              width: "42%",
              flexShrink: 0,
              position: "sticky",
              top: 0,
              height: "100vh",
            }}
          >
            <LeftPanel />
          </Box>
          <Flex
            flex={1}
            align="center"
            justify="center"
            style={{ background: "#f8fafc" }}
          >
            <Box ta="center" style={{ maxWidth: 320 }}>
              <Box
                mx="auto"
                mb={20}
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg,#14b8a6,#6366f1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconCheck size={30} color="white" />
              </Box>
              <Title order={2} fz={22} fw={800} c="dark.9" mb={8}>
                Application sent!
              </Title>
              <Text fz={13} c="dimmed" lh={1.8} mb={28}>
                Your registration is pending approval. Once verified, your login
                credentials will be sent to{" "}
                <Text span fw={600} c="dark.8">
                  {email}
                </Text>
                .
              </Text>
              <Button radius="xl" color="indigo" variant="light" fullWidth>
                Back to Login
              </Button>
            </Box>
          </Flex>
        </Flex>
      </MantineProvider>
    );
  }

  return (
    <MantineProvider theme={theme}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');*{box-sizing:border-box;}body{margin:0;}`}</style>
      <Flex style={{ minHeight: "100vh", alignItems: "flex-start" }}>
        <Box
          style={{
            width: "42%",
            flexShrink: 0,
            position: "sticky",
            top: 0,
            height: "100vh",
          }}
        >
          <LeftPanel />
        </Box>

        <Flex
          flex={1}
          align="center"
          justify="center"
          style={{
            background: "#f8fafc",
            padding: "40px 32px",
            minHeight: "100vh",
          }}
        >
          <Box style={{ width: "100%", maxWidth: 400 }}>
            <Text
              fz={11}
              fw={700}
              c="indigo.5"
              mb={6}
              style={{ textTransform: "uppercase", letterSpacing: "0.1em" }}
            >
              Lecturer Registration
            </Text>
            <Title order={2} fz={24} fw={800} c="dark.9" mb={2}>
              Create your account
            </Title>
            <Text fz={13} c="dimmed" mb={28}>
              Already registered?{" "}
              <Text span c="indigo.5" fw={600} style={{ cursor: "pointer" }}>
                Sign in
              </Text>
            </Text>

            <Stepper
              active={active}
              color="indigo"
              size="xs"
              radius="xl"
              mb={28}
              styles={{ stepLabel: { fontSize: 11, fontWeight: 600 } }}
            >
              {steps.map((s) => (
                <Stepper.Step key={s} label={s} />
              ))}
            </Stepper>

            {/* ── Step 1: Personal ── */}
            {active === 0 && (
              <Stack gap={14} mb={24}>
                <Box mb={4}>
                  <Title order={3} fz={18} fw={800} c="dark.9" mb={2}>
                    Personal details
                  </Title>
                  <Text fz={12} c="dimmed">
                    Your name and contact information.
                  </Text>
                </Box>
                <TextInput
                  label="Full Name"
                  placeholder="Kamau Njoroge"
                  leftSection={<IconUser size={14} />}
                  value={fullName}
                  onChange={(e) => setFullName(e.currentTarget.value)}
                  radius="md"
                />
                <TextInput
                  label="Institutional Email"
                  placeholder="k.njoroge@university.edu"
                  leftSection={<IconMail size={14} />}
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  radius="md"
                  description="Your login credentials will be sent here once approved."
                />
                <TextInput
                  label="Phone Number (optional)"
                  placeholder="+254 700 000 000"
                  leftSection={<IconPhone size={14} />}
                  value={phone}
                  onChange={(e) => setPhone(e.currentTarget.value)}
                  radius="md"
                />
              </Stack>
            )}

            {/* ── Step 2: Professional ── */}
            {active === 1 && (
              <Stack gap={14} mb={24}>
                <Box mb={4}>
                  <Title order={3} fz={18} fw={800} c="dark.9" mb={2}>
                    Professional details
                  </Title>
                  <Text fz={12} c="dimmed">
                    Your department and staff information.
                  </Text>
                </Box>
                <TextInput
                  label="Staff ID"
                  placeholder="STR/LECT/2024/001"
                  leftSection={<IconId size={14} />}
                  value={staffId}
                  onChange={(e) => setStaffId(e.currentTarget.value)}
                  radius="md"
                  description="Your institution-issued staff number."
                />
                <Select
                  label="Department"
                  placeholder="Select department"
                  data={departments}
                  searchable
                  value={department}
                  onChange={setDepartment}
                  radius="md"
                />
                <Select
                  label="Academic Rank"
                  placeholder="Select rank"
                  data={ranks}
                  value={rank}
                  onChange={setRank}
                  radius="md"
                />
              </Stack>
            )}

            {/* Navigation */}
            <Group justify="space-between">
              <Button
                variant="subtle"
                color="gray"
                radius="xl"
                size="sm"
                leftSection={<IconArrowLeft size={13} />}
                disabled={active === 0}
                onClick={() => setActive((a) => a - 1)}
              >
                Back
              </Button>
              <Button
                radius="xl"
                size="sm"
                color="indigo"
                disabled={!canProceed[active]}
                rightSection={
                  active < steps.length - 1 ? (
                    <IconArrowRight size={13} />
                  ) : (
                    <IconCheck size={13} />
                  )
                }
                onClick={() =>
                  active < steps.length - 1
                    ? setActive((a) => a + 1)
                    : setSubmitted(true)
                }
              >
                {active < steps.length - 1 ? "Continue" : "Submit Application"}
              </Button>
            </Group>

            {/* Dot progress */}
            <Group justify="center" gap={6} mt={20}>
              {steps.map((_, i) => (
                <Box
                  key={i}
                  style={{
                    width: i === active ? 20 : 7,
                    height: 7,
                    borderRadius: 4,
                    background:
                      i === active
                        ? "#6366f1"
                        : i < active
                          ? "#14b8a6"
                          : "#e2e8f0",
                    transition: "all 0.25s ease",
                  }}
                />
              ))}
            </Group>

            <Text fz={11} c="dimmed" ta="center" mt={16} lh={1.7}>
              Student accounts are created by lecturers after login.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </MantineProvider>
  );
}
