import { lecturer, links } from "@/lib/utils/constants/data";
import {
  Avatar,
  Badge,
  Box,
  Divider,
  Group,
  NavLink,
  rem,
  Stack,
  Text,
} from "@mantine/core";
import { IconChartBar, IconLogout } from "@tabler/icons-react";

export default function LecturerSidebar() {
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
