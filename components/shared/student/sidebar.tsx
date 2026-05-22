"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { studentSidebarLinks } from "@/lib/utils/constants";
import {
  Box,
  Button,
  Group,
  NavLink,
  Paper,
  rem,
  Stack,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { IconAward, IconBrain, IconLogout } from "@tabler/icons-react";

export default function Sidebar() {
  const pathname = usePathname();
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

      <Stack gap={4} flex={1}>
        {studentSidebarLinks.map((l) => {
          const isActive =
            pathname === l.link || pathname.startsWith(l.link + "/");
          return (
            <NavLink
              href={l.link}
              key={l.label}
              label={
                <Text fz={14} fw={isActive ? 600 : 400} c="white">
                  {l.label}
                </Text>
              }
              leftSection={
                <l.icon
                  size={18}
                  color={isActive ? "white" : "rgba(255,255,255,0.65)"}
                />
              }
              style={{
                borderRadius: rem(10),
                background: isActive ? "rgba(255,255,255,0.18)" : "transparent",
                padding: "10px 12px",
              }}
            />
          );
        })}
      </Stack>

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
          component={Link}
          href="/student/ai-insights"
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
