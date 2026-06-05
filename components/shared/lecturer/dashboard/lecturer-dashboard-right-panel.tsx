import { recentActivity } from "@/lib/utils/constants/data";
import {
  Badge,
  Box,
  Button,
  Divider,
  Group,
  Paper,
  Progress,
  Stack,
  Text,
  ThemeIcon,
} from "@mantine/core";
import {
  IconBrain,
  IconFile,
  IconFileSpreadsheet,
  IconMail,
  IconSend,
  IconUpload,
} from "@tabler/icons-react";

export default function LecturerDashboardRightPanel() {
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
