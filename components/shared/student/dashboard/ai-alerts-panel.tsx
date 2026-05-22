import { aiAlerts } from "@/lib/utils/constants";
import {
  Badge,
  Box,
  Group,
  Paper,
  rem,
  Stack,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { IconBrain } from "@tabler/icons-react";

export default function AIAlertsPanel() {
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
