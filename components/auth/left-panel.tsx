import { Box, Group, Text, ThemeIcon, Title } from "@mantine/core";
import { IconChartBar, IconShieldCheck } from "@tabler/icons-react";
import Logo from "../shared/logo";

export default function LeftPanel() {
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
        <Logo />

        <Title order={1} fz={30} fw={800} c="white" lh={1.3} mb={12}>
          Welcome back.
          <br />
          <Text span c="indigo.3">
            Your progress
            <br />
            awaits you.
          </Text>
        </Title>
        <Text
          fz={13}
          c="rgba(255,255,255,0.4)"
          lh={1.9}
          style={{ maxWidth: 300 }}
        >
          Sign in to access your dashboard, track performance, and stay on top
          of your academic journey.
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
              Secure access
            </Text>
            <Text fz={11} c="rgba(255,255,255,0.4)" lh={1.6}>
              Your credentials are encrypted and never shared.
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
