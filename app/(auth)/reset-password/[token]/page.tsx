"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Group,
  MantineProvider,
  PasswordInput,
  Text,
  ThemeIcon,
  Title,
  createTheme,
  rem,
} from "@mantine/core";
import {
  IconArrowLeft,
  IconChartBar,
  IconCheck,
  IconLock,
  IconShieldCheck,
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

function LeftPanel() {
  return (
    <Box
      style={{
        background:
          "linear-gradient(160deg, #0f172a 0%, #1e1b4b 55%, #0f172a 100%)",
        height: "100vh",
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
          Almost there.
          <br />
          <Text span c="indigo.3">
            Set a new
            <br />
            password.
          </Text>
        </Title>
        <Text
          fz={13}
          c="rgba(255,255,255,0.4)"
          lh={1.9}
          style={{ maxWidth: 300 }}
        >
          Choose something strong and memorable. You won't be asked for it again
          until your next login.
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
              This link is single-use
            </Text>
            <Text fz={11} c="rgba(255,255,255,0.4)" lh={1.6}>
              Once your password is reset, this link will no longer be valid.
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

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [done, setDone] = useState(false);

  const mismatch = confirm.length > 0 && password !== confirm;
  const canSubmit = password.length >= 6 && password === confirm;

  if (done) {
    return (
      <MantineProvider theme={theme}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');*{box-sizing:border-box;}body{margin:0;}`}</style>
        <Flex style={{ height: "100vh", overflow: "hidden" }}>
          <Box style={{ width: "42%", flexShrink: 0 }}>
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
                Password reset!
              </Title>
              <Text fz={13} c="dimmed" lh={1.8} mb={28}>
                Your password has been updated successfully. You can now sign in
                with your new credentials.
              </Text>
              <Button
                radius="xl"
                color="indigo"
                fullWidth
                leftSection={<IconArrowLeft size={13} />}
              >
                Go to Login
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
      <Flex style={{ height: "100vh", overflow: "hidden" }}>
        <Box style={{ width: "42%", flexShrink: 0 }}>
          <LeftPanel />
        </Box>

        <Flex
          flex={1}
          align="center"
          justify="center"
          style={{ background: "#f8fafc", padding: "40px 32px" }}
        >
          <Box style={{ width: "100%", maxWidth: 380 }}>
            <Text
              fz={11}
              fw={700}
              c="indigo.5"
              mb={6}
              style={{ textTransform: "uppercase", letterSpacing: "0.1em" }}
            >
              Password Reset
            </Text>
            <Title order={2} fz={24} fw={800} c="dark.9" mb={2}>
              Set a new password
            </Title>
            <Text fz={13} c="dimmed" mb={28}>
              Must be at least 6 characters.
            </Text>

            <Box mb={14}>
              <PasswordInput
                label="New Password"
                placeholder="Min. 6 characters"
                leftSection={<IconLock size={14} />}
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                radius="md"
              />
            </Box>

            <Box mb={24}>
              <PasswordInput
                label="Confirm Password"
                placeholder="Repeat new password"
                leftSection={<IconLock size={14} />}
                value={confirm}
                onChange={(e) => setConfirm(e.currentTarget.value)}
                radius="md"
                error={mismatch ? "Passwords don't match" : undefined}
              />
            </Box>

            <Button
              fullWidth
              radius="xl"
              size="md"
              color="indigo"
              disabled={!canSubmit}
              onClick={() => setDone(true)}
            >
              Reset Password
            </Button>

            <Flex justify="center" mt={20}>
              <Group gap={6} style={{ cursor: "pointer" }}>
                <IconArrowLeft size={13} color="#6366f1" />
                <Text fz={13} c="indigo.5" fw={600}>
                  Back to Login
                </Text>
              </Group>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </MantineProvider>
  );
}
